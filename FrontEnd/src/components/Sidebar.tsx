import React from "react";
import { Link } from "react-router-dom";
import { FaFileMedical, FaPills, FaClipboardList, FaUser, FaIdCard, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.title}>ClinicCare</h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}><FaFileMedical /> Giấy khám bệnh</Link></li>
        <li><Link to="/don-thuoc" style={styles.link}><FaPills /> Đơn thuốc</Link></li>
        <li><Link to="/phieu-dich-vu" style={styles.link}><FaClipboardList /> Phiếu dịch vụ</Link></li>
        <li><Link to="/benh-nhan" style={styles.link}><FaUser /> Bệnh nhân</Link></li>
        <li><Link to="/the-bhyt" style={styles.link}><FaIdCard /> Thẻ BHYT</Link></li>
        <li><Link to="/cai-dat" style={styles.link}><FaCog /> Cài đặt</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#2C3E50",
    color: "#fff",
    height: "100vh",
    padding: "20px",
    position: "fixed",
    top: "0",
    left: "0",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  menu: {
    listStyleType: "none",
    padding: "0",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#fff",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
    transition: "background 0.3s",
  },
  linkHover: {
    backgroundColor: "#34495E",
  },
};

export default Sidebar;
