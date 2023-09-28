import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser ()  {
    const [name,setName]=useState()
    const [Class,setClass]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()

    const Submit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser",{name,Class,age})
        .then(result => 
            {console.log(result)
            navigate('/')
            
            
            })
        .catch(err=>console.log(err))
    }



  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-5'>
            <form onSubmit={Submit}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text"  className="form-control" placeholder='Enter Name'onChange={(e)=>setName(e.target.value)} required/>

                </div>
                <div className='mb-2'>
                    <label htmlFor="">Class</label>
                    <input type="text" className="form-control" placeholder='Enter the class' onChange={(e)=>setClass(e.target.value)} required />

                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" className="form-control" placeholder='Enter the Age' onChange={(e)=>setAge(e.target.value)} required/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>

        </div>

    </div>
  )
}

export default CreateUser