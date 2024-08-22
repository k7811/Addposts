import axios from 'axios'
import React, { useState } from 'react'

const Reg = () => {
    let [user,setUser]=useState({"_id":"","name":"","dob":"","phno":"","pwd":"","gen":"","state":""})
    let [msg,setMsg]=useState("")
    let fun=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    let add=()=>{
        axios.post("http://localhost:5000/reg",user).then((res)=>{
            setMsg(res.data.msg)
            setUser({"_id":"","name":"","dob":"","phno":"","pwd":"","gen":"","state":""})
        })
    }
  return (
    <div className='formcon'>
        <div className='form'>
            <div className='msg'>{msg}</div>
            <input type='text' placeholder='Enter Email' name="_id" value={user._id} onChange={fun}/>
            <input type='text' placeholder='Enter Name' name="name" value={user.name} onChange={fun}/>
            <input type='text' placeholder='Enter Phno' name="phno" value={user.phno} onChange={fun}/>
            <input type='password' placeholder='Enter Password' name="pwd" value={user.pwd} onChange={fun}/>
            <input type='date' name="dob" value={user.dob} onChange={fun}/>
            <select name='state' onChange={fun} value={user.state}>
                <option selected disabled value="">select any one state</option>
                <option value="ap">Andhrapradesh</option>
                <option value="ts">Telangana</option>
                <option value="mh">Maharastra</option>
            </select>
            <div className='gen'>
                Gender: <input type='radio' value="male" onChange={fun} name='gen' checked={user.gen=="male"} />Male
                <input type='radio' value="female" onChange={fun} name='gen' checked={user.gen=="female"}/>Female
            </div>
    <button onClick={add}>Register</button>
        </div>
    </div>
  )
}

export default Reg
