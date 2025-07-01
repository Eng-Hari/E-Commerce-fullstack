# 🛒 E-Commerce Fullstack Project

This is a complete MERN stack based e-commerce application that supports both customer and admin sides. Users can browse products, manage their cart, and place orders using Stripe or Cash on Delivery. Admins can manage products, view orders, and update their status. The project includes secure authentication, image uploads with Cloudinary, and is fully responsive across devices.

---

## 🔍 Features

### 👤 User Side
- Browse products by category
- Add to cart and modify quantities
- Login / Signup securely (JWT)
- Place orders (Stripe / COD)
- View past orders
- Responsive for mobile and desktop

### 🔐 Admin Side
- Admin login
- Add / Edit / Delete products
- Upload product images (Cloudinary)
- View and manage all orders
- Update order status
- Monitor stock levels

---

## ⚙️ Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS
- Axios

**Backend**
- Node.js + Express
- MongoDB (Cloud)
- JWT Authentication
- Multer (file upload)

**Others**
- Cloudinary (image hosting)
- Stripe & Razorpay (test payments)
- Vercel (Frontend & Admin deploy)
- Render (Backend deploy)

---

## 📁 Folder Structure


E-Commerce-fullstack/
├── admin/       → Admin dashboard (React + Tailwind)  
├── frontend/    → User-facing store (React + Tailwind)  
├── backend/     → RESTful API with Express + MongoDB  
├── .gitignore  
└── README.md

---

## 🚀 Getting Started

1️⃣ Clone the repository:
git clone https://github.com/Eng-Hari/E-Commerce-fullstack.git  
cd E-Commerce-fullstack

2️⃣ Install dependencies:

# Backend  
cd backend  
npm install  

# Frontend  
cd ../frontend  
npm install  

# Admin  
cd ../admin  
npm install  

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory with the following variables:

MONGO_URI=your_mongodb_url  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_NAME=your_cloudinary_name  
CLOUDINARY_KEY=your_cloudinary_api_key  
CLOUDINARY_SECRET=your_cloudinary_api_secret  
STRIPE_SECRET=your_stripe_secret_key  

💡 Refer to the provided `backend/.env.template` file.

---

## 💻 Running the App Locally

In 3 separate terminals, run the following:

# Backend (Port 3000)  
cd backend  
npm run dev  

# Frontend (Port 5174)  
cd frontend  
npm run dev  

# Admin Panel (Port 5173)  
cd admin  
npm run dev  

---

## 💳 Payment Integration

- Stripe Test Mode is enabled  
- Test card: 4242 4242 4242 4242 with any future date & any CVV  
- Supports both Stripe and Cash on Delivery

---

## 🌐 Deployment

- Frontend and Admin can be deployed on Vercel  
- Backend can be deployed on Render  
- Add all required environment variables in the deployment dashboard

---

## 📜 License

This project is open-source and available under the MIT License.

---

👤 Author
Hariharan S
📧 Email: hariharan03.eng@gmail.com
🔗 GitHub: @Eng-Hari

---

## ⭐️ Support

If you found this project helpful, give it a ⭐ on GitHub to support it!
