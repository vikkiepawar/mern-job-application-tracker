# 🚀 MERN Job Application Tracker

A full-stack MERN application to manage job applications efficiently. Users can add, update, delete, search, and filter job applications through a clean and responsive interface.

## 🌐 Live Demo

**Frontend:** https://mern-job-application-tracker.vercel.app

**Backend API:** https://mern-job-application-tracker.onrender.com

---



---

## ✨ Features

- ✅ Add a new job application
- ✅ View all job applications
- ✅ Update existing jobs
- ✅ Delete jobs
- ✅ Search by company name
- ✅ Filter by application status
- ✅ Dashboard statistics
- ✅ Responsive UI
- ✅ REST API
- ✅ MongoDB Atlas database

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```
mern-job-application-tracker
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/vikkiepawar/mern-job-application-tracker.git
```

Move into the project

```bash
cd mern-job-application-tracker
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run the backend

```bash
npm run dev
```

---

## Frontend Setup

Open another terminal

```bash
cd client
npm install
npm run dev
```

---

## REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/jobs` | Get all jobs |
| POST | `/api/jobs` | Add a job |
| PUT | `/api/jobs/:id` | Update a job |
| DELETE | `/api/jobs/:id` | Delete a job |

---

## 📚 What I Learned

- Building a full-stack MERN application
- Creating RESTful APIs using Express.js
- MongoDB CRUD operations with Mongoose
- React state management with Hooks
- API integration using Axios
- Git & GitHub workflow
- Backend deployment using Render
- Frontend deployment using Vercel
- Connecting cloud-hosted services

---

## 🚀 Future Improvements

- User Authentication (JWT)
- User-specific dashboards
- Dark Mode
- Pagination
- Sorting
- Resume upload
- Company logos
- Notes section
- Interview scheduling
- Email reminders

---

## 👨‍💻 Author

**Vikram Pawar**

GitHub: https://github.com/vikkiepawar

LinkedIn: https://www.linkedin.com/in/vikram-pawar-42880b224

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
