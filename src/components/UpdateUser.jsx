import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {
    const { id } = useParams()
    const [name, setName] = useState()
    const [Class, setClass] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setClass(result.data.Class)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
    },
        [])

        const Update = (e)=>{
            e.preventDefault();
            axios.put("http://localhost:3001/updateUser/"+id,{name,Class,age})
            .then(result => 
                {console.log(result)
                navigate('/')
                
                
                })
            .catch(err=>console.log(err))
        }

        

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-5'>
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} value={name} required/>


                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Class</label>
                        <input type="text" className="form-control" placeholder='Enter the class' onChange={(e) => setClass(e.target.value)} value={Class} required />

                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" className="form-control" placeholder='Enter the Age' onChange={(e) => setAge(e.target.value)} value={age} required/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>

            </div>

        </div>
    )
}

export default UpdateUser