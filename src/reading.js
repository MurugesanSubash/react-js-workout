import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Updown } from './newwork'



export let Reading = (position)=>
  {
    useEffect(
        ()=>
        {
            setReadpage(Updown(position.perk))
        }
    )
    let [readpage,setReadpage] = useState({
        firstname:"",
        lastname:"",
        gender:"",
        regno:"",
        email:"",
        address:"",
        mark:0,
        name:"",
        aadharno:0,
        pancard:"",
        mobileno:0,
        checkbox:""
    }) 

   
    
     return(
        <>
        <p>Please check the details </p>

        <table className='table'>
            <thead className='bg-success'>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Gnder</th>
                    <th>Reg no</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Mark</th>
                    <th>Name</th>
                    <th>Aadharno</th>
                    <th>Pancard</th>
                    <th>Mobileno</th>
                    <th>Checkbox</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody> 
                    <tr>
                        <td>{readpage.firstname}</td>
                        <td>{readpage.lastname}</td>
                        <td>{readpage.gender}</td>
                        <td>{readpage.regno}</td>
                        <td>{readpage.email}</td>
                        <td>{readpage.address}</td>
                        <td>{readpage.mark}</td>
                        <td>{readpage.name}</td>
                        <td>{readpage.aadharno}</td>
                        <td>{readpage.pancard}</td>
                        <td>{readpage.mobileno}</td>
                        <td>{readpage.checkbox}</td>
                    </tr>
            </tbody>
         </table>
        </>
     )
  }