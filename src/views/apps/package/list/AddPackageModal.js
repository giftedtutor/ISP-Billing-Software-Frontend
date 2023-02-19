// ** React Import
import { useEffect, useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

import axios from 'axios'
// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import Cookies from 'js-cookie'
import baseURL from "../../../../baseURL/baseURL.js"
import { toast } from 'react-toastify'

const SidebarAdd = ({ open, toggleSidebarAdd }) => {
  const { register, errors, handleSubmit } = useForm()

  const submitForm = (data) => {

    const DATA = {
      user_id: Cookies.get("id"),
      name: data.name,
      package_type: data.package_type,
      status: 'ACTIVE',
      price: data.price,
      detail: data.detail
    }
    axios.post(`${baseURL}/packages/addPackage`, DATA)
      .then(res => {
        if (res.data.status === "ok") {
          toast(res.data.message)
          toggleSidebarAdd()

        } else {
          console.log("Somthing went Wrong - Error")
        }
      })
      .catch(err => {
        console.log("Error", err)
        toast(err)
      })
  }
  const onSubmit = data => {
    submitForm(data)
  }

  const handleSidebarClosed = () => {

  }
  return (
    <Sidebar
      size='lg'
      open={open}
      title='Add New Package'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebarAdd}
      onClosed={handleSidebarClosed}
    >

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='name'>Package Name</Label>
          <Input
            id='name'
            name='name'
            innerRef={register({ required: true })}
            invalid={errors.name && true}
            placeholder='Package Name'
          />
        </FormGroup>
        <FormGroup>
          <Label for='package_type'>Package Type</Label>
          <Input
            id='package_type'
            name='package_type'
            defaultValue='INTERNET'
            innerRef={register({ required: true })}
            invalid={errors.package_type && true}
            placeholder='Type'
          />
        </FormGroup>
        <FormGroup>
          <Label for='price'>Price</Label>
          <Input
            id='price'
            name='price'
            type="Number"
            placeholder='Price'
            innerRef={register({ required: true })}
            invalid={errors.price && true}
          />
        </FormGroup>
        <FormGroup>
          <Label for='detail'>Detail</Label>
          <Input
            id='detail'
            name='detail'
            innerRef={register({ required: true })}
            invalid={errors.detail && true}
            placeholder='Detail'
          />
        </FormGroup>
        <FormGroup className='d-flex mb-0'>
          <Button.Ripple className='mr-1' color='primary' type='submit'>
            Submit
          </Button.Ripple>
          <Button.Ripple className='mr-1' outline color='secondary' type='reset'>
            Reset
          </Button.Ripple>
        </FormGroup>
      </Form>
    </Sidebar>
  )
}

export default SidebarAdd
