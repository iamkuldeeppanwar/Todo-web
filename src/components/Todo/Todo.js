import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addingTodo, gettingTodo } from "../../services/actions/taskAction";
import { logoutUser } from "../../services/actions/action";
import { useNavigate } from "react-router-dom";
import "./Todo.css";

function Todo() {
  const myState = useSelector((state) => state.taskReducer.tasks);
  console.log(myState);
  const token = localStorage.getItem("Authorization");
  const [todo, setTodo] = useState();
  const [error, setError] = useState();
  let dispatch = useDispatch();
  let Navigate = useNavigate();

  const toggle = () => setError(!error);

  const addTodo = (e) => {
    e.preventDefault();
    console.log("clicked");
    if (error) {
      setError("invalid input");
    } else {
      dispatch(addingTodo(todo, token));
    }
  };

  useEffect(() => {
    dispatch(gettingTodo(token));
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const logout = () => {
    dispatch(logoutUser(token, Navigate));
  };

  return (
    <>
      <button className="logoutbtn" onClick={logout}>
        Logout
      </button>

      <div className="Todo-container">
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
        <form onSubmit={addTodo}>
          <div>
            <label className="Todo-label">TODO</label>
          </div>
          <div>
            <input
              className="Todo-input"
              placeholder="Add Todo..."
              type="text"
              required
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
          <div>
            <Button
              type="submit"
              color="primary"
              endIcon={<AddCircleIcon />}
              size="large"
            >
              ADD
            </Button>
          </div>
        </form>
        {myState ? (
          myState.map((todos) => {
            return (
              <>
                <div className="items" key={todos._id}>
                  <p key={todos._id}>{todos.description}</p>
                </div>
              </>
            );
          })
        ) : (
          <p>No Tasks</p>
        )}
      </div>
    </>
  );
}

export default Todo;
