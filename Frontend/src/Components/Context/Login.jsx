// import { useState, useContext } from "react";
import { ctx } from "./myContext";

import React, { useState, useEffect, useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import NavBefore from "../Nav/NavBefore";

function Login(props) {
 

  const navigate = useNavigate();


  const [user, setUser] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleLogin(event) {
    // console.log(user)
    event.preventDefault();
    const payload = JSON.stringify(user);
    // try{
    // console.log(payload)
    fetch("https://confused-fly-sombrero.cyclic.app/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        // localStorage.setItem('usertoken', JSON.stringify(res.token)))
        console.log(res);
        console.log(res.userinfo._id);
        if (res.token) {
          localStorage.setItem("userid", JSON.stringify(res.userinfo._id));
          navigate("/Home");
          alert("Login Successfuly");
        }
      })
      .catch((err) => {
        alert("Please check your email or password");
        console.log(err)});
  }

  return (
    <>
      <NavBefore />
      <div id="main">
        <div >
          <img style={{width:"90%",marginTop:"20px"}} src="https://play-lh.googleusercontent.com/xHyi_y3H4zVwfAb2dmFLt8YYeVqqXb0EKJJTxPR8dBDyi-mTjQWhXLEw6ilwAq1VOQ" alt="" />
        </div>
        <div className="container">
          {/* <img className="image-logo"src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"></img> */}
          <form>
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
                Keep me sign in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Forgotten Your Password?
              </label>
            </div>

            <p className="container-p">
              By logging in, you agree to Quizz App's Privacy Policy and <br />
              Terms of Use.
            </p>
            <button className="container-btn" type="submit" onClick={handleLogin}>
              Sign In
            </button>
          </form>

          <Link to="/Signup">
            <h2 className="container-p1" style={{color:"blue"}}>Not a Member? Join Us. </h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
