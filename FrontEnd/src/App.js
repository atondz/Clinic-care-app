// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import Logout from "./components/Logout.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to ClinicCare</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          {/* Trang chính sau khi đăng nhập thành công */}
          <Route path="/" element={<h2>Home - User Dashboard</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
