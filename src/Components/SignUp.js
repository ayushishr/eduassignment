import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {

  const navigate = useNavigate()

  const[name , setName] = useState("")
  const[num , setNum] = useState(null)
  const[email , setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[CompanyName , setCompanyName] = useState("")
  const[agency , setAgency] = useState("")
  
  console.log(agency)
  console.log(name)

 function submitForm(e){
  e.preventDefault()
  if(!name.trim() || !name.includes(" ")){
       alert("Enter the name") 
       return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email)) {
      alert('Invalid email address')
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    const phonePattern = /^\d{10}$/;;
    if (!num.trim() || !phonePattern.test(num)) {
      alert('Invalid phone number');
      return;
    
 }

 let user = {
  email,
  name,
  password,
 }

 console.log(user)
 localStorage.setItem("users" , JSON.stringify(user))
 toast.success("Account successfully created")

 navigate("/profile")
  

  

}

  return (
    <div className="signup">
      <h2>Create your POpX account</h2>
      <form id="first-name">
        <div class="form-group">
          <label>
            Full Name <span className="star">*</span>{" "}
          </label>
          <input type="text" class="form-control input-lg" required value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div class="form-group">
          <label>
            Phone number <span className="star">*</span>{" "}
          </label>
          <input type="text" class="form-control input-lg"   required value={num} onChange={e => setNum(e.target.value)}  />
        </div>
        <div class="form-group">
          <label>
            Email address <span className="star">*</span>{" "}
          </label>
          <input type="email" class="form-control input-lg" required value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div class="form-group">
          <label>
            Password <span className="star">*</span>{" "}
          </label>
          <input type="password" class="form-control input-lg" required value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div class="form-group">
          <label>Company name </label>
          <input type="text" class="form-control input-lg" />
        </div>
        <div className="agency">
          <p>
            Are you an Agency<span className="star">*</span>{" "}
          </p>
          <div className="input-div">
            <div>
              <input type="radio" name="y/n" value="yes" checked={agency === "yes"} onChange={e => setAgency("yes")} />
              <label htmlFor="yes">Yes</label>
            </div>
            <div> 
              <input type="radio" name="y/n" value="no" checked={agency === "no"} onChange={e => setAgency("no")} />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        <button type="submit" className="signup-btn" onClick={e =>submitForm(e)}>Create account</button>
      </form>
    </div>
  );
};

export default SignUp;
