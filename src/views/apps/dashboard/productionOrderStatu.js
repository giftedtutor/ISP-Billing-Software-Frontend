import React from "react"
import { Bar } from "react-chartjs-2"
import { MDBContainer } from "mdbreact"
// import "./css/scrollbar.css"
import baseURL from '../../../baseURL/baseURL'
const ProductionOrderStatus = () => {

  // const scrollContainerStyle = { width: "800px", maxHeight: "400px" }

  const dataMine = {
  
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "% of Votes",
          data: [6, 7, 9, 5, 2, 4],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    }
    const barChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  

    return (
      <MDBContainer>
          {/* <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>  */}
                <h3 className="mt-5">Production Order Status</h3> 
        <Bar data={dataMine} options={barChartOptions} />
        {/* </div> */}
      </MDBContainer>
    )
  
}

export default ProductionOrderStatus