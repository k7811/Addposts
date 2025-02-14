import React, { useContext,useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let [post,setPost]=useState({"title":"","body":"","cat":""})
  let [msg,setMsg]=useState("")
  useEffect(()=>{
    if(obj.data.token=="")
    {
      navigate("/login")
    }
    else{
      setPost(obj.data.item)
    }

  },[])
  let fun=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }
  let upd=()=>{
    axios.post("http://localhost:5000/upd",post).then((res)=>{
      navigate("/me")
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='enter title' name="title" onChange={fun} value={post.title}/>
        <textarea name="body" onChange={fun} value={post.body} className='txtarea'></textarea>
        <select name="cat" value={post.cat} onChange={fun}>
          <option value="" selected disabled>Select cat</option>
          <option value="edu">Education</option>
          <option value="ent">Movies</option>
          <option value="sports">Sports</option>
          <option value="news">News</option>
        </select>
        <button onClick={upd}>Updatepost</button>


      </div>

    </div>
  )
}

export default Edit
