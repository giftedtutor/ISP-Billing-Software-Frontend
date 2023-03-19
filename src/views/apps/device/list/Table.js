/* eslint-disable no-unused-vars */

import React, { Fragment, useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import baseURL from "../../../../baseURL/baseURL.js"
import Cookies from "js-cookie"
import { DotLoader } from "react-spinners"
import Pagination from "react-js-pagination"
import { toast } from "react-toastify"
import SidebarAdd from './AddDeviceModal'
import SidebarEdit from './EditDeviceModal'
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Slack, User, Settings, Database, Edit2, MoreVertical, Trash2, Archive } from 'react-feather'

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
  const [refresh, setRefresh] = useState(false)
  const [deleteID, setDeleteID] = useState()
  const [grade, setGrade] = useState('')
  const [editID, setEditID] = useState()
  const handlePageChange = (pageNumber) => {
    setLoading(true)
    setPageNo(pageNumber)
  }

  const deleteDevice = () => {
    axios.delete(`${baseURL}/devices/deleteDevice?device_id=${deleteID}`)
      .then(response => {
        toast(response.data.message)
        setRefresh(true)
        console.log("Delete", response)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`${baseURL}/devices/getDevices?user_id=${Cookies.get("id")}&&pageNo=${pageNo}&&records=${record}`)
      .then(response => {
        console.log("Get Devices Data", response)
        setGetData(response.data.data)
        if (response.data.data.length === 0) {
          toast('No Data in this Table!')
        }
        setTotal(response.data.totalPages)
        setLoading(false) //stop loading when data is fetched
      }).catch(err => console.log(err))
  }, [pageNo, record, refresh, grade, SidebarAddOpen, SidebarEditOpen])

  const filterDataOfEachColumn = getData.filter(item => {
    if (item.device_id === undefined) {
      item.device_id = ''
    }
    return search !== "" ? item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.mac_address.toLowerCase().includes(search.toLowerCase()) ||
      item.device_id.toLowerCase().includes(search.toLowerCase()) ||
      item.date.toLowerCase().includes(search.toLowerCase()) ||
      item.price.toString().includes(search.toString()) : item
  })
  const TableData = filterDataOfEachColumn.map((data, index) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <th scope="row">{data.device_id}</th>
        <th scope="row">{data.name}</th>
        <td>{data.mac_address}</td>
        <td>{data.price}</td>
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
                    Are you sure, you want to delete the selected Device?
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

                      deleteDevice()
                      setDeleteModal(!deleteModal)
                    }}>
                      Yes
                    </Button.Ripple>{' '}
                  </ModalFooter>
                </Modal>
              </div>

            </div>
            <div className="container">

              <Row>
                <Col md='3'>
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
                      Add New Device
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
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">MAC Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
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
