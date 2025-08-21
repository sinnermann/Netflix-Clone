import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();  // prevent page refresh
    navigate("/home");   // <-- navigate to Home.jsx route
  };

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleSubmit}>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Click RED BUTTON to See Home Page" />
          ) : (
            <></>
          )}

          <input type="email" placeholder="Click RED BUTTON to See Home Page" />
          <input type="password" placeholder="Click RED BUTTON to See Home Page" />
          <button >{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              JUST CLICK RED BUTTON <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Have an Account? <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
