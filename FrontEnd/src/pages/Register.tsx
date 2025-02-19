import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

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
      toast.error('Mật khẩu không khớp. Vui lòng nhập lại.');
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

      // Chuyển hướng sau 2 giây
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError('Lỗi: Không thể đăng ký tài khoản.');
      console.error(err);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: '#f7f9fc' }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="shadow-lg border-0" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: '#5a67d8', fontWeight: 'bold' }}>Đăng ký tài khoản</h2>
              
              {/* Hiển thị thông báo lỗi hoặc thành công */}
              {error && <Alert variant="danger" className="rounded-pill text-center">{error}</Alert>}
              {success && <Alert variant="success" className="rounded-pill text-center">{success}</Alert>}

              <Form onSubmit={handleSubmit}>
                {/* Tên */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Tên</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nhập tên đầy đủ"
                    className="p-3 rounded-pill"
                    required
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Địa chỉ Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập địa chỉ email"
                    className="p-3 rounded-pill"
                    required
                  />
                </Form.Group>

                {/* Mật khẩu */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Tạo mật khẩu mạnh"
                    className="p-3 rounded-pill"
                    required
                  />
                </Form.Group>

                {/* Xác nhận mật khẩu */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Xác nhận mật khẩu</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Xác nhận mật khẩu của bạn"
                    className="p-3 rounded-pill"
                    required
                  />
                </Form.Group>

                {/* Vai trò */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Vai trò</Form.Label>
                  <Form.Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="p-3 rounded-pill"
                  >
                    <option value="doctor">Bác sĩ</option>
                    <option value="staff">Nhân viên</option>
                    <option value="admin">Quản trị viên</option>
                  </Form.Select>
                </Form.Group>

                {/* Nút Đăng ký */}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 p-3 rounded-pill fw-bold"
                  style={{ backgroundColor: '#5a67d8', border: 'none', boxShadow: '0 4px 10px rgba(90, 103, 216, 0.3)' }}
                >
                  Đăng ký
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* ToastContainer để hiển thị thông báo */}
      <ToastContainer />
    </Container>
  );
};

export default Register;