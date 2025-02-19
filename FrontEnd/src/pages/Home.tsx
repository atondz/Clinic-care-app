import React from "react";
import Sidebar from "../components/Sidebar.tsx";
import Header from "../components/Header.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f0f4ff" }}>
      {/* Sidebar bên trái */}
      <Sidebar />

      {/* Nội dung chính */}
      <div className="flex-grow-1 p-4">
        <Header />
        <h1 className="text-center mb-4 text-primary">Welcome to ClinicCare</h1>

        {/* Thẻ hiển thị dịch vụ */}
        <div className="container">
          <div className="row">
            {["Giấy khám bệnh", "Phiếu dịch vụ", "Đơn thuốc"].map((text, index) => (
              <div key={index} className="col-md-3">
                <div
                  className="card p-4 text-center shadow-sm border-0"
                  style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
                >
                  <h5 className="text-dark">{text}</h5>
                  <button className="btn btn-primary mt-3">Xem</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
