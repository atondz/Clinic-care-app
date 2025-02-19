// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Logout from "./components/Logout.tsx";
import Home from "./pages/Home.tsx";


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        

        {/* Nội dung chính */}
        <div className="flex-1 ml-64 p-5">
          <h1 className="text-center text-3xl font-bold text-blue-600">
            Welcome to ClinicCare
          </h1>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
