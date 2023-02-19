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
      title: data.title,
      price: data.price,
      detail: data.detail
    }
    axios.post(`${baseURL}/expenses/addExpense`, DATA)
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
      title='Add New Expense'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebarAdd}
      onClosed={handleSidebarClosed}
    >

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='title'>Name</Label>
          <Input
            id='title'
            name='title'
            innerRef={register({ required: true })}
            invalid={errors.title && true}
            placeholder='Title'
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
