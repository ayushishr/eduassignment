import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

 const navigate = useNavigate()

  return (
    <div className='home'>
       <h1>WelCome to PopX</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, amet.</p>
       <button className='create-btn' onClick={e =>navigate("/signup") }>Create Account</button>
       <button className='login-btn' onClick={e =>navigate("/login") } >Already Registered?Login</button>
    </div>
  )
}

export default Home