# Elevate-brand
# MERN Stack Project

## 🚀 Project Overview
Elevate is a subscription-based service under **Brands by Infusion** to help entrepreneurs build their personal brands. This project includes:
- A **responsive landing page** built with React and Tailwind CSS.
- A **backend API** using Node.js, Express, and MongoDB.
- A **form submission** feature to collect user data and store it in a database.

---

## 📂 Project Structure
```
project-root/
│-- backend/      # Backend code (Express, MongoDB)
│   ├── models/   # Mongoose models
│   ├── routes/   # Express routes
│   ├── server.js # Main backend file
│-- frontend/     # Frontend code (React, Tailwind CSS)
│   ├── src/
│   │   ├── components/  # React components (Hero, Features, Pricing, Form)
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # React entry point
│   ├── public/
│   ├── package.json
│-- README.md
│-- .gitignore
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/rijav1001/Elevate-brand.git
cd Elevate-brand
git checkout app
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install  # Install dependencies
```

#### Create a `.env` file in the backend folder:
```
MONGO_URI="mongodb://localhost:27017/Elevate"
PORT=5000
```

#### Run Backend
```sh
node server.js or npm start  # Starts the server on PORT 5000
```

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install  # Install dependencies
npm run dev  # Start frontend on localhost
```

---

## 📡 API Endpoints
**Base URL:** `http://localhost:5000`

| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | `api/users/submit`  | Submit user form data |

Request Body (JSON format):
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "plan": "monthly"
}
```


