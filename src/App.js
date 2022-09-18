import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home/Home";
import ServiceList from "./components/Services/ServiceList";
import ClientList from "./components/Clients/ClientList";
//import NewClientForm from "./components/Clients/NewClientForm";
import ClientCreate from "./components/Clients/ClientCreate";
import ClientsUpdate from "./components/Clients/ClientsUpdate";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}
      <Route path="/signup" element={<Signup />} />
      <Route path="/servicelist" element={<ServiceList />} />
      <Route path="/client-create" element={<ClientCreate />} />
      <Route path="/client-list" element={<ClientList />} />
      <Route path="/client-update/:id" element={<ClientsUpdate />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
