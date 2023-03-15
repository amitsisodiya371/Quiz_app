import { useContext } from "react";
import { Link } from "react-router-dom";
import   {Heading}from "@chakra-ui/react"
function NavBefore(props) {
  var divStyle = {
    padding: "20px",
    backgroundColor: "orangered",
    textAlign: "right",
  };
  var aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (<div style={{backgroundColor: "orangered"}}>
  <Heading>Welcome to Quiz App</Heading>
    <div style={divStyle}>
        {/* <h2>Welcome to Quiz App</h2> */}
      <Link style={aStyle} to="/login">
        Login
      </Link>
      
       <Link to='/Signup'> 
          Signup</Link>
    </div></div>
  );
}

export default NavBefore;