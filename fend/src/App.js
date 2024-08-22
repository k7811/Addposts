import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './comp/Home'
import Login from './comp/Login'
import Logout from './comp/Logout'
import Reg from './comp/Reg'
import Edit from './comp/Edit'
import Add from './comp/Add'
import Nav from './comp/Nav'
import './App.css'
import Ct from './comp/Ct'
import News from './comp/News'
import Edu from './comp/Edu'
import Sports from './comp/Sports'
import Movies from './comp/Movies'
import Allposts from './comp/Allposts'
import Myposts from './comp/Myposts'

const App = () => {
  let [data,setData]=useState({"token":"","name":"","_id":""})
  let setlogin=(obj)=>{
    setData({...data,...obj})
  }
  let obj={"data":data,"setlogin":setlogin}
  return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path='/' element={<Allposts/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/edu' element={<Edu/>}/>
      <Route path="/sports" element={<Sports/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path="/me" element={<Myposts/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path='/reg' element={<Reg/>}/>
     <Route path='/add' element={<Add/>}/>
    </Routes>
    </Ct.Provider>
    </BrowserRouter>
    
  )
}

export default App
