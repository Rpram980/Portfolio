"""
Optional FastAPI backend stub for the portfolio.

Use this if you'd like a separate Python service for:
- Contact form submission
- AI chatbot (e.g. Anthropic API) backing the on-page assistant
- Resume metrics / analytics

Run:
    pip install fastapi uvicorn[standard] pydantic
    uvicorn backend.fastapi.main:app --reload --port 8000
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(title="Ram Prakash Sharma — Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactPayload(BaseModel):
    name: str
    email: EmailStr
    message: str


@app.get("/")
def root():
    return {"status": "ok", "service": "portfolio-api"}


@app.post("/contact")
def submit_contact(payload: ContactPayload):
    # Plug in your email provider here (SES, SendGrid, Resend...).
    return {"ok": True, "received": payload.dict()}


class ChatPayload(BaseModel):
    question: str


@app.post("/chat")
def chat(payload: ChatPayload):
    # Optional: forward to an LLM here. For now, return a stub.
    return {
        "answer": (
            "Hi! I'm Ram's portfolio AI. The on-page assistant answers from "
            "structured data — extend this endpoint to use an LLM."
        )
    }
