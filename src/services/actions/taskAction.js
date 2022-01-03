import { ADD_TODO, GET_TODO } from "../constant";
import axios from "axios";

export const todoAdded = (description) => {
  return {
    type: ADD_TODO,
    payload: description,
  };
};

export const getTodo = (todo) => {
  return {
    type: GET_TODO,
    payload: todo,
  };
};

//Adding todo
export const addingTodo = (description, token) => {
  console.log(description);
  return (dispatch) => {
    axios
      .post(
        `https://todo-api-auth.herokuapp.com/tasks`,
        { description: description },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((todos) => {
        const todo = todos;
        window.location.reload();
        dispatch(todoAdded(todo));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(todoAdded(errorMsg));
      });
  };
};

//Get Todo
export const gettingTodo = (token) => {
  return (dispatch) => {
    axios
      .get(`https://todo-api-auth.herokuapp.com/tasks`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      })
      .then((todos) => {
        const todo = todos;
        dispatch(getTodo(todo));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(todoAdded(errorMsg));
      });
  };
};
