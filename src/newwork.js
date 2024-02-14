import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Waste } from './forminput'
import { Reading } from './reading'
import { Updateform } from './updateForminput'

export let Object= ()=>
{
    const [emptyitem,setEmptyitem]=useState(false);
    const [saving,setSaving] = useState([]);
    const [reading,setReading] = useState(false);
    const [position,setPosition]=useState(0);
    const [newpage,setNewpage]=useState(false);
    const [change,setChange]=useState([]);

    useEffect(()=>{
        setSaving(collection)
        // alert(JSON.stringify(collection))
    })

    return(
        <>
         {
          // conditon
           (emptyitem)?    //true or false
           <>
           <Waste/>
           <button className='btn btn-outline-primary'
           
           onClick={()=>{

            setEmptyitem(false)
           }}
           
           >BACK</button>
           </>
           :
           (reading)?
           <>
           <Reading perk={position}/>
           <br/>
           <button
            onClick={()=>{
                setReading(false)
               }}> BACK</button>
           </>
           :
           (newpage)?
           <>
            <Updateform perk={position} content={change}/>
            <button
            onClick={()=>{
                setNewpage(false)
               }}> BACK</button>

           </>
           :
           //    NO need to use the condition again() 
           <>
           <button className='btn btn-outline-dark'
           
           onClick={()=>{
            setEmptyitem(true)
           }}>
            Register
           </button>

           <table className='table'>
            <thead className='bg-success'>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Gender</th>
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
                {
                    saving.map(
                        (data,index)=>
                      <>
                      <tr>
                        <td>{data.firstname}</td>
                        <td>{data.lastname}</td>
                        <td>{data.gender}</td>
                        <td>{data.regno}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td>{data.mark}</td>
                        <td>{data.name}</td>
                        <td>{data.aadharno}</td>
                        <td>{data.pancard}</td>
                        <td>{data.mobileno}</td>
                        <td>{data.checkbox}</td>
                        <td><button 
                        className='btn btn-outline-secondary'
                        onClick={()=>{
                        setReading(true);

                        setPosition(index)
                
                        }} >
                            Read</button>

                            <button
                            className='btn btn-outline-secondary'
                            onClick={()=>
                            setSaving(Removal(index))
                            }>
                                Delete</button>

                            <button
                            className='btn btn-outline-secondary'
                            onClick={()=>
                            {
                                setNewpage(true);

                                setPosition(index);

                                setChange(Replace(data.firstname));
                                
                            }}>
                                UPDATE</button>    
                                
                            </td>
                      </tr>
                      </>
                    )    
                }
            </tbody>
         </table>
         </>
         }
        </>
    )
}
// tempvalues

let collection = [
    {
         firstname:"Maha@123",
         lastname:"S",
         gender:"male",
         regno:"12346",
         email:"@gmail.com",
         address:"salem",
         mark:55,
         name:"Maha",
         aadharno:1234678922,
         pancard:"SKHKLLMJ",
         mobileno:9443807574,
         checkbox:"no"
  },
  {
          firstname:"Maha@123",
          lastname:"S",
          gender:"male",
          regno:"12346",
          email:"@gmail.com",
          address:"salem",
          mark:55,
          name:"Maha",
          aadharno:1234678922,
          pancard:"SKHKLLMJ",
          mobileno:9443807574,
          checkbox:"no"
  }]

  export let Create=(object)=>
  {
    collection.push(object);
  }

  export let Updown = (myindex)=>
  {
   
    return collection[myindex];
  }

  export let Removal =(erase)=>
  {
     collection = collection.filter((data,pos)=>{
        return pos !==erase;
    })

    return collection;
  }

  export let Replace =(tempe)=>
  {
    const tem = collection.filter(
        (data,pos)=>{
       return data.firstname === tempe;
    })
    return tem[0]
  }

  export let ReReplace =(data,index)=>
  {
      collection[index] =  data;
  }

  
  