/* eslint-disable no-unused-vars */

import React, { Fragment, useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import baseURL from "../../../../baseURL/baseURL.js"
import Cookies from "js-cookie"
import { DotLoader } from "react-spinners"
import Pagination from "react-js-pagination"
import { toast } from "react-toastify"
import SidebarAdd from './AddPurchaseModal'
import SidebarEdit from './EditPurchaseModal'
import Select from 'react-select'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Slack, User, Settings, Database, Edit2, MoreVertical, Trash2, Archive } from 'react-feather'
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  Modal, ModalHeader, ModalBody, ModalFooter, Alert,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  CardImg,
  CardText
} from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import axios from "axios"
import generatePDF from "./TablePDF.js"
import moment from "moment"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  marginTop: 20
}

const UsersList = () => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [centeredModal, setCenteredModal] = useState(false)
  const [centeredModal2, setCenteredModal2] = useState(false)
  const [SidebarAddOpen, setSidebarAddOpen] = useState(false)
  const [SidebarEditOpen, setSidebarEditOpen] = useState(false)


  // ** Function to toggle SidebarAdd
  const toggleSidebarAdd = () => setSidebarAddOpen(!SidebarAddOpen)
  const toggleSidebarEdit = () => setSidebarEditOpen(!SidebarEditOpen)

  const history = useHistory()
  const [search, setSearch] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [getData, setGetData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [total, setTotal] = useState(10)
  const [record, setRecord] = useState(10)
  const [cnicFrontPic, setCnicFrontPic] = useState('')
  const [cnicBackPic, setCnicBackPic] = useState('')
  const [productsDetail, setProductsDetail] = useState([])
  const [purchaseName, setPurchaseName] = useState('')
  const [refresh, setRefresh] = useState(false)
  const [deleteID, setDeleteID] = useState()
  const [grade, setGrade] = useState('')
  const [editID, setEditID] = useState(0)
  const handlePageChange = (pageNumber) => {
    setLoading(true)
    setPageNo(pageNumber)
  }

  const deletePurchase = () => {
    axios.delete(`${baseURL}/stocks/deleteStock?stock_id=${deleteID}`)
      .then(response => {
        toast(response.data.message)
        setRefresh(true)
        console.log("Delete", response)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`${baseURL}/stocks/getPurchases?user_id=${Cookies.get("id")}&&pageNo=${pageNo}&&records=${record}&&status=PURCHASE`)
      .then(response => {
        console.log("Get Purchases Data", response)
        setGetData(response.data.data)
        if (response.data.data.length === 0) {
          toast('No Data in this Table!')
        }
        setTotal(response.data.totalPages)
        setLoading(false) //stop loading when data is fetched
      }).catch(err => console.log(err))
  }, [pageNo, record, refresh, grade, SidebarAddOpen, SidebarEditOpen])

  const filterDataOfEachColumn = getData.filter(item => {
    return search !== "" ? item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.serial_no.toLowerCase().includes(search.toLowerCase()) ||
      item.remarks.toLowerCase().includes(search.toLowerCase()) ||
      item.discount.toString().includes(search.toString()) ||
      item.total.toString().includes(search.toString()) ||
      item.total_after_discount.toString().includes(search.toString()) ||
      item.date.toLowerCase().includes(search.toLowerCase()) : item
  })
  const TableData = filterDataOfEachColumn.map((data, index) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <th scope="row">{data.serial_no}</th>
        <td>{data.name}</td>
        <td>{data.remarks}</td>
        <td>{data.total}</td>
        <td>{data.discount}</td>
        <td>{data.total_after_discount}</td>
        <td>{moment(data.date).format('DD/MM/YYYY')}</td>

        <td>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >

            <div className='column-action'>
              <UncontrolledDropdown>
                <DropdownToggle tag='div' className='btn btn-sm'>
                  <MoreVertical size={14} className='cursor-pointer' />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    className='w-100'
                    onClick={() => {
                      setCenteredModal2(!centeredModal2)
                      setProductsDetail(data.products)
                    }}
                  >
                    <FileText size={14} className='me-50' /> &nbsp;
                    <span className='align-middle'>View</span>
                  </DropdownItem>
                  <DropdownItem
                    // tag={Link}
                    // to={`/apps/user/view/`}
                    className='w-100'
                    onClick={() => {

                      setDeleteModal(!deleteModal)
                      setDeleteID(data._id)
                    }}
                  >
                    <Trash2 size={14} className='me-50' /> &nbsp;
                    <span className='align-middle'>Delete</span>
                  </DropdownItem>
                  <DropdownItem
                    className='w-100'
                    onClick={() => {
                      toggleSidebarEdit()
                      setEditID(data._id)
                    }}
                  >
                    <Edit2 size={14} className='me-50' /> &nbsp;
                    <span className='align-middle'>Edit</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </td>
      </tr>
    )
  })

  // const gradeOptions = [
  //   { value: '', label: 'All Purchases' },
  //   { value: '1st', label: '1st' },
  //   { value: '2nd', label: '2nd' },
  //   { value: '3rd', label: '3rd' },
  //   { value: '4th', label: '4th' },
  //   { value: '5th', label: '5th' },
  //   { value: '6th', label: '6th' },
  //   { value: '7th', label: '7th' },
  //   { value: '8th', label: '8th' },
  //   { value: '9th', label: '9th' },
  //   { value: '10th', label: '10th' },
  //   { value: '11th', label: '11th' },
  //   { value: '12th', label: '12th' }

  // ]

  return (
    <Fragment>
      <Card className='overflow-hidden'>
        <CardBody>
          <div>
            <div>
              {/* Delete Model */}
              <div className='vertically-centered-modal'>

                <Modal isOpen={deleteModal} toggle={() => setDeleteModal(!deleteModal)} className='modal-dialog-centered'>
                  <ModalHeader toggle={() => setDeleteModal(!deleteModal)}>Deletion Confirmation!</ModalHeader>
                  <ModalBody>
                    Are you sure, you want to delete the selected Purchase?
                    <br />
                    This cannot be undone!
                  </ModalBody>
                  <ModalFooter>
                    <Button.Ripple color='danger' outline autoFocus onClick={() => {
                      setDeleteModal(!deleteModal)
                    }}>
                      No
                    </Button.Ripple>
                    <Button.Ripple color='success' outline onClick={() => {

                      deletePurchase()
                      setDeleteModal(!deleteModal)
                    }}>
                      Yes
                    </Button.Ripple>{' '}
                  </ModalFooter>
                </Modal>
              </div>
              {/* View Image MOdal */}
              <div className='vertically-centered-modal'>

                <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
                  <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>{`CNIC`}</ModalHeader>
                  <ModalBody>
                    <Card>
                      <CardImg top src={cnicFrontPic} alt={`${purchaseName} CNIC Front Side Pic`} />

                      <CardBody>
                        <CardText>
                          CNIC Front Side
                        </CardText>
                      </CardBody>
                    </Card>
                    <CardImg top src={cnicBackPic} alt={`${purchaseName} CNIC Back Side Pic`} />
                    <CardBody>
                      <CardText>
                        CNIC Back Side
                      </CardText>
                    </CardBody>
                  </ModalBody>
                </Modal>
              </div>

              {/* View Package MOdal */}
              <div className='vertically-centered-modal'>

                <Modal isOpen={centeredModal2} toggle={() => setCenteredModal2(!centeredModal2)} className='modal-dialog-centered'>
                  <ModalHeader toggle={() => setCenteredModal2(!centeredModal2)}>{`Purchase Detail`}</ModalHeader>
                  <ModalBody>
                    <Card>
                      <CardBody>

                        <div className="table-responsive">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Sr. No</th>
                                <th scope="col">Device</th>
                                <th scope="col">Package</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Qunatity</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              {productsDetail?.map((data, index) => {
                                return (
                                  <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data?.device_id?.name}</td>
                                    <td>{data?.package_id?.name}</td>

                                    <td className="text-right">{data.unit_price}</td>
                                    <td className="text-right">{data.quantity}</td>
                                    <td className="text-right">{data.total}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </CardBody>
                    </Card>
                  </ModalBody>
                </Modal>
              </div>
            </div>
            <div className="container">

              <Row>
                <Col md='3'>
                  {/* <Label for='role-select'>Class</Label> */}
                  {/* <Select
                    isClearable={true}
                    value={grade}
                    options={gradeOptions}
                    className='react-select'
                    classNamePrefix='Class Selection'
                    theme={selectThemeColors}
                    onChange={data => {
                      setGrade(data)
                    }}
                  /> */}
                  <div className='d-flex align-items-center mb-sm-0 mb-1 me-1'>
                    <Input
                      id='search-invoice'
                      className='ms-50 w-100'
                      placeholder='Search here'
                      type='text'
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                </Col>
                <Col className='my-md-0 my-1' md='3' ></Col>
                <Col className='my-md-0 my-1' md='3' >

                </Col>
                <Col className='my-md-0 my-1' md='3' >
                  <div className='d-flex align-items-center table-header-actions'>
                    <UncontrolledDropdown className='me-1'>
                      <DropdownToggle color='secondary' caret outline>
                        <Share className='font-small-4 me-50' />  &nbsp;
                        <span className='align-middle'>Export</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        {/* <DropdownItem className='w-100'>
                          <Grid className='font-small-4 me-50' />  &nbsp;
                          <span className='align-middle'>Excel</span>
                        </DropdownItem> */}
                        <DropdownItem className='w-100' onClick={() => {
                          generatePDF(filterDataOfEachColumn)
                        }}>
                          <File className='font-small-4 me-50' />  &nbsp;
                          <span className='align-middle'>PDF</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown> &nbsp; &nbsp;
                    <Button className='add-new-user mr-1' color='primary'
                      onClick={() => {
                        toggleSidebarAdd()
                      }}
                    >
                      Add New Purchase
                    </Button>
                  </div>
                </Col>
              </Row>

              <hr />

              <div
                className="row"
                style={{
                  marginBottom: 20
                }}
              >


              </div>
              {/* Loader */}
              {isLoading ? (
                <DotLoader
                  color="blue"
                  loading={isLoading}
                  cssOverride={override}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Purchase No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Remarks</th>
                      
                        <th scope="col">Total</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total After Discount</th>
                        <th scope="col">Purchase Date</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>{TableData}</tbody>
                  </table>
                </div>
              )}
              <div
                style={{
                  marginBottom: 20
                }}
              >
                <hr />
                <Row>
                  <Col xl='8' className='d-flex align-items-center p-2'>
                    <div className='d-flex align-items-center w-100'>
                      <label htmlFor='rows-per-page'>Show</label>
                      <Input
                        className='mx-50'
                        type='select'
                        id='rows-per-page'
                        value={record}
                        onChange={(e) => setRecord(e.target.value)}

                        style={{ width: '5rem' }}
                      >
                        <option value='10'>10</option>
                        <option value='25'>25</option>
                        <option value='50'>50</option>
                      </Input>
                      <label htmlFor='rows-per-page'>Entries</label>
                    </div>
                  </Col>
                  <Col xl='4' className='d-flex align-items-center p-2'>
                    <Pagination
                      activePage={pageNo}
                      itemsCountPerPage={record}
                      totalItemsCount={total}
                      onChange={(e) => handlePageChange(e)}
                      itemClass="page-item"
                      linkClass="page-link"
                      firstPageText="First"
                      lastPageText="Last"
                      nextPageText="Next"
                      prevPageText="Prev"

                    />
                  </Col>
                </Row>

              </div>

            </div>
          </div>
        </CardBody>
      </Card>

      <SidebarAdd open={SidebarAddOpen} toggleSidebarAdd={toggleSidebarAdd} />
      <SidebarEdit open={SidebarEditOpen} toggleSidebarEdit={toggleSidebarEdit} editID={editID} setEditID={setEditID} />
    </Fragment >
  )
}

export default UsersList
