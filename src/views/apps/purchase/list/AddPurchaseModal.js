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
  const [deviceSelectedValue, setDeviceSelectedValue] = useState([])
  const [packageSelectedValue, setPackageSelectedValue] = useState([])
  const [data, setData] = useState(null)
  const [packageOptions, setPackageOptions] = useState([])
  const [deviceOptions, setDeviceOptions] = useState([])

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


    axios.get(`${baseURL}/devices/getDevicesDropdown`)
      .then((response) => {
        const rec = response.data.map(({ _id, name }) => ({
          id: _id,
          value: _id,
          label: name
        }))
        setDeviceOptions(rec)
      }).catch((err) => console.log(err))

  }, [])
  const submitForm = (data) => {
    console.log('I m IN', data.values)
    axios.post(`${baseURL}/stocks/addStock`, data.values)
      .then(res => {
        if (res.data.status === "ok") {
          toggleSidebarAdd()
          // setFieldValue('name', '')
          // setFieldValue('remarks', '')
          // setFieldValue('serial_no', '')
          // setFieldValue('discount', '')
          // setFieldValue('grand_total', '')
          // setFieldValue('products', [])
          
          toast(res.data.message)
        } else {
          toast("Somthing went Wrong - Error")
        }
      })
      .catch(err => {
        toast(err.message)
      })
  }
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
        submitForm(formik)
    }
  })

 
  const removeRow = (i) => {
    deviceSelectedValue.splice(i, 1)
    setDeviceSelectedValue(deviceSelectedValue)
    packageSelectedValue.splice(i, 1)
    setPackageSelectedValue(packageSelectedValue)
    formik.setFieldValue('products', [
      ...formik.values.products.slice(0, i),
      ...formik.values.products.slice(i + 1)
    ])
  }

  useEffect(() => {
    let grandTotal = 0
    formik.values.products.forEach((data, index) => {
      grandTotal += data.total
    })
    formik.setFieldValue('grand_total', grandTotal)
  }, [formik.values.products])
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
              <Col sm={12} md={3}>
                <FormGroup>
                  <Label for='device_id'>Package</Label>

                  <Select
                    isClearable={false}
                    classNamePrefix='select'
                    options={deviceOptions}
                    type="text"
                    name='device_id'
                    id='device_id'
                    placeholder='Select Device'

                    onChange={(e) => {
                      formik.setFieldValue(
                        `products[${index}].device_id`,
                        e.value
                      )
                      deviceSelectedValue[index] = e
                    }}
                    onBlur={formik.handleBlur}
                    value={deviceSelectedValue[index]}
                    isValid={formik.isValid}
                    isTouched={formik.touched.device_id}
                    validFeedback="Looks good!"

                  />
                  {formik.errors[
                    `products[${index}]device_id`
                  ] && (
                      <p
                        style={{
                          color: 'red'
                        }}>
                        {
                          formik.errors[
                          `products[${index}]device_id`
                          ]
                        }
                      </p>
                    )}
                </FormGroup>
              </Col>
              <Col sm={12} md={3}>
                <FormGroup>
                  <Label for='package_id'>Package</Label>

                  <Select
                    isClearable={false}
                    classNamePrefix='select'
                    options={packageOptions}
                    type="text"
                    name='package_id'
                    id='package_id'
                    placeholder='Select Package'
                    onFocus={e => e.target.select()}

                    onChange={(e) => {
                      formik.setFieldValue(
                        `products[${index}].package_id`,
                        e.value
                      )
                      packageSelectedValue[index] = e
                    }}
                    onBlur={formik.handleBlur}
                    value={packageSelectedValue[index]}
                    isValid={formik.isValid}
                    isTouched={formik.touched.package_id}
                    validFeedback="Looks good!"

                  />
                  {formik.errors[
                    `products[${index}]package_id`
                  ] && (
                      <p
                        style={{
                          color: 'red'
                        }}>
                        {
                          formik.errors[
                          `products[${index}]package_id`
                          ]
                        }
                      </p>
                    )}
                </FormGroup>
              </Col>
              <Col sm={12} md={1}>
                <FormGroup>
                  <Label for='unit_price'>Unit Price</Label>
                  <Input
                    id={`products[${index}].unit_price`}
                    name='unit_price'
                    type="Number"
                    placeholder='Enter Unit Price'
                    onFocus={e => e.target.select()}

                    onChange={(val) => {
                      formik.setFieldValue(
                        `products[${index}].unit_price`,
                        val.target.value
                      )
                      formik.setFieldValue(`products[${index}].total`, (formik.values.products[index].quantity * val.target.value))
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
              <Col sm={12} md={1}>
                <FormGroup>
                  <Label for='quantity'>Quantity</Label>
                  <Input
                    id={`products[${index}].quantity`}
                    name='quantity'
                    type="Number"
                    placeholder='Enter QUantity'
                    onFocus={e => e.target.select()}

                    onChange={(val) => {
                      formik.setFieldValue(
                        `products[${index}].quantity`,
                        val.target.value
                      )
                      formik.setFieldValue(`products[${index}].total`, (val.target.value * formik.values.products[index].unit_price))
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
              <Col sm={12} md={2}>
                <FormGroup>
                  <Label for='total'>Quantity</Label>
                  <Input
                    id={`products[${index}].total`}
                    name='total'
                    disabled
                    type="Number"
                    value={formik.values.products[index].quantity * formik.values.products[index].unit_price}

                  />

                </FormGroup>
              </Col>
              <Col sm={12} md={1}>
                <Button className="mt-2" color="danger" onClick={() => {
                  removeRow(index)
                }}>
                  Remove
                </Button>
              </Col>
            </Row>
          ))}

        <hr />
        <Row>
          <Col sm={12} md={2}>
            <FormGroup>
              <Button.Ripple className='mr-1 mt-2' color='warning'
                onClick={() => {
                  formik.setFieldValue('products', [
                    ...formik.values.products,
                    {
                      device_id: '',
                      package_id: '',
                      unit_price: 0,
                      quantity: 0,
                      total: 0
                    }
                  ])
                }}>
                Add New Product
              </Button.Ripple>
            </FormGroup>
          </Col>
          <Col sm={12} md={4}>
            <FormGroup>
              <Label for='discount'>Discount</Label>
              <Input
                id='discount'
                name='discount'
                placeholder='Discount'
                value={formik.values.discount}
                onChange={(e) => {
                  formik.setFieldValue('discount', e.target.value)
                }}
                
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={4}>
            <FormGroup>
              <Label for='grand_total'>Grand Total</Label>
              <Input
                disabled
                id='grand_total'
                name='grand_total'
                placeholder='Grand Total'
                value={formik.values.grand_total - formik.values.discount}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup className='d-flex mb-0'>

          <Button.Ripple className='mr-1 mt-2' color='primary' onClick={formik.handleSubmit}>
            Submit
          </Button.Ripple>
          <Button.Ripple className='mr-1 mt-2' outline color='secondary' onClick={() => {
            formik.setFieldValue('name', '')
            formik.setFieldValue('remarks', '')
            formik.setFieldValue('serial_no', '')
            formik.setFieldValue('discount', 0)
            formik.setFieldValue('grand_total', 0)
            formik.setFieldValue('products', [
              {
                device_id: '',
                package_id: '',
                unit_price: 0,
                quantity: 0,
                total: 0
              }
            ])
          }}>
            Reset
          </Button.Ripple>
        </FormGroup>
      </Form>
    </Sidebar>
  )
}

export default SidebarAdd
