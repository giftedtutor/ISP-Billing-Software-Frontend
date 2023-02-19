import React, { useState } from "react"
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const datepicker  = () => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <DatePicker  />
    // <DatePicker selected={startdate} />
  )
}
export default datepicker 