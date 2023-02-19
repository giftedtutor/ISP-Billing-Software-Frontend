// ** User List Component
import "@styles/react/apps/app-users.scss" 

import React, { useEffect, useState } from "react" 
import { Line } from "react-chartjs-2" 
import { MDBContainer } from "mdbreact" 
import baseURL from '../../../baseURL/baseURL'
const monthWiseSale = () => {
  //

  const [data, setData] = React.useState([]) 
  const [Paid, setPaid] = React.useState([]) 
  const [Time, setTime] = React.useState([]) 

  const [isLoading, setLoading] = useState(true) 

  const dataMine = {
    labels: Time,
    datasets: [
      {
        label: "RS",
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
        data: Paid
      }
    ]
  } 

  useEffect(() => {
    fetch(`${baseURL}/monthWiseSale`)
      .then((response) => response.json())
      .then((records) => {
        const rec = records.monthlySale.map((data, index) => {
          return data.sale 
        }) 
        const rec2 = records.monthlySale.map((data, index) => {
          return data.name 
        }) 
        setPaid(rec) 
        setTime(rec2) 

        setLoading(false) 
      })
      .catch((error) => console.log(error)) 
  }, []) 

  return isLoading ? (
    <MDBContainer>
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
     </MDBContainer>
  ) : (
    <MDBContainer>
      <h3 className="mt-5">Month wise Sale </h3>
      <Line data={dataMine} options={{ responsive: true }} />
    </MDBContainer>
  ) 
} 

export default monthWiseSale 
