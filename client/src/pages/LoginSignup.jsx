import classes from "./css/LoginSignup.module.css";
import { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
const [formData,setFormData] = useState({
  username:"",
  password:"",
  email:""
})

const handleChange = (e)=>{
  const {name,value} = e.target;
  setFormData(prev=>{
    return{
      ...prev,
      [name]:value
    }
  })
}
  const login = async()=>{
    let response = await fetch("https://mern-e-shop-api.vercel.app/users/login",{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    if(response.status===400){
      response =await response.json();
      alert(response.message)
    }else if(response.status===200){
      response =await response.json();
      alert(response.message);
     localStorage.setItem("Auth-token",response.data.accessToken);
     localStorage.setItem("User-role",response.data.role);
      if(response.data.role==="admin"){
        window.location.replace("/admin");
      }else if(response.data.role==="delivery"){
        window.location.replace("/delivery");
      }else{
        window.location.replace("/");
      }
      
    }
  }

  const signup = async()=>{
let response = await fetch("https://mern-e-shop-api.vercel.app/users/signup",{
  method:"POST",
  headers:{
    Accept:"application/form-data",
    "Content-Type":"application/json"
  },
  body:JSON.stringify(formData)
})
if(response.status===400){
  response =await response.json();
  alert(response.message)
}else if(response.status===201){
  response =await response.json();
  alert(response.message);
  window.location.replace("/");
}
  }

  return (
    <div className={classes.loginsignup}>
      <div className={classes.loginsignup_container}>
        <h1>{state}</h1>
        <div className={classes.loginsignup_fields}>
          {state === "Signup" && <input name="username" value={formData.username} onChange={handleChange} type="text" placeholder="Your Name" />}
          <input name="email" value={formData.email} onChange={handleChange} type="text" placeholder="EmailAddress" />
          <input name="password" value={formData.password} onChange={handleChange} type="text" placeholder="password" />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state === "Signup" ? (
          <p className={classes.loginsignup_login}>
            Already have a account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className={classes.loginsignup_login}>
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Signup");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className={classes.loginsignup_agree}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
