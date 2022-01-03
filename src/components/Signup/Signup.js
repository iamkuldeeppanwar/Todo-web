import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/actions/action";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  let dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { name, email, password } = user;

  const toggle = () => setError(!error);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signupUser = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Input is Empty!");
    } else {
      dispatch(addUser(user, Navigate));
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
      <h1>SIGNUP</h1>
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
      <form onSubmit={signupUser}>
        <label>Name</label>
        <div>
          <input
            className="Name"
            type="text"
            name="name"
            value={name}
            placeholder="Name..."
            onChange={handleInputChange}
          />
        </div>
        <br />
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

        <Link className="Account" to="/">
          Already have an Account?
        </Link>
      </form>
      <br />
    </div>
  );
}

export default Login;
