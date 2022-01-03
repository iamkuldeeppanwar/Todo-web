import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Todo from "./components/Todo/Todo";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
