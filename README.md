# 🚀 CloudScale Frontend

A React-based frontend application that interacts with a distributed backend system deployed on AWS. This project demonstrates load balancing, rate limiting, and cloud-based full-stack architecture.

---

## 🌐 Live Demo

*(Add your Vercel link here after deployment)*

---

## 📌 Features

* ⚛️ Built with React
* 🔗 Connects to cloud backend API
* ⚖️ Displays load-balanced server response
* 🚦 Handles rate-limited API responses
* ☁️ Deployed on Vercel

---

## 🧠 Project Overview

This frontend application sends requests to a backend system hosted on AWS EC2 instances behind a load balancer. The backend returns a response along with the server identifier, allowing users to see how requests are distributed across multiple servers.

---

## 🛠️ Tech Stack

* Frontend: React.js
* HTTP Client: Axios
* Deployment: Vercel
* Backend: Node.js (AWS EC2 + Load Balancer)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Komal-S08/full-stack-CloudScale.git
cd cloudscale-frontend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Set environment variable

Create a `.env` file in the root directory and add:

```env
REACT_APP_API_URL=http://your-backend-url/api
```

---

### 4. Run the application

```bash
npm start
```

---

## 🚀 Deployment

This project is deployed using Vercel.

To deploy:

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable:

   ```
   REACT_APP_API_URL=http://your-backend-url/api
   ```
4. Deploy

---

## 🔍 How It Works

1. User clicks the "Call Backend" button
2. Request is sent to backend API
3. Load balancer routes request to one of the servers
4. Response includes:

   * Message
   * Server ID
5. Frontend displays the response

---

## 📈 Future Improvements

* Add authentication system
* Improve UI/UX design
* Add request logs visualization
* Integrate CI/CD pipeline

---

## 👩‍💻 Author

Komal Saini

---

## ⭐ Acknowledgement

This project was built as part of learning full-stack development, cloud computing, and distributed systems.
