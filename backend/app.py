from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from graph import graph
import traceback

app = FastAPI(
    title="PathPilot AI API",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://path-pilot-ai-dusky.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "message": "Welcome to PathPilot AI Backend 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "running",
        "service": "PathPilot AI"
    }


@app.post("/chat")
def chat(data: ChatRequest):
    try:
        result = graph.invoke(
            {
                "message": data.message,
                "goal": "",
                "skills": "",
                "timeline": "",
                "response": ""
            }
        )

        return {
            "reply": result["response"]
        }

    except Exception as e:
        print("========== SERVER ERROR ==========")
        print("Error:", str(e))
        traceback.print_exc()
        print("==================================")

        return {
            "reply": f"❌ Server Error: {str(e)}"
        }