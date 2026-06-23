# 🚀 PathPilot AI

PathPilot AI is an Agentic AI Career Mentor that generates personalized career roadmaps based on a user's goals, skills, and preparation timeline.

## ✨ Features

* Personalized career roadmaps
* English + Hinglish support
* Multi-chat history
* Markdown responses
* Goal extraction
* Skill extraction
* Timeline extraction
* Project recommendations
* Technology recommendations
* Learning resources

---

# 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Markdown

### Backend

* FastAPI
* LangGraph
* Google Gemini API
* Python

---

# 📁 Project Structure

```text
PathPilot-AI
│
├── backend
│   ├── app.py
│   ├── graph.py
│   ├── gemini_service.py
│   ├── state.py
│   ├── nodes
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Backend Setup

## Create Virtual Environment

```bash
python -m venv venv
```

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Create .env File

Create a file named:

```text
backend/.env
```

Add:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

## Run Backend

```bash
uvicorn app:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

# 💻 Frontend Setup

Go to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🏗️ Architecture

```text
React Frontend
        ↓
Axios API
        ↓
FastAPI Backend
        ↓
LangGraph Workflow
        ↓
Google Gemini API
        ↓
Personalized Career Roadmap
```

---

# 🧪 Example Prompt

```text
Mujhe AI Engineer banna hai aur mujhe Python aati hai.
```

```text
I want to become a Full Stack Developer and I know HTML, CSS and JavaScript.
```

## Live Demo

Frontend:
https://your-vercel-url.vercel.app

Backend:
https://pathpilot-ai-backend-z8vq.onrender.com

API Docs:
https://pathpilot-ai-backend-z8vq.onrender.com/docs

---

# 👨‍💻 Developed By

Abhishek Saxena
B.Tech CSE
RBMI Group of Institutions
Bareilly, Uttar Pradesh
