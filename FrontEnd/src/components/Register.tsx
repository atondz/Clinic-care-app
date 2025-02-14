// src/components/Register.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'staff',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      setSuccess('User registered successfully!');
      console.log(response.data);
      // Redirect to login page after successful registration
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError('Error: Could not register the user.');
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="doctor">Doctor</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {error && <p className="register-message error">{error}</p>}
        {success && <p className="register-message success">{success}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
  
};

export default Register;
