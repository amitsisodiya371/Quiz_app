// import "./signup.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBefore from "../Nav/NavBefore";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameData, setnamedata] = useState("");
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(true);

  const handlemail = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", e.target.value);
  };
  const handlepasword = (e) => {
    setPassword(e.target.value);
    localStorage.setItem("password", e.target.value);
  };
  const handlename = (e) => {
    setnamedata(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  return (
    <><NavBefore/>
    <div className="container">
      
      <img
        className="image-logo"
        // src="https://www.shutterstock.com/image-vector/neon-light-glow-effect-quiz-600w-2169820083.jpg"
      ></img>
      <div className="container-1"></div>
      <div className="container-2">
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handlemail}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlepasword}
        ></input>{" "}
        <br />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={nameData}
          onChange={handlename}
        ></input>{" "}
        <br />
        <input type="text" placeholder="Last Name"></input>
        <br />
        <input type="Date" placeholder="Date of Birth"></input>
        <br />
        <input type="country" placeholder="India"></input>
      </div>

      <div className="container-3">
        <input
          className="male"
          type="button"
          value="Male"
          onClick={() => {
            if (male) {
              document.querySelector(".male").style.border = "2px solid black";
              document.querySelector(".female").style.border = "1px solid grey";
              setMale(false);
              setFemale(true);
              console(male);
            }
          }}
        ></input>
        <input
          className="female"
          type="button"
          value="Female"
          onClick={() => {
            if (female) {
              document.querySelector(".female").style.border =
                "2px solid black";
              document.querySelector(".male").style.border = "1px solid grey";
              setFemale(false);
              setMale(true);
              console(female);
            }
          }}
        ></input>
      </div>
      <div className="container-4">
        <input type="checkbox"></input>

        <label>
          Sign up for emails to get updates from Facebook on
          <br /> products, offers and your Member benefits{" "}
        </label>
      </div>

      <p className="container-p">
        By creating an account, you agree to Quiz App's Privacy Policy
        <br /> and Terms of Use.
      </p>
      <Link to="/login">
        <button className="container-btn" type="submit" onClick={() => {}}>
          Join US{" "}
        </button>
      </Link>
      <Link to="/login">
        <p className="container-p1">Already a Member? <a style={{color:"blue"}}>Signin </a></p>
      </Link>
    </div>
    </>
  );
}
export default Signup;
