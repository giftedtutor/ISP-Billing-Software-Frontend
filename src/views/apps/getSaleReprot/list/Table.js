/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from "react"
import baseURL from "../../../../baseURL/baseURL.js"
import Cookies from "js-cookie"
import { DotLoader } from "react-spinners"
import Pagination from "react-js-pagination"
import { toast } from "react-toastify"
import { ChevronDown, Share, Printer, FileText, File, Grid, Copy, Slack, User, Settings, Database, Edit2, MoreVertical, Trash2, Archive } from 'react-feather'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Input,
  Label,
  CardBody,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,

  FormGroup
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
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const [search, setSearch] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [getData, setGetData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [total, setTotal] = useState(10)
  const [record, setRecord] = useState(10)
  const handlePageChange = (pageNumber) => {
    setLoading(true)
    setPageNo(pageNumber)
  }

  useEffect(() => {
    setLoading(true)
    axios.get(`${baseURL}/stocks/getSaleReport?user_id=${Cookies.get("id")}&&pageNo=${pageNo}&&records=${record}&&fromDate=${fromDate && moment(fromDate).format('DD/MM/YYYY')}&&toDate=${toDate && moment(toDate).format('DD/MM/YYYY')}`)
      .then(response => {
        console.log("Get stocks Data", response)
        setGetData(response.data.data)
        if (response.data.data.length === 0) {
          toast('No Data against provided Input!')
          setGetData([])
        }
        setTotal(response.data.totalPages)
        setLoading(false) //stop loading when data is fetched
      }).catch(err => console.log(err))
  }, [pageNo, record, fromDate, toDate])

  const filterDataOfEachColumn = getData.filter(item => {
    return search !== "" ? item.serial_no.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.date.toLowerCase().includes(search.toLowerCase()) ||
      item.discount.toLowerCase().includes(search.toLowerCase()) ||
      item.total_after_discount.toLowerCase().includes(search.toLowerCase()) ||
      item.total.toString().includes(search.toString()) : item
  })
  const TableData = filterDataOfEachColumn.map((data, index) => {
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <th scope="row">{data.serial_no}</th>
        <td>{data.name}</td>
        <td>{data.total}</td>
        <td>{data.discount}</td>
        <td>{data.total_after_discount}</td>
        <td>{data.date}</td>

      </tr>
    )
  })

  return (
    <Fragment>
      <Card className='overflow-hidden'>
        <CardBody>
          <div>
            <div>
            </div>
            <div className="container">

              <Row>
                <Col className='my-md-0 my-1' md='3' >
                  <FormGroup>
                    <Label for='name'>From Date</Label>
                    <Input
                      type="date"
                      id='name'
                      name='name'
                      value={fromDate}
                      onChange={e => setFromDate(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col className='my-md-0 my-1' md='3' >
                  <FormGroup>
                    <Label for='name'>To Date</Label>
                    <Input
                      type="date"
                      id='name'
                      name='name'
                      value={toDate}
                      onChange={e => setToDate(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md='4'>
                  <div className='d-flex align-items-center mb-sm-0 mb-1 me-1 mt-2'>
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

                <Col className='my-md-0 my-1 mt-2' md='2' >
                  <div className='d-flex align-items-center table-header-actions mt-2'>
                    <UncontrolledDropdown className='me-1'>
                      <DropdownToggle color='secondary' caret outline>
                        <Share className='font-small-4 me-50' />  &nbsp;
                        <span className='align-middle'>Export</span>
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem className='w-100' onClick={() => {
                          generatePDF(filterDataOfEachColumn)
                        }}>
                          <File className='font-small-4 me-50' />  &nbsp;
                          <span className='align-middle'>PDF</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown> &nbsp; &nbsp;

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
                        <th scope="col">PO No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Total</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Total After Discount</th>
                        <th scope="col">Date</th>
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
    </Fragment >
  )
}

export default UsersList
