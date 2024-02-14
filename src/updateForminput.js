import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Create, ReReplace } from './newwork'


export let Updateform = (sub) => {

    const[contain ,setContain]=useState(sub.perk)
    
    const [studentdetails, setStudentdetails] = useState(
        {
           firstname:sub.content.firstname ,
           lastname:sub.content.lastname,
           gender:sub.content.gender,
           regno:sub.content.regno,
           email:sub.content.email,
           address:sub.content.address,
           mark:sub.content.mark,
           name:sub.content.name,   
           aadharno:sub.content.aadharno,
           pancard:sub.content.pancard,
           mobileno:sub.content.mobileno,
           checkbox:sub.content.checkbox
        })


    let setter = (temp) => {
        const { name, value } = temp.target;

        setStudentdetails(
            (mydata) => {
                return {
                    ...mydata,
                    [name]: value,
                }
            }
        )

    }

    const updatein = () => {
        alert(" submited ")
        ReReplace(studentdetails,contain)


        
    }

    return(
        
            <>   
          <div className=" row justify-content-center container fw-bolder" >

            <h1 className="text-center" style={{
              color:'red'
            }}> STUDENT JOINING FORM</h1>
              
              <div className="row mt-2">
                  <div className="col-6">
                      <label className="form-label float-start ">Firstname</label>
                      <input 
                      onChange={setter}
                      name='firstname'
                      className="form-control" 
                      type="text"
                      value={setStudentdetails.firstname}
                      />
                  </div>
                  <div class="col-6">
                      <label className="form-label float-start">Lastname</label>
                      <input
                      onChange={setter} 
                      name='lastname'
                      className="form-control" 
                      type="text"
                      value={studentdetails.lastname}/>
                  </div>
              </div>
                 <br/><br/><br/><br/>
              <div className="row">
                      <div className="text-start">
                      <h5>Gender</h5> 

                      </div>

                      <div>
                          <label className="form-label float-start">
                              <input
                              onChange={setter} 
                              type="radio" 
                              className="form-check-input" 
                              name="gender"
                              value="male"/>Male
                          </label>
                      </div>

                      <div>
                          <label className="form-label float-start">
                              <input
                              onChange={setter} 
                              type="radio" 
                              className="form-check-input" 
                              name="gender"
                              value="Female"/>Female
                          </label>
                      </div>
                      
                      <div>
                          <label className="form-label float-start">
                              <input 
                              onChange={setter}
                              type="radio" 
                              className="form-check-input"
                               name="gender"
                               value="Others"/>Others
                          </label>
                      </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">Reg No</label>               
                              <input
                              onChange={setter} 
                              name='regno'
                              className="form-control" 
                              type="text" 
                              placeholder="Must have 8-digit"
                              value={studentdetails.regno}/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">Email</label>
                      <input
                       onChange={setter}
                       name='email'
                       className="form-control" 
                       type="text"
                       placeholder="you@example.com"
                       value={studentdetails.email}/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">Address</label>
                      <input
                      onChange={setter}
                      name='address'
                       className="form-control" 
                       type="text" 
                       placeholder="1234 Main st"
                       value={studentdetails.address}/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-4">
                      <label className="form-label float-start">Mark</label>
                      <input
                      onChange={setter} 
                      name='mark'
                      className="form-control"
                       type="number"
                       value={studentdetails.mark}/>
                  </div>
              </div>

              <br/><br/><br/><br/><br/><hr/>                                 

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">
                          <input
                          onChange={setter}
                           type="checkbox" 
                           className=" form-check-input "
                           name='checkbox'
                           />Computer Activities
                      </label>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">
                          <input
                          onChange={setter} 
                          type="checkbox"
                           className=" form-check-input "
                           name='checkbox'
                           value="sport activities"
                           />Sports Activities
                      </label>
                  </div>
              </div>

              <br/><br/><hr/>

              <h6> For Student Account (Please if the below details) </h6>

              <div className="row mt-2">
                  <div className="col-6">
                      <label className="form-label float-start ">Name</label>
                      <input
                      onChange={setter}
                      name='name' 
                      className="form-control" 
                      type="text"
                      value={studentdetails.name}/>
                  </div>
                  <div className="col-6">
                      <label className="form-label float-start">Aadhar NO</label>
                      <input 
                      onChange={setter}
                      name='aadharno'
                      className="form-control" 
                      type="number"
                      value={studentdetails.aadharno}/>
                  </div>
              </div>
              
              <div className="row mt-2">
                  <div className="col-3">
                      <label className="form-label float-start ">PAN Card NO</label>
                      <input
                      onChange={setter} 
                      name='pancard'
                      className="form-control" 
                      type="text"
                      value={studentdetails.pancard}/>
                  </div>
                  <div className="col-3">
                      <label className="form-label float-start">Mobile that to link with Account</label>
                      <input 
                      onChange={setter}
                      name='mobileno'
                      className="form-control" 
                      type="number"
                      value={studentdetails.mobileno}/>
                  </div>
              </div>
              
              <br/><br/><br/><br/><br/><hr/>

              <div className="row text-center">
                      <button onClick={updatein} className="btn bg-primary text-light col-2">Update</button>
              </div>

          </div>
    
    </>

    );
}