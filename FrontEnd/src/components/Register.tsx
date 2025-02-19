import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { toast, ToastContainer   } from 'react-toastify';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'staff',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Kiểm tra nếu mật khẩu không khớp
    if (formData.password !== formData.confirmPassword) {
      
      toast.success('Mật khẩu không khớp. Vui lòng nhập lại.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      toast.success('Đăng ký thành công! Chuyển hướng đến trang đăng nhập...');
      console.log(response.data);

      // Chuyển hướng sau 0.05 giây
      
      setTimeout(() => {
        navigate('/login');
       
      }, 500);
    } catch (err) {
      setError('Lỗi: Không thể đăng ký tài khoản.');
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <h2>Đăng ký</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Xác nhận mật khẩu:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Vai trò:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="doctor">Bác sĩ</option>
            <option value="staff">Nhân viên</option>
            <option value="admin">Quản trị viên</option>
          </select>
        </div>
        {error && <p className="register-message error">{error}</p>}
        {success && <p className="register-message success">{success}</p>}
        <button type="submit">Đăng ký</button>
      </form>
     <ToastContainer/> 
    </div>
  );
};

export default Register;
