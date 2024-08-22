import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Login = () => {
  let [user,setUser]=useState({"_id":"","pwd":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()
  let fun=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  let obj=useContext(Ct)
  let login=()=>{
    axios.post("http://localhost:5000/login",user).then((res)=>{
      if(res.data.token!=undefined)
      {
        obj.setlogin(res.data)
        navigate("/")
      }
      else{
        setMsg(res.data.msg)
      }

    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='Enter Email' name="_id" value={user._id} onChange={fun}/>
        <input type='password' placeholder='Enter Password' name="pwd" value={user.pwd} onChange={fun}/>
        <button onClick={login}>Login</button>

      </div>
    </div>
  )
}

export default Login
