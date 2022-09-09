import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home/Home";
import ServiceList from "./components/Services/ServiceList";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/servicelist" exact element={<Signup />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
