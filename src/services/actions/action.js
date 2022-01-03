import axios from "axios";
import { ADD_USER, LOGIN_USER, LOGOUT_USER } from "../constant";

export const userAdded = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
export const userLogin = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};
export const userLogout = (user) => {
  return {
    type: LOGOUT_USER,
    payload: user,
  };
};

//User Creating
export const addUser = (user, Navigate) => {
  return (dispatch) => {
    axios
      .post(`https://todo-api-auth.herokuapp.com/users`, user)
      .then((users) => {
        const user = users;
        dispatch(userAdded(user));
        localStorage.setItem("Authorization", user.data.token);
        Navigate("/todo");
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(userAdded(errorMsg));
      });
  };
};

//User Login
export const loginUser = (user, Navigate) => {
  return (dispatch) => {
    axios
      .post(`https://todo-api-auth.herokuapp.com/users/login`, user)
      .then((users) => {
        const user = users;
        localStorage.setItem("Authorization", user.data.token);
        Navigate("/todo");
        dispatch(userLogin(user));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(userLogin(errorMsg));
      });
  };
};

export const logoutUser = (token, Navigate) => {
  return (dispatch) => {
    axios
      .post(`https://todo-api-auth.herokuapp.com/users/logout`, token, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((todos) => {
        const todo = todos;
        dispatch(userLogout(todo));
        localStorage.removeItem("Authorization");
        Navigate("/");
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(userLogout(errorMsg));
      });
  };
};
