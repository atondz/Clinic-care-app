// src/components/Logout.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Xóa token từ localStorage khi đăng xuất
    localStorage.removeItem('authToken');
    navigate('/login'); // Redirect to login page after logout
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
