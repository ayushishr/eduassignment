import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
   
  const navigate = useNavigate()
   const{name , email } =  JSON.parse(localStorage.getItem("users"))
   console.log(name , email)
   
  const text =  name.split(" ");
  console.log(text)
  const profiletext = text[0][0].toUpperCase() + text[0][1].toUpperCase() 
  console.log(profiletext) 

  function logout(){
    localStorage.removeItem("users")
    navigate("/")
    toast.success("successfully logout")
    
  }
  
  return (
    <div className='profile'>
      <h3>Account Settings</h3>
      <div className='profile-section'>
      <div className='profile-top'>
        <div className='image'>
           <p>{profiletext}</p>
        </div>
        <div className='name-section'>
            <p className='selector'>{name}</p>
            <p className='email'>{email}</p>
        </div>
      </div>
      <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veniam in dolore asperiores maxime atque nostrum fugiat harum ullam labore est natus, saepe iste repellat esse, aliquid quisquam aliquam voluptas deserunt facilis. </p>
      <div className='line'> </div>
      </div>
      <button className='logout-btn' onClick={logout}>Logout</button>
    </div>
  )
}  

export default Profile