import React, {useState, useEffect} from 'react'
import {Button } from 'reactstrap'
import { useHistory } from "react-router"
import { toast } from 'react-toastify'
import { useLocation } from "react-router-dom"
import Axios from 'axios'
import baseURL from '../../../../baseURL/baseURL'

const addUnit = () => {
    
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [NatureOfWork, setNatureOfWork] = useState('')
    const [Email, setEmail] = useState('')
    const [City, setCity] = useState('')
    const [previous_balance, setPreviousBalance] = useState(0)
    const [contact_no, setContactNo] = useState('')
    const [supplier_id, setSupplierID] = useState('')

    const history = useHistory()
    const location = useLocation()
    const [suppliersF, setSuppliersF] = useState([])
    const [isLoading, setLoading] = useState(true)
    const id = location.state.params
    const [rows, setRows] = useState([])
    const [deleteRefresher, setDeleteRefresher] = useState(0)
    // const id = 1
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const editCategory = () => {

        Axios.get(`${baseURL}/getSupplier?supplierID=${id}`)
        .then(response => {
          console.log('Supp::::', response.data)
          setSuppliersF(response.data.supplier)
          setName(response.data.supplier.name)
          const child = response.data.ConcernedPersons.map(({
           
            contact_no,
            designation,
            id,
            name
      }) => ({
        phone_no:contact_no,
        designation,
        concernedPersonID:id,
        personName:name
       
      })) 
      setRows(child)
          setContactNo(response.data.supplier.contact_no)
          setAddress(response.data.supplier.address)
          setEmail(response.data.supplier.email)
          setCity(response.data.supplier.city)
          setPreviousBalance(response.data.supplier.previous_balance)
          setNatureOfWork(response.data.supplier.natureOfWork)
          setSupplierID(response.data.supplier.supplier_id)
          setLoading(false)

        //   setTotal(response.data.Categories.total)
        //   setLoading(false)
        })
        .catch(err => console.log(err))
   }

   useEffect(() => {
    editCategory()
   }, [deleteRefresher])
   const deleteConcernPerson = (viewID) => {
    // /apps/product/editCategory/
    
    Axios.get(`${baseURL}/deleteSupplierConcernedPerson?id=${viewID}`)
    .then(data => {
      console.log('Deleted:::::', data)
      if (data.data.result === "Concerned Person deleted successfully") {
         
          toast('Concerned Person deleted successfully')
          setDeleteRefresher(deleteRefresher + 1)
          // setChangeStatus(changeStatus + 1)
          // history.push('/apps/order/list')
      } else  {
          // history.push('/apps/order/list') 
          console.log("ERROR Status:::::::::::::::::::::::::::", data)
          // window.location.reload()
          toast('ConcernedPerson did not delete!')
          // setChangeStatus(changeStatus + 1)
      } 
   
  }).catch(err => {
      console.log('ERROR :::: ', err)
    })
  
    // history.push('/apps/productionOrder/dispatch', {params:viewID})
  }
   
    const updateCategory = () => {
         if (name === '') {
            toast('Enter Name')
          }  else if (
            name !== ''
          ) {
        fetch(`${baseURL}/updateSupplier?supplierID=${id}`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                 name,
                contact_no,
                address,
                email:Email,
                city:City,
                previous_balance,
                id:supplier_id,
                natureOfWork: NatureOfWork,
                rows
            })
        }).then(res => res.json())
        .then(data => {
            if (data.result === "Supplier Details Updated Successfully") {
                console.log(data)
                toast('Supplier Details Updated Successfully!')
                history.push('/ISPBS/apps/user/list')
            } else if (data.result === 'There is some error') {
                toast('You must update something on main data before clicking on update!')
            } else {
                toast('Supplier Details did not update, Please try again ')
                // history.push('/apps/user/list') 
            }
         
        }).catch(err => {
            console.log('ERROR :::: ', err)
        })
    } else {
        toast('Fill out fields correctly!')
    }


    }

    const handleChange = idx => e => {
        const { name, value } = e.target
     
        const rowss = [...rows]
        rowss[idx] = {
          personName: value,
         designation: rows[idx].designation,
          phone_no: rows[idx].phone_no,
          concernedPersonID: rows[idx].concernedPersonID
        
        }
        setRows(rowss)
      }

      const handleChange1 = idx => e => {
        const { name, value } = e.target
       
        const rowss = [...rows]
        rowss[idx] = {
          personName: rows[idx].personName,
         designation: value,
          phone_no: rows[idx].phone_no,
          concernedPersonID: rows[idx].concernedPersonID
          
        
        }
        setRows(rowss)
      }

      const handleChange2 = idx => e => {
        const { name, value } = e.target
        
        const rowss = [...rows]
        rowss[idx] = {
          personName: rows[idx].personName,
         designation: rows[idx].designation,
          phone_no: value,
          concernedPersonID: rows[idx].concernedPersonID
        
        }
        setRows(rowss)
      }
      const handleAddRow = () => {
      
        const item = {
         personName: "",
        designation: "",
         phone_no: "",
         concernedPersonID: 0
         
        }
       setRows([...rows, item])
      }
      console.log('ROWS:::::::', rows)
    return (
        <div>
                 {/* Loader */}
     {  isLoading ? ( 
     <div class="text-center">
     <div class="spinner-border" role="status">
       <span class="sr-only">Loading...</span>
     </div>
   </div>)  : (
                <form>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Name</label>
                    <input type="text" className="form-control" placeholder="Supplier Name " value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label>Contact #</label>
                    <input type="text" className="form-control"  placeholder="03440000000" value={contact_no}
                    onChange={(e) => setContactNo(e.target.value)} />
                </div>
                </div>
                <div className="form-row">
        <div className="form-group col-md-8">
        <label>Address</label>
        <input type="text" className="form-control" placeholder="Nature of Work"  value={address}
        style={{textTransform: 'capitalize'}}  onFocus={(e) => e.target.select()}
            onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="form-group col-md-4">
        <label>Nature Of Work</label>
        <input type="text" className="form-control" placeholder="1234 Main St"  value={NatureOfWork}
        style={{textTransform: 'capitalize'}}  onFocus={(e) => e.target.select()}
            onChange={(e) => setNatureOfWork(e.target.value)}/>
        </div>
        </div>
        
                <div className="form-row">
                <div className="form-group col-md-4">
                <label>Email (Optional)</label>
                <input type="email" className="form-control"placeholder="" value={Email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group col-md-4">
                    <label >City</label>
                    <input type="text" className="form-control" placeholder="City" value={City}
                    onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="form-group col-md-4">
                    <label >Previous Balance (PKR)</label>
                    <input type="number" className="form-control" placeholder="50000" 
                    disabled value={previous_balance}
                    onChange={(e) => setPreviousBalance(e.target.value)}/>
                </div>
                <div className="form-row">
             
                </div>
             
        
                </div>
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
                       
                          
                          <input type="text" className="form-control" placeholder="PhoneNo" value={rows[idx].phone_no} 
                          style={{textTransform: 'capitalize', width:200}}  onFocus={(e) => e.target.select()} required
                          onChange={handleChange2(idx)} />
                     
                        </td>
                        <td>
                        {/* <Button.Ripple onClick={handleRemoveSpecificRow(idx)} color='danger'>Remove</Button.Ripple> */}
                        <Button.Ripple onClick={() => {
                        //   handleRemoveSpecificRow(idx)
                        deleteConcernPerson(cat.concernedPersonID)
                        }} color='danger'>Delete</Button.Ripple>
                        </td> 
                          {/* <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button> */}
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
       <Button.Ripple color='primary' onClick={updateCategory}
       disabled={isButtonDisabled}
       >
      Update
             </Button.Ripple>
             </div>
             </div>
        </form>)}
        </div>
    )
} 

export default addUnit