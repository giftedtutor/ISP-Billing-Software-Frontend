// ** React Import
import { useEffect, useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

import axios from 'axios'
// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import Cookies from 'js-cookie'
import baseURL from "../../../../baseURL/baseURL.js"
import { toast } from 'react-toastify'

const SidebarEdit = ({ open, toggleSidebarEdit, editID, setEditID }) => {
  const { register, errors, handleSubmit } = useForm()
  const [packageID, setpackageID] = useState('')
  const [packageOptions, setPackageOptions] = useState([])
  const [cnicFrontPic, setCnicFrontPic] = useState('')
  const [cnicBackPic, setCnicBackPic] = useState('')
  const [editData, setEditData] = useState({})
  const uploadImageFunction = (File, type) => {
    const formData = new FormData()
    formData.append("files", File)

    axios.post(`${baseURL}/generals/uploadImage`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        if (res.data.messsage === "Files Uploaded") {
          if (type === 1) {
            setCnicFrontPic(res.data.data[0]?.img)
          } else if (type === 2) {
            setCnicBackPic(res.data.data[0]?.img)
          }

          toast("Image Picked Up!")
        } else {
          toast("Somthing went Wrong while Uploading File!")
        }
      })
      .catch(err => {
      })
  }

  useEffect(() => {

    axios.get(`${baseURL}/packages/getPackagesDropdown`)
      .then((response) => {
        const rec = response.data.map(({ _id, name }) => ({
          id: _id,
          value: _id,
          label: name
        }))
        setPackageOptions(rec)
      }).catch((err) => console.log(err))

  }, [])

  useEffect(() => {

      
    axios.get(`${baseURL}/customers/editCustomer?customer_id=${editID}`)
    .then((response) => {
      setEditData(response.data)
      setCnicBackPic(response.data.cnic_back_pictrue)
      setCnicFrontPic(response.data.cnic_front_pictrue)
      setpackageID(response.data.package_id)
    }).catch((err) => console.log(err))
  }, [editID])

  const submitForm = (data, package_id) => {

    const DATA = {
      user_id: Cookies.get("id"),
      _id: editData?._id,
      name: data.name,
      father_name: data.father_name,
      package_id : package_id === "" ? packageID : package_id,
      email: data.email,
      phone_no: data.phone_no,
      address: data.address,
      cnic: data.cnic,
      cnic_front_pictrue: cnicFrontPic,
      cnic_back_pictrue: cnicBackPic
    }
    axios.put(`${baseURL}/customers/updateCustomer`, DATA)
      .then(res => {
        if (res.data.status === "ok") {
          toast(res.data.message)
          toggleSidebarEdit()
          setpackageID('')
          setEditID(0)
          setEditData({})
        
        } else {
          toast("Somthing went Wrong - Error")
        }
      })
      .catch(err => {
        toast(err)
      })
  }
  const onSubmit = data => {
    submitForm(data, packageID)
  }

  const handleSidebarClosed = () => {

  }
  return (
    <Sidebar
      size='lg'
      open={open}
      title='Add New Customer'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebarEdit}
      onClosed={handleSidebarClosed}
    >

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='name'>Customer Name</Label>
          <Input
            id='name'
            name='name'
            defaultValue={editData?.name}
            innerRef={register({ required: true })}
            invalid={errors.name && true}
            placeholder='Customer Name'
          />
        </FormGroup>
        <FormGroup>
          <Label for='father_name'>Father Name</Label>
          <Input
            id='father_name'
            name='father_name'
            defaultValue={editData?.father_name}
            innerRef={register({ required: true })}
            invalid={errors.father_name && true}
            placeholder='Father Name'
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input
            id='email'
            name='email'
            type="email"
            defaultValue={editData?.email}
            placeholder='example@gmail.com'
            innerRef={register({ required: true })}
            invalid={errors.email && true}
          />
        </FormGroup>
        <FormGroup>
          <Label for='phone_no'>Phone No</Label>
          <Input
            id='phone_no'
            name='phone_no'
            defaultValue={editData?.phone_no}
            innerRef={register({ required: true })}
            invalid={errors.phone_no && true}
            placeholder='Phone No'
          />
        </FormGroup>
        <FormGroup>
          <Label for='address'>Address</Label>
          <Input
            id='address'
            name='address'
            defaultValue={editData?.address}
            innerRef={register({ required: true })}
            invalid={errors.address && true}
            placeholder='Address'
          />
        </FormGroup>
        <FormGroup>
          <Label for='package_id'>Package</Label>

          <Select
            isClearable={false}
            classNamePrefix='select'
            options={packageOptions}
            type="text"
            name='package_id'
            id='package_id'
            defaultValue={editData?.package_id}
            innerRef={register({ required: true })}
            invalid={errors.package_id && true}
            onChange={(e) => {
              setpackageID(e.value)
            }}
            placeholder='Select Package'
          />
        </FormGroup>
        <FormGroup>
          <Label for='cnic'>CNIC</Label>
          <Input
            id='cnic'
            name='cnic'
            defaultValue={editData?.cnic}
            innerRef={register({ required: true })}
            invalid={errors.cnic && true}
            placeholder='12343-955445-5'
          />
        </FormGroup>
        <FormGroup>
          <Label for='image'>CNIC Front Picture</Label>
          <Input
            id='cnic_front_pictrue'
            name='cnic_front_pictrue'
            type="file"
            className="form-control"
            onChange={(e) => {
              uploadImageFunction(e.target.files[0], 1)
            }}
            innerRef={register({ required: true })}
            invalid={errors.cnic_front_pictrue && true}
          />
        </FormGroup>
        <FormGroup>
          <Label for='image'>CNIC Back Picture</Label>
          <Input
            id='cnic_back_pictrue'
            name='cnic_back_pictrue'
            type="file"
            className="form-control"
            onChange={(e) => {
              uploadImageFunction(e.target.files[0], 2)
            }}
            innerRef={register({ required: true })}
            invalid={errors.cnic_back_pictrue && true}
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
