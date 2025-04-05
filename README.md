# 🛍️ Product Management API

This is a full-stack product management system built using the **MERN** (MongoDB, Express.js, React, Node.js) stack. It allows users to register/login, create and manage products, upload images, and paginate through product listings. The system includes admin-based permissions and JWT authentication.

---

## ✨ Features

- ✅ User & Admin Authentication (JWT-based)
- ✅ Only one admin (no public admin registration)
- ✅ Create, update, and delete products
- ✅ Product ownership restriction (only owner or admin can update/delete)
- ✅ Image uploads (jpg/jpeg/png only, max 1MB)
- ✅ Pagination (default: 5 products per page)

> 🔐 Admin can manage all products; users can manage only their own.

---

## 🧠 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Upload**: Multer
- **Environment Config**: dotenv
- **Development Tool**: nodemon

---

## 🚀 Deployment Details

### 📦 Backend

- **Framework**: Node.js & Express.js
- **Database**: MongoDB Atlas Cluster
- **Deployment Platform**: Render (or similar)
- **Live URL**: _[Backend Link (Coming Soon)](#)_
- **Start Command**: 
  ```bash
  nodemon server.js
  # or
  node server.js

## Installation & Setup
#### Clone Repository (Frontend)
```sh
git clone https://github.com/your-username/product-management-api.git

cd product-management-api

npm install

npm run dev

```
## 📬 Postman Collection
postman collection is added inside the code 
- path : ../postman collection/Product Management API.postman_collection

##  🖼️ File Upload Info
Upload key: image

Accepted formats: .jpg, .jpeg, .png

Max size: 1MB

Storage location: /public folder

Access: Product image field contains the public URL
