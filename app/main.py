"""
Hybrid Hackathon Landing Page - FastAPI Application

A premium, responsive landing page for the Hybrid Hackathon event
that brings together entrepreneurs and gifted young students.
"""

import os
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse

from .routes import router

# Initialize FastAPI app
app = FastAPI(
    title="Hybrid Hackathon",
    description="Landing page for Hybrid Hackathon - where entrepreneurs meet young AI builders",
    version="1.0.0"
)

# Get the directory where this file is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Mount static files
app.mount("/static", StaticFiles(directory=os.path.join(BASE_DIR, "static")), name="static")

# Setup templates
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

# Include API routes
app.include_router(router)


@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    """Render the main landing page."""
    return templates.TemplateResponse(request=request, name="index.html")


@app.get("/health")
async def health_check():
    """Health check endpoint for Railway deployment."""
    return {"status": "healthy", "app": "Hybrid Hackathon"}


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app.main:app", host="0.0.0.0", port=port, reload=True)
