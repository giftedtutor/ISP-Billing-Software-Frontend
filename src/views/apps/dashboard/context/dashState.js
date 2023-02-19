

import React, { useEffect, useState } from "react"
import dashContext from "./dashContext"

const dashState = (props) => {

// COntext for  clientLedgerGraph
const [CPaid, setCPaid] = React.useState([])
const [CTime, setCTime] = React.useState([])
const [CisLoading, setCLoading] = useState(true)

// COntext for  supplierLedgerGraph
const [SPaid, setSPaid] = React.useState([])
const [STime, setSTime] = React.useState([])
const [SisLoading, setSLoading] = useState(true)


  return (
    <dashContext.Provider value={{CPaid, setCPaid, CTime, setCTime, CisLoading, setCLoading, SPaid, setSPaid, STime, setSTime, SisLoading, setSLoading}}>
      {props.children}
    </dashContext.Provider>
  )

}
export default dashState