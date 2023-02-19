// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import jsPDF from 'jspdf'
import ReactDOMServer from "react-dom/server"
import generatePDF from './tablePDF'
import Pagination from "react-js-pagination"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFilePdf } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/scss/functions'
// require("bootstrap/less/bootstrap.less")

// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getAllData, getData } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Axios from 'axios'
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { AlignRight, ChevronDown, Filter } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, Form, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'
import { useHistory } from "react-router"

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import baseURL from '../../../../baseURL/baseURL'


// fitlter search
const FilterName = () => {
  const [suppliersF, setSuppliersF] = useState([])
  const [filter, setFilter] = useState('')
  const [sortType, setSortType] = useState('desc')
  const [pageNo, setPageNo] = useState(1)
  const [total, setTotal] = useState()
  const [record, setRecord] = useState(10)
  const [isLoading, setLoading] = useState(true)
  const [column, setColumn] = useState('id')

  const history = useHistory()
  const location = useLocation()
  const id = location.state.params

  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`)
    setPageNo(pageNumber)
  }

  useEffect(() => {
    console.log('pageNo', pageNo)
    Axios.get(`${baseURL}/getSupplier?supplierID=${id}`)
      .then(response => {
        console.log('Edit API::::::', response.data)
        setSuppliersF(response.data.ConcernedPersons)
        setLoading(false) //stop loading when data is fetched
      })
      .catch(err => console.log(err))
  }, [pageNo, record])
  const sorted = suppliersF
  const filterName = sorted.filter(item => {
    return filter !== "" ? item.id.toString().includes(filter.toString()) || item.contact_no.toString().includes(filter.toString()) || item.designation.toLowerCase().includes(filter.toLowerCase()) || item.name.toLowerCase().includes(filter.toLowerCase()) : item

  })

  const mappSuppliers = filterName.map((data, index) => {
    return (
      <tr key={data.index}>

        <td>{index + 1}</td>

        <td>{data.name}</td>
        <td>{data.designation}</td>
        <td>{data.contact_no}</td>

      </tr>
    )

  })

  return (
    <div>
      <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
        <Row>
          <Col
            xl='2'
            className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
          >
            &nbsp;  &nbsp; &nbsp;   <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
              <Label className='mb-0' for='search-invoice'>
                Search:
              </Label>
              <Input
                id='search-invoice'
                className='ml-50 w-100'
                type='text'
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
            </div>
          </Col>
          <Col
            xl='10'
            className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
          >
            <Button.Ripple
              className="btn btn-primary"
              color="danger"
              onClick={() => generatePDF(filterName)}
            >
              <FontAwesomeIcon icon={faFilePdf} color="white" />  PDF
            </Button.Ripple> &nbsp;  &nbsp;  &nbsp;
          </Col>

        </Row>

        <div style={{ height: 5, width: 100 }}>
          {/* Just for Space */}
        </div>

        <Row>

        </Row>
        <div style={{ height: 10, width: 100 }}>
          {/* Just for Space */}
        </div>

        {/* Loader */}
        {isLoading ? (
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr. No</th>
                  {/* <th scope="col">Parent ID</th> */}
                  <th scope="col">Concern Person</th>
                  <th scope="col">Designation</th>
                  <th scope="col">Contact No</th>


                </tr>
              </thead>
              <tbody>
                {mappSuppliers}

              </tbody>
            </table>

          </div>)}

      </div>
    </div>

  )
}

const ClientsList = () => {
  return (
    <div>
      <FilterName />
    </div>
  )
}

export default ClientsList