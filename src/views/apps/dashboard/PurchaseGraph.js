// ** User List Component

// ** Styles
import "@styles/react/apps/app-users.scss"

import React, { useEffect, useState, useContext } from "react"
import { Container, Row, Col } from "reactstrap"
import { Line } from "react-chartjs-2"
import { MDBContainer } from "mdbreact"
import baseURL from '../../../baseURL/baseURL'
import axios from "axios"
import Cookies from "js-cookie"
import moment from "moment"

const PurchaseGraph = () => {

  const [data, setData] = React.useState([])
  const [data2, setData2] = React.useState([])

  const [isLoading, setLoading] = useState(true)

  const dataMine = {
    labels: data2,
    datasets: [
      {
        label: "Purchases",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(225, 204,230, .3)",
        borderColor: "rgb(205, 130, 158)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgb(205, 130,1 58)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data
      }
    ]
  }

  useEffect(() => {
    axios.get(`${baseURL}/stocks/getPurchaseReport?user_id=${Cookies.get("id")}`)
      .then((records) => {
        const totalArray = []
        const dateArray = []
        console.log('.......', records.data.data)
        records.data.data.forEach((data, index) => {
          totalArray.push(data.total)
        })
        setData(totalArray)

        records.data.data.forEach((data, index) => {
          dateArray.push(moment(data.date).format('DD/MM/YYYY'))
        })
        setData2(dateArray)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])


  return isLoading ? (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <MDBContainer>
      <Row  >
        <Col xs={6} md={6}> <h3 className="mt-5">Purchases</h3> </Col>
      </Row>
      <Line overflow="scroll" data={dataMine} options={{ responsive: true }} />
    </MDBContainer>
  )
}

export default PurchaseGraph
