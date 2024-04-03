import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

const Login = () => {

   const [email , setEmail] = useState("");
   const [password , setPassword] = useState("")
  const navigate = useNavigate()

  function login(){
    if(JSON.parse(localStorage.getItem("users"))
    ){
       const {email , password} = JSON.parse(localStorage.getItem("users"))
      
       console.log(email , email)
       console.log(password , password)
       if(email == email && password == password){
         
        navigate("/profile")
        toast.success("successfully logIn")
       }
       else{
        toast.error("invalid credentials")
       }
    }else{
      toast.error("No users found")
    }
  }
  return (
    <div className='login'>
     <h3>Signin to your PopX account</h3>
     <p>
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
     </p>
     <div class="form-group">
          <label>
            Email address <span className="star">*</span>{" "}
          </label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div class="form-group">
          <label>
            Password <span className="star">*</span>{" "}
          </label>
          <input type="password" class="form-control input-lg" required value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-btn" onClick={login}>Create account</button>
    </div>
  )
}

export default Login