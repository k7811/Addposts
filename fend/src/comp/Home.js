import React, { useContext, useEffect } from 'react'
import Ct from './Ct'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Allposts from './Allposts'

const Home = () => {
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.data.token=="")
    {
      navigate("/login")
    }

  },[])
  return (
    <div className='con'>
      <div className='sidmenu'>
        <Link to="/">All posts</Link>
        <Link to="/me">My Posts</Link>
        <Link to="/news">News</Link>
        <Link to="/edu">Education</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/movies">Movies</Link>

      </div>
      <div className='maincont'>
        
        <Outlet/>
      </div>
      <div className='adv'>
     <a href='https://www.remove.bg/'><img src="https://sb.kaleidousercontent.com/67418/992x558/81dcd06140/graphics-removebg.png" alt='text'/></a>
      </div>
       
    </div>
  )
}

export default Home
