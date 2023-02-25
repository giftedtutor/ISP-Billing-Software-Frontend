// ** React Import
import { useEffect, useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

import axios from 'axios'
// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'

import Cookies from 'js-cookie'
import baseURL from "../../../../baseURL/baseURL.js"
import { toast } from 'react-toastify'
import { useFormik } from 'formik'

const validate = values => {
  let errors = {}
  if (!values.name) {
    errors.name = "This field is required!"
  }
  if (!values.remarks) {
    errors.remarks = "This field is required!"
  }
  if (!values.serial_no) {
    errors.serial_no = "This field is required!"
  }
  if (values.products.length === 0) {
    errors.products = "Please Add atleast One Product!"
  }
  values.products.forEach((data, index) => {
    if (!data.device_id) {
      errors = {
        ...errors,
        [`products[${index}]device_id`]: 'This field is required!'
      }
    }
    if (!data.package_id) {
      errors = {
        ...errors,
        [`products[${index}]package_id`]: 'This field is required!'
      }
    }
    if (!data.unit_price) {
      errors = {
        ...errors,
        [`products[${index}]unit_price`]: 'This field is required!'
      }
    }
    if (!data.quantity) {
      errors = {
        ...errors,
        [`products[${index}]quantity`]: 'This field is required!'
      }
    }

  })
  return errors
}

const SidebarAdd = ({ open, toggleSidebarAdd }) => {
  const { register, errors, handleSubmit } = useForm()
  const [packageID, setpackageID] = useState('')
  const [data, setData] = useState(null)
  const [packageOptions, setPackageOptions] = useState([])
  const [cnicFrontPic, setCnicFrontPic] = useState('')
  const [cnicBackPic, setCnicBackPic] = useState('')

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

  const submitForm = (data) => {
    axios.post(`${baseURL}/stocks/addStock`, data)
      .then(res => {
        if (res.data.status === "ok") {
          toggleSidebarAdd()
          setpackageID('')
          toast(res.data.messsage)
        } else {
          toast("Somthing went Wrong - Error")
        }
      })
      .catch(err => {
        toast(err)
      })
  }
  // const onSubmit = data => {
  //   submitForm(data, packageID)
  // }
  const formik = useFormik({
    initialValues: {
      user_id: Cookies.get("id"),
      name: '',
      remarks: '',
      serial_no: '',
      discount: 0,
      grand_total: 0,
      status: "PURCHASE",
      products: [
        {
          device_id: '',
          package_id: '',
          unit_price: 0,
          quantity: 0,
          total: 0
        }
      ]
    },
    validate,
    onSubmit: () => {
      // setTimeout(handleSave, 2000)
      submitForm(formik.values)
    }
  })
  // const handleSave = () => {
  //   submitForm(formik.values)
  // }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Purchase Order'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebarAdd}
      onClosed={() => console.log('Closed')}
      style={{ width: "80%" }}
    >

      <Form>
        <Row>
          <Col sm={12} md={4}>
            <FormGroup >
              <Label for='name'>Name</Label>
              <Input
                id='name'
                name='name'
                placeholder='Give a Name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                isValid={formik.isValid}
                isTouched={formik.touched.name}
                invalidFeedback={formik.errors.name}
                validFeedback="Looks good!"
              />
              {formik.errors.name && (
                <p
                  style={{
                    color: "red"
                  }}
                >
                  {formik.errors.name}
                </p>
              )}
            </FormGroup>

          </Col>
          <Col sm={12} md={4}>
            <FormGroup>
              <Label for='remarks'>Remarks</Label>
              <Input
                id='remarks'
                name='remarks'
                placeholder='Remarks'
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={4}>
            <FormGroup>
              <Label for='serial_no'>Serial No</Label>
              <Input
                id='serial_no'
                name='serial_no'
                type="text"
                placeholder='PURCHASE-005'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.serial_no}
                isValid={formik.isValid}
                isTouched={formik.touched.serial_no}
                invalidFeedback={formik.errors.serial_no}
                validFeedback="Looks good!"
              />
              {formik.errors.serial_no && (
                <p
                  style={{
                    color: "red"
                  }}
                >
                  {formik.errors.serial_no}
                </p>
              )}
            </FormGroup>
          </Col>
        </Row>
        <hr />
        {formik.values.products &&
          formik.values.products.map((data, index) => (
            <Row>
            <Col sm={12} md={4}>
            <FormGroup>
              <Label for='unit_price'>Unit Price</Label>
              <Input
                id={`products[${index}].unit_price`}
                name='unit_price'
                type="text"
                placeholder='Enter QUantity'
                onFocus={e => e.target.select()}

                onChange={(val) => {
                  formik.setFieldValue(
                    `products[${index}].unit_price`,
                    val.target.value
                  )
                }}
                onBlur={formik.handleBlur}
                value={formik.values.products[index].unit_price}
                isValid={formik.isValid}
                isTouched={formik.touched.unit_price}
                validFeedback="Looks good!"

              />
              {formik.errors[
                `products[${index}]unit_price`
              ] && (
                  <p
                    style={{
                      color: 'red'
                    }}>
                    {
                      formik.errors[
                      `products[${index}]unit_price`
                      ]
                    }
                  </p>
                )}
            </FormGroup>
            </Col>
            <Col sm={12} md={4}>
            <FormGroup>
              <Label for='quantity'>Quantity</Label>
              <Input
                id={`products[${index}].quantity`}
                name='quantity'
                type="text"
                placeholder='Enter QUantity'
                onFocus={e => e.target.select()}

                onChange={(val) => {
                  formik.setFieldValue(
                    `products[${index}].quantity`,
                    val.target.value
                  )
                }}
                onBlur={formik.handleBlur}
                value={formik.values.products[index].quantity}
                isValid={formik.isValid}
                isTouched={formik.touched.quantity}
                validFeedback="Looks good!"

              />
              {formik.errors[
                `products[${index}]quantity`
              ] && (
                  <p
                    style={{
                      color: 'red'
                    }}>
                    {
                      formik.errors[
                      `products[${index}]quantity`
                      ]
                    }
                  </p>
                )}
            </FormGroup>
            </Col>
            </Row>
          ))}

        <hr />
        <Row>
          <Col sm={12} md={4}>
            <FormGroup>
              <Label for='discount'>Discount</Label>
              <Input
                id='discount'
                name='discount'
                placeholder='Discount'
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={4}>
            <FormGroup>
              <Label for='grand_total'>Grand Total</Label>
              <Input
                id='grand_total'
                name='grand_total'
                placeholder='Grand Total'
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className='d-flex mb-0'>
          <Button.Ripple className='mr-1' color='primary' type='submit' onClick={formik.handleSubmit}>
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
