import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBefore from "../Nav/NavBefore";
import { useNavigate } from "react-router-dom";
function Signup() {
  const token = localStorage.getItem("usertoken");
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSignUp() {
    // console.log(user)
    const payload = JSON.stringify(user);
    // try{
    // console.log(payload);
    fetch("http://localhost:8000/Signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (token) {
          localStorage.setItem("usertoken", JSON.stringify(res.token));
          // alert("Signup Successfully")
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <NavBefore />
      <div id="main">
        <div>
          <img
            style={{ width: "90%", margin:"20px 0 auto",alignItems:"center",alignContent:"center" }}
            src="https://play-lh.googleusercontent.com/xHyi_y3H4zVwfAb2dmFLt8YYeVqqXb0EKJJTxPR8dBDyi-mTjQWhXLEw6ilwAq1VOQ"
            alt=""
          />
        </div>
        <div className="container">
          {/* <img
          className="image-logo"
          // src="https://www.shutterstock.com/image-vector/neon-light-glow-effect-quiz-600w-2169820083.jpg"
          ></img>
          <div className="container-1"></div> */}
          <div className="container-2">
            <input
              type="text"
              required={true}
              placeholder="name"
              name="name"
              onChange={handleChange}
            ></input>{" "}
            {/* <br /> */}
            <br />
            <input
              type="text"
              required={true}
              placeholder="Email"
              name="email"
              // value='email'
              onChange={handleChange}
            ></input>
            <br />
            <input
              type="password"
              required={true}
              placeholder="Password"
              name="password"
              // value='password'
              onChange={handleChange}
            ></input>{" "}
            <br />
            <input
              type="text"
              required={true}
              placeholder="Gender"
              name="gender"
              // value='password'
              onChange={handleChange}
            ></input>{" "}
            <br />
            <input
              type="number"
              required={true}
              placeholder="Mobile"
              name="mobile"
              // value='password'
              onChange={handleChange}
            ></input>{" "}
            <br />
            <input type="Date" placeholder="Date of Birth"></input>
            <br />
            <input type="country" placeholder="India"></input>
          </div>

          <div className="container-4">
            <input type="checkbox"></input>

            <label>
              Sign up for emails to get updates from Quiz App on
              <br /> products, offers and your Member benefits{" "}
            </label>
          </div>

          {/* <Link to="/login"> */}
          <button
            className="container-btn"
            type="submit"
            onClick={handleSignUp}
          >
            Join US{" "}
          </button>
          {/* </Link> */}
          <Link to="/login">
            <p className="container-p1">Already a Member? Signin</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Signup;
