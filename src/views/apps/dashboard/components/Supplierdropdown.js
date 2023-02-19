import React, { useEffect, useState, useContext} from 'react'
// import Cardscss from "./Othercss/card.css";
// fro dropdown 
import { Dropdown, Selection } from 'react-dropdown-now'
import 'react-dropdown-now/style.css'
 import DashContext from '../context/dashContext'
 import baseURL from '../../../../baseURL/baseURL'

  const Supplierdropdown = () => {
   

    const a = useContext(DashContext)

    const [data, setData] = React.useState([])
    
    const [isLoading, setLoading] = useState(true)


    const getAllData = () => {
      fetch(`${baseURL}/supplierLedgerCurrentMonth`)     
      .then((response) => response.json())
      .then((records) => {
        const rec = records.SupplierLedger.map((data, index) => {
          return data.remaining
        })
        const rec2 = records.SupplierLedger.map((data, index) => {
          return data.paymentDate
        })
         a.setSPaid(rec)
         a.setSTime(rec2)

       
        a.setSLoading(false)
      })
      .catch((error) => console.log(error))
    }

    useEffect(() => {
      fetch(`${baseURL}/getSuppliersDropdown`)          
        .then((response) => response.json())
        .then((records) => {
        

          const rec = records.Suppliers.map(({supplier_id, name}) => ({id:supplier_id, value: supplier_id, label: name}))
          const rec2 =  [
            {
               id: 0,
               value: 0,
               label: "Display All"            
            }           
           ]
           const object = rec2.concat(rec)
          setData(object)

          setLoading(false)
        
        })
        .catch((error) => console.log(error))
    }, [])

    const GetClientLedgerDetailsByID = (e) => {
      console.log(22)
    
      const ClientId = e
      if (ClientId  === 0) {
       getAllData()
       return false
     }
       

       const URL = `${baseURL}/supplierLedgerGraph?supplierID=`
       fetch(URL + ClientId)
       .then((response) => response.json())
       .then((records) => {
         const rec = records.SupplierLedger.map((data, index) => {
           return data.remaining
         })
         const rec2 = records.SupplierLedger.map((data, index) => {
           return data.paymentDate
         })
        
     
         a.setSPaid(rec)
         a.setSTime(rec2)
         a.setSLoading(false)
       })
       .catch((error) => console.log(error))
 
     }

  
    // const options = [{ id, value: name, label: 'awesome' }]
  
    
    return  isLoading ? (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) :  (

   
    <Dropdown
        placeholder="Display All"      
        className="my-className"
        options= {data}
        //  value = { value.id}        
        onChange={(value) => GetClientLedgerDetailsByID(value.id)}
        // onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
        // onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
        // onOpen={() => console.log('open!')}
        
/> 

  )
}
export default Supplierdropdown


// <select
// value={value}
// onChange={e => setValue(e.currentTarget.value)}

// >

// {console.log(value)}
//       {items.map(item => (
//         <option
//           key={item.id}
//           value={item.value}
//         >
//           {item.label}
         
//         </option>
//       ))}
      
//     </select>