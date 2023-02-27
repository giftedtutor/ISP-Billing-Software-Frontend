// ** React Import
import { useEffect, useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

import axios from 'axios'
// ** Third Party Components
import Select from 'react-select'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, Row, Col, CustomInput } from 'reactstrap'

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
    // if (!data.device_id) {
    //   errors = {
    //     ...errors,
    //     [`products[${index}]device_id`]: 'This field is required!'
    //   }
    // }
    // if (!data.package_id) {
    //   errors = {
    //     ...errors,
    //     [`products[${index}]package_id`]: 'This field is required!'
    //   }
    // }
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

const SidebarEdit = ({ open, toggleSidebarEdit, editID, setEditID }) => {
  const [deviceSelectedValue, setDeviceSelectedValue] = useState([])
  const [packageSelectedValue, setPackageSelectedValue] = useState([])
  const [packageOptions, setPackageOptions] = useState([])
  const [deviceOptions, setDeviceOptions] = useState([])
  const [isDevice, setIsdevice] = useState(true)
  const [editData, setEditData] = useState({})

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
    axios.post(`${baseURL}/stocks/updateStock`, data.values)
      .then(res => {
        if (res.data.status === "ok") {
          toggleSidebarEdit()
          setEditID(0)
          setEditData({})

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
      total: 0,
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
  console.log('E::::::FORMIk:::', formik.values)
  
  useEffect(() => {
    axios.get(`${baseURL}/stocks/editStock?stock_id=${editID}`)
    .then((response) => {
    
      setEditData(response.data)
      formik.setFieldValue('serial_no', response.data.serial_no)
      formik.setFieldValue('name', response.data.name)
      formik.setFieldValue('remarks', response.data.remarks)
      formik.setFieldValue('user_id', response.data.user_id)
    
      formik.setFieldValue('discount', response.data.discount)
      formik.setFieldValue('total', response.data.total)
      formik.setFieldValue('status', response.data.status)
      formik.setFieldValue('serial_no', response.data.serial_no)
      formik.setFieldValue('products', response.data.products)

      response.data.products.forEach((data, index) => {
        deviceSelectedValue[index] = data.device_id
        packageSelectedValue[index] =  data.package_id 
      })
      setDeviceSelectedValue(deviceSelectedValue)
      setPackageSelectedValue(packageSelectedValue)
    }).catch((err) => console.log(err))
  }, [editID])

  useEffect(() => {
    let grandTotal = 0
    formik.values.products.forEach((data, index) => {
      grandTotal += data.total
    })
    formik.setFieldValue('total', grandTotal)
    formik.setFieldValue('total_after_discount', grandTotal - formik.values.discount)
  }, [formik.values.products, formik.values.discount])

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Edit Purchase Order'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebarEdit}
      onClosed={() => console.log('Closed')}
      style={{ width: "80%" }}
    >

<Form>
        <Row>
          <Col sm={12} md={3}>
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
          <Col sm={12} md={3}>
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
          <Col sm={12} md={3}>
            <FormGroup>
              <Label for='remarks'>Remarks</Label>
              <Input
                id='remarks'
                name='remarks'
                placeholder='Remarks'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.remarks}
                isValid={formik.isValid}
                isTouched={formik.touched.remarks}
                invalidFeedback={formik.errors.remarks}
                validFeedback="Looks good!"
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={2}>
             <FormGroup className='mt-2'>
            <div className='d-flex'>
            <p className='font-weight-bold mr-auto mb-0'>{isDevice ? "Purchase For Devices" : "Purchase For Packages"}</p>
              <CustomInput type='switch' id='chnage' checked={isDevice} onChange={() => setIsdevice(!isDevice)} />
            </div>
          </FormGroup>
          </Col>
          <FormGroup className='mb-2'>

          </FormGroup>

        </Row>
        <hr />
        {formik.errors.products && (
          <p
            style={{
              color: "red"
            }}
          >
            {formik.errors.products}
          </p>
        )}
        {formik.values.products &&
          formik.values.products.map((data, index) => (
            <Row>

              {isDevice ? (<Col sm={12} md={3}>
                <FormGroup>
                  <Label for='device_id'>Device</Label>

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
              </Col>) : ''}
              {isDevice ? '' : (
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
              )}
              <Col sm={12} md={2}>
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
              <Col sm={12} md={2}>
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

          <Col sm={12} md={3}>
            <FormGroup>
              <Label for='total'>Grand Total</Label>
              <Input
                disabled
                id='total'
                name='total'
                placeholder='Grand Total'
                value={formik.values.total}
              />
            </FormGroup>
          </Col>
          <Col sm={12} md={3}>
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
          <Col sm={12} md={3}>
            <FormGroup>
              <Label for='total_after_discount'>Total after Discount</Label>
              <Input
                disabled
                id='total_after_discount'
                name='total_after_discount'
                placeholder='Grand Total'
                value={formik.values.total_after_discount}
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
            formik.setFieldValue('total', 0)
            formik.setFieldValue('total_after_discount', 0)
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

export default SidebarEdit
