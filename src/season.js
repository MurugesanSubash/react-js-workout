import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useState } from 'react'

export let Summer = ()=>
{
    
    const [command,setcommand] = useState("");

    function Setter(temp)
    {
        setcommand(temp.target.value)
    }
    
    const [picture,setpicture] = useState("");

    function Clickbutton()
    {
        command === "summer" ?
        setpicture({backgroundImage: `(url(${'kongu.jpg'}))`
    }):

        command === "winter" ?
        setpicture(<img src={'../image/css.jpg'}/>):

        setpicture(command);

    }
    
    return(
        <>
        <div className='mt-5 text-center'>

            <div className='col-6'>
                <input 
                    onChange={Setter}
                    type='text'
                    className='form-control'
                    placeholder='Enter the input here'
                    />
            </div>

            <div className='mt-5 col-6'>
                <button onClick={Clickbutton} className='btn btn-outline-primary col-6 fw-bolder float-start'>Click Here</button>
            </div>

        </div>

        <img src={'../image/pic.jpg'}/>

        </>
    )
}