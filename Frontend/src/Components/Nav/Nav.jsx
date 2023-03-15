import { useContext } from "react";
import { Link } from "react-router-dom";
import { ctx } from "../Context/myContext";

function Nav(props) {
  const { isLoggedIn, setIsLoggedIn } = useContext(ctx);
  var divStyle = {
    padding: "20px",
    backgroundColor: "#1877F2",
    textAlign: "right",
  };
  var aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <div style={divStyle}>
      <Link style={aStyle} to="/Home">
        Home
      </Link>
      {isLoggedIn && (
       <Link to='/'> <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button></Link>
      )}
    </div>
  );
}

export default Nav;