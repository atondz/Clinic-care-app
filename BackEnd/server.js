// Import các package
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jwt');
const bcrypt = require('bcrypt');


// Khởi tạo ứng dụng Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Để xử lý JSON body trong request
app.use(cookieParser());  // Để xử lý cookies



// API cơ bản
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Khởi động server 
const port = 5000;
app.listen(port, () => {
  console.log(`Server đang chạy trên port ${port}`);
});
