// import { useState, useContext } from "react";
import { ctx } from "./myContext";




import React, { useState,useEffect, useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import NavBefore from "../Nav/NavBefore";

function Login(props) {
  const { setIsLoggedIn } = useContext(ctx);
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");

  const [valurEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const navigate=useNavigate();
 
  // const handleSubmit = e => {
  //   e.preventDefault();

    
 

    // if (loginEmail== valurEmail && loginPassword == valuePassword) {
    //   // navigateToHome();
    //   alert("Login successful!")
    //   navigate("/Home")
    //   setIsLoggedIn(true);
      
    //   // ...
    // } else {
    
    //   alert("Login failed. Please check your email and password.");
    // }}
  

    const [user,setUser] = useState({})


    function handleChange(e){
      const {name,value} = e.target;
      setUser({...user,[name]:value})
    }
    
    function handleLogin(event){
      // console.log(user)
      event.preventDefault();
      const payload =JSON.stringify(user);
      // try{
        // console.log(payload)
      fetch("http://localhost:8000/login",{
        headers:{
          "Content-Type" : "application/json"
        },
      method: 'POST',
      body:payload
      
      }).then((res)=>
      res.json())
      .then((res)=>{
      // localStorage.setItem('usertoken', JSON.stringify(res.token)))
      console.log(res)
      console.log("id "+res.userinfo._id)
      if(res.token){
        
        localStorage.setItem('userid', JSON.stringify(res.userinfo._id))
      navigate('/Home')
      }
    })
      .catch((err)=>
        console.log(err))
        
      }
    
  return (
  <><NavBefore/>
    <div className="container">
      
      {/* <img className="image-logo"src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"></img> */}
      <form  >
        <div className="container-2">
          <input
            type="text"
            placeholder="Email"
            name="email"
            // value={valurEmail}
            onChange={handleChange}

          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            // value={valuePassword}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="container-4">
          <input type="checkbox" />
          <label>
            Keep me sign in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Forgotten
            Your Password?
          </label>
        </div>

        <p className="container-p">
          By logging in, you agree to Quizz App's Privacy Policy and <br />
          Terms of Use.
        </p>
<button className="container-btn" type="submit" onClick={handleLogin}>Sign In</button>
       
      </form>

      <Link to="/Signup"><h2 className="container-p1" >Not a Member? Join Us. </h2></Link>
    </div></>
  );
  }

export default Login;
