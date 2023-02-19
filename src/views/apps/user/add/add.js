import React, {useState, useEffect} from 'react'
import {Button } from 'reactstrap'
import { useHistory } from "react-router"
import { toast } from 'react-toastify'
import baseURL from '../../../../baseURL/baseURL'

const addSupplier = () => {
    
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [NatureOfWork, setNatureOfWork] = useState('')
    const [Email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [previous_balance, setPreviousBalance] = useState(0)
    const [contact_no, setContactNo] = useState('')
    const history = useHistory()

    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [ConcernPerson, setConcernPerson] = useState([])
    const [Designation, setDesignation] = useState([])
    const [PhoneNo, setPhoneNo] = useState([])
    const [rows, setRows] = useState([])

    const addSup = () => {
      setIsButtonDisabled(true)
         if (name === '') {
            toast('Enter Name!')
          } else if (address === '') {
            toast('Fill out address field!')
          }  else if (city === '') {
            toast('Fill out City field!')
          } else if (previous_balance === '') {
            toast('Fill out Previous Balance field!')
          } else if (contact_no === '') {
            toast('Provide Contact Number of more than 9 digits!')
          } else if (name !== '' && address !== '' &&  city !== '' && previous_balance !== '' && contact_no !== '') {

        fetch(`${baseURL}/addSupplier`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                contact_no,
                address,
                email:Email,
                city,
                previous_balance,
                natureOfWork: NatureOfWork,
                rows 
            })
        }).then(res => res.json())
        .then(data => {
            if (data.result === "Supplier Details Added Successfully") {
                console.log(data)
                toast('Supplier Added Successfully ')
                history.push('/ISPBS/apps/user/list')
            } else {
                toast('Supplier did not add, Please try again ')
              
            }
         
        }).catch(err => {
            console.log('ERROR :::: ', err)
        })
    } else {
        toast('Fill out fields correctly!')
    }
    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 3000)

    }

    const handleChange = idx => e => {
        const { name, value } = e.target
        ConcernPerson[idx] = value
        
        const rowss = [...rows]
        rowss[idx] = {
          personName: value,
         designation: Designation[idx],
          phone_no: PhoneNo[idx]
        
        }
        setRows(rowss)
      }

      const handleChange1 = idx => e => {
        const { name, value } = e.target
        Designation[idx] = value
        
        const rowss = [...rows]
        rowss[idx] = {
          personName: ConcernPerson[idx],
         designation: value,
          phone_no: PhoneNo[idx]
        
        }
        setRows(rowss)
      }

      const handleChange2 = idx => e => {
        const { name, value } = e.target
        PhoneNo[idx] = value
        
        const rowss = [...rows]
        rowss[idx] = {
          personName: ConcernPerson[idx],
         designation: Designation[idx],
          phone_no: value
        
        }
        setRows(rowss)
      }
      const handleAddRow = () => {
      
        const item = {
         personName: "",
        designation: "",
         phone_no: ""
         
        }
       setRows([...rows, item])
      }
      
      const handleRemoveSpecificRow = (idx) => {
        const rowss = [...rows]
        const RemoveRow1 = rowss.splice(idx, 1)
        setRows(rowss)
      }
    
      console.log('ROWS', rows)
    return (
        <div>
             <form>
        <div className="form-row">
        <div className="form-group col-md-6">
            <label >Name</label>
            <input type="text" className="form-control" placeholder="Supplier Name " value={name}
              onFocus={(e) => e.target.select()}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group col-md-6">
            <label>Contact No</label>
            <input type="Number" className="form-control"  placeholder="03440000000" value={contact_no}
            onFocus={(e) => e.target.select()}
            onChange={(e) => setContactNo(e.target.value)} />
        </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-8">
        <label>Address</label>
        <input type="text" className="form-control" placeholder="Street # 3443 ..."  value={address}
          onFocus={(e) => e.target.select()}
            onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="form-group col-md-4">
        <label>Nature Of Work (Optional)</label>
        <input type="text" className="form-control" placeholder="Nature of Work"  value={NatureOfWork}
          onFocus={(e) => e.target.select()}
            onChange={(e) => setNatureOfWork(e.target.value)}/>
        </div>
        </div>

        <div className="form-row">
        <div className="form-group col-md-4">
        <label>Email (Optional)</label>
        <input type="email" className="form-control"placeholder="example@gmail.com" value={Email}
          onFocus={(e) => e.target.select()}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group col-md-4">
            <label >City</label>
            <input type="text" className="form-control" placeholder="City" value={city}
              onFocus={(e) => e.target.select()}
            onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="form-group col-md-4">
            <label >Previous Balance (PKR)</label>
            <input type="number" className="form-control" placeholder="50000" value={previous_balance}
             onFocus={(e) => e.target.select()}
            onChange={(e) => setPreviousBalance(e.target.value)}/>
        </div>
     
        </div>
      {/*  */}
        <div className="table-responsive">
   <table className="table table-striped">
     
     <thead>
     <tr>
         <th scope="col">Concern Person</th>
         <th scope="col">Designation</th>
         <th scope="col">Phone No</th>
    
         <th scope="col">Remove</th>
         
       </tr>
     </thead>
  
     <tbody> 
               {rows.map((cat, idx) => (
                    <tr key={idx}>
                        <td>
                       
                          
                          <input type="text" className="form-control" placeholder="ConcernPerson" value={rows[idx].personName} 
                          style={{textTransform: 'capitalize', width:200}}  onFocus={(e) => e.target.select()} required
                          onChange={handleChange(idx)} />
                     
                        </td>

                        <td>
                          <input type="text" className="form-control" placeholder="Designation" value={rows[idx].designation} 
                          style={{textTransform: 'capitalize', width:200}}  onFocus={(e) => e.target.select()} required
                          onChange={handleChange1(idx)} />
                     
                        </td>

                        <td>
                          <input type="Number" className="form-control" placeholder="PhoneNo" value={rows[idx].phone_no} 
                          style={{textTransform: 'capitalize', width:200}}  onFocus={(e) => e.target.select()} required
                          onChange={handleChange2(idx)} />
                     
                        </td>
                        <td>
                        {/* <Button.Ripple onClick={handleRemoveSpecificRow(idx)} color='danger'>Remove</Button.Ripple> */}
                        <Button.Ripple onClick={() => {
                          handleRemoveSpecificRow(idx)
                        }} color='danger'>Remove</Button.Ripple>
                        </td> 
                       </tr>
                ))}
               
     </tbody>
   
     </table>
     </div>
     <div className="form-row">
    
    <div className="form-group col-md-10">
     
     <Button.Ripple color='primary' class="Right" onClick={handleAddRow}>
     Add Concern Person
    </Button.Ripple>
    </div>

    <div className="form-group col-md-2">
       <Button.Ripple color='primary'    disabled={isButtonDisabled}  onClick={addSup}>
       Store
             </Button.Ripple>
             </div>
             </div>
       
        </form>
        </div>
    )
} 

export default addSupplier