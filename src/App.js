import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home/Home";
import ServiceList from "./components/Services/ServiceList";
import ClientList from "./components/Clients/ClientList";
//import NewClientForm from "./components/Clients/NewClientForm";
import ClientCreate from "./components/Clients/ClientCreate";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/servicelist" exact element={<ServiceList />} />
      <Route path="/client-create" exact element={<ClientCreate />} />
      <Route path="/client-list" exact element={<ClientList />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
