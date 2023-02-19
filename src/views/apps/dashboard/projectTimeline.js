import React, { useEffect, useState } from "react"
import { HorizontalBar } from 'react-chartjs-2' 
import { MDBContainer } from 'mdbreact' 
import baseURL from '../../../baseURL/baseURL'


  const projectTimeline = () => {
  
    
  const [data, setData] = React.useState([])
  const [projName,  setName] = React.useState([])
  const [enddate,  setDate] = React.useState([])
  const [isLoading, setLoading] = useState(true)
    const dataMine = {
      labels: projName,
      datasets: [
        {
          label: 'Days Remaining',
          data: enddate,
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }
      ]
    }
    function getDays(start, last) {
      //initialize dates with Date object
      const date1 = new Date(start)
      const date2 = new Date(last)
  
      // calculation for converting a day into milliseconds
      const oneDay = 1000 * 60 * 60 * 24
  
      // calculation for the time difference between start and last
      const diffTime = date2.getTime() - date1.getTime()
  
      // calculation for the days between start and last
      const diffDays = Math.round(diffTime / oneDay)
      // return number of days
      return diffDays
  }
   
  useEffect(() => {
   
    const today = new Date()
    const dash = '-'
    const zero = '0'
    const date = today.getFullYear() + dash + (today.getMonth() + 1) + dash  + today.getDate()
    const date2 = today.getFullYear() + dash + zero + (today.getMonth() + 1) + dash  + zero + today.getDate()
  
    fetch(`${baseURL}/projectsTimeline`)
      .then((response) => response.json())
      .then((records) => {
        const rec = records.projectsTimeline.map((data, index) => {
         
        
           return getDays(date, data.endDate)
         
        })
        const rec2 = records.projectsTimeline.map((data, index) => {
          return data.name
        })
        
         setDate(rec)
         setName(rec2)

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
   

      <h3 className='mt-5'>Projects Timeline  </h3>
        <HorizontalBar
         data={dataMine}
          options={{ responsive: true }}
        />

    </MDBContainer>
  )

}

export default projectTimeline 