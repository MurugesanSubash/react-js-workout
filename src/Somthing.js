import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'


export let Learnusestate=()=>
{

    let[myname ,setMyname]=useState("");

    function choose(temp)
    {
        setMyname(temp.target.value)
    }
    

    function getter()
    {
        alert("Given name is"+myname)
    }

        return(     
            <>
              <div className = "justfy-content-center row">
                <input 
                onChange={choose}
                className="form-control col-6 bg-success text-light fw-bolder" 
                type = "text" />
                <button className="btn btn-outline-primary col-5" onClick={getter}>click here</button>
              </div>
            </>
        )

}
