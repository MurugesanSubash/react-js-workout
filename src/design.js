import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

 
 export function Design()
 
{

let drawing = {
  color:'blue'
}


  

    return(
    <>   
          <div className=" row justify-content-center container" id='pic'>

            <h1 className="text-center" style={{
              color:'red'
            }}> STUDENT JOINING FORM</h1>
              
              <div className="row mt-2">
                  <div className="col-6">
                      <label className="form-label float-start ">Firstname</label>
                      <input style = {drawing}  className="form-control" type="text"/>
                  </div>
                  <div class="col-6">
                      <label className="form-label float-start">Lastname</label>
                      <input style = {drawing} className="form-control" type="text"/>
                  </div>
              </div>
                 <br/><br/><br/><br/>
              <div className="row">
                      <div className="text-start">
                      <h5>Gender</h5> 

                      </div>

                      <div>
                          <label className="form-label float-start">
                              <input type="radio" className="form-check-input" name="payment"/>Male
                          </label>
                      </div>

                      <div>
                          <label className="form-label float-start">
                              <input type="radio" className="form-check-input" name="payment"/>Female
                          </label>
                      </div>
                      
                      <div>
                          <label className="form-label float-start">
                              <input type="radio" className="form-check-input" name="payment"/>Others
                          </label>
                      </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">Reg No</label>               
                              <input style = {drawing} className="form-control" type="text" placeholder="Must have 8-digit"/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">Email</label>
                      <input style = {drawing} className="form-control" type="text" placeholder="you@example.com"/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">Address</label>
                      <input style = {drawing} className="form-control" type="text" placeholder="1234 Main st"/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-4">
                      <label className="form-label float-start">Group</label>
                      <select className="form-select">
                          <option>choose....</option>
                          <option>1st</option>
                          <option>2nd</option>
                          <option>3rd</option>
                      </select>
                  </div>

                  <div class="col-4">
                      <label className="form-label float-start">Syllbus</label>
                      <select className="form-select">
                          <option>choose....</option>
                          <option>State Board</option>
                          <option>Matric</option>
                          <option>Other State</option>
                      </select>
                  </div>

                  <div className="col-4">
                      <label className="form-label float-start">Mark</label>
                      <input style = {drawing} className="form-control" type="number"/>
                  </div>
              </div>

              <br/><br/><br/><br/><br/><hr/>                                 

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">
                          <input type="checkbox" className=" form-check-input "/>Computer Activities
                      </label>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <label className="form-label float-start">
                          <input type="checkbox" className=" form-check-input "/>Sports Activities
                      </label>
                  </div>
              </div>

              <br/><br/><hr/>

              <h6> For Student Account (Please if the below details) </h6>

              <div className="row mt-2">
                  <div className="col-6">
                      <label className="form-label float-start ">Name</label>
                      <input style = {drawing} className="form-control" type="text"/>
                  </div>
                  <div className="col-6">
                      <label className="form-label float-start">Aadhar NO</label>
                      <input style = {drawing} className="form-control" type="text"/>
                  </div>
              </div>
              
              <div className="row mt-2">
                  <div className="col-3">
                      <label className="form-label float-start ">PAN Card NO</label>
                      <input style = {drawing} className="form-control" type="text"/>
                  </div>
                  <div className="col-3">
                      <label className="form-label float-start">Mobile that to link with Account</label>
                      <input style = {drawing} className="form-control" type="text"/>
                  </div>
              </div>

              <br/><br/><br/><br/><br/><hr/>

              <div className="row text-center">
                      <button className="btn bg-primary text-light col-2">Submit</button>
              </div>

          </div>
    
    </>
    )
    
}