import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/actions/action";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import "./Login.css";

function Login() {
  let dispatch = useDispatch();
  const Navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const toggle = () => setError(!error);

  const { email, password } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const login_User = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("invalid user input!");
    } else {
      dispatch(loginUser(state, Navigate));
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  return (
    <div className="Login-container">
      <h1>LOGIN</h1>
      {error && (
        <Snackbar
          open={toggle}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
      <form onSubmit={login_User}>
        <label>Email</label>
        <div>
          <input
            className="Email"
            type="email"
            name="email"
            value={email}
            placeholder="Email..."
            onChange={handleInputChange}
          />
        </div>
        <br />
        <label>Password</label>
        <div>
          <input
            className="Password"
            type="password"
            name="password"
            value={password}
            placeholder="Password..."
            onChange={handleInputChange}
            minLength={7}
          />
        </div>
        <label>Password must be greater than 7 characters</label>
        <br />

        <div>
          <input className="loginbtn" type="submit" value="Login" />
        </div>
        <div>
          <h3>or</h3>
        </div>

        <Link className="Account" to="/Signup">
          Create an Account?
        </Link>
      </form>
      <br />
    </div>
  );
}

export default Login;
