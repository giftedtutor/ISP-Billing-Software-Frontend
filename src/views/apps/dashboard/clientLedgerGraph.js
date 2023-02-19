// ** User List Component
import "@styles/react/apps/app-users.scss"

import React, { useEffect, useState, useContext} from "react"
import { Container, Row, Col } from "reactstrap"
import { Line } from "react-chartjs-2"
import { MDBContainer } from "mdbreact"
  import CDropDown from "./components/dropdown"
  import CDatePicker from "./components/datepicker"
  import baseURL from '../../../baseURL/baseURL'


  //context api
  import DashContext from './context/dashContext'


const ClientLedgerGraph = () => {
  //
  const a = useContext(DashContext)

  const [data, setData] = React.useState([])


  const dataMine = {
    labels: a.CTime,
    datasets: [
      {
        label: "Receivable",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(184, 185, 210, .3)",
        borderColor: "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: a.CPaid
      }
    ]
  }

  useEffect(() => {   
    fetch(`${baseURL}/clientLedgerCurrentMonth`)
      .then((response) => response.json())
      .then((records) => {
        const rec = records.ClientLedger.map((data, index) => {
          return data.remaining
        })
        const rec2 = records.ClientLedger.map((data, index) => {
          return data.paymentDate
        })
        a.setCPaid(rec)
        a.setCTime(rec2)
       
       
        a.setCLoading(false)
      })
      .catch((error) => console.log(error))
     
  }, [])


  return a.CisLoading ? (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
   

<MDBContainer>

<Row  >
       
       <Col xs={6} md={6}> <h3 className="mt-5">Client Ledger   </h3> </Col> 
 
       <Col xs={6} md={6}> <h6 className="mt-5">   <CDropDown className="mt-5"/> </h6> </Col> 
    
      </Row> 

<Row  >
      
       {/* <Col xs={6} md={6}> <CDatePicker/> </Col>  */}
       <Col xs={6} md={6}> </Col>
      </Row> 


<Line data={dataMine} options={{ responsive: true }} />
</MDBContainer>

  )
}

export default ClientLedgerGraph
