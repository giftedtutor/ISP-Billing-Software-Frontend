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

const SidebarEdit = ({ open, toggleSidebarEdit, editID, setEditID }) => {
  const { register, errors, handleSubmit } = useForm()
  const [packageID, setpackageID] = useState('')
  const [editData, setEditData] = useState({})

  useEffect(() => {
    axios.get(`${baseURL}/packages/editPackage?package_id=${editID}`)
      .then((response) => {
        setEditData(response.data)
      }).catch((err) => console.log(err))
  }, [editID])

  const submitForm = (data, package_id) => {

    const DATA = {
      user_id: Cookies.get("id"),
      _id: editData?._id,
      name: data.name,
      package_type: data.package_type,
      price: data.price,
      detail: data.detail,
      status: data.status
    }
    axios.put(`${baseURL}/packages/updatePackage`, DATA)
      .then(res => {
        console.log('UPDATE::::', res.data)
        if (res.data.status === "ok") {
          toast(res.data.message)
          toggleSidebarEdit()
          setEditID(0)
          setEditData({})

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
    console.log('data', data, packageID)
    submitForm(data, packageID)
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
      toggleSidebar={toggleSidebarEdit}
      onClosed={handleSidebarClosed}
    >

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='name'>Package Name</Label>
          <Input
            id='name'
            name='name'
            defaultValue={editData?.name}
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
            defaultValue={editData?.package_type}
            innerRef={register({ required: true })}
            invalid={errors.package_type && true}
            placeholder='Father Name'
          />
        </FormGroup>
        <FormGroup>
          <Label for='price'>Price</Label>
          <Input
            id='price'
            name='price'
            type="price"
            defaultValue={editData?.price}
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
            defaultValue={editData?.detail}
            innerRef={register({ required: true })}
            invalid={errors.detail && true}
            placeholder='Phone No'
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

export default SidebarEdit
