"""
API routes for Hybrid Hackathon application.
"""

import logging
from fastapi import APIRouter

from .models import (
    EntrepreneurApplication,
    StudentApplication,
    ApplicationResponse,
    MESSAGES
)
from .services import send_to_google_sheets

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["applications"])


@router.post("/apply/entrepreneur", response_model=ApplicationResponse)
async def apply_entrepreneur(application: EntrepreneurApplication):
    """
    Handle entrepreneur application submission.
    
    Validates the application data, logs it, and sends it to Google Sheets.
    """
    lang = application.language
    
    # Calculate contribution amount server-side (don't trust frontend)
    contribution_amount = application.get_contribution_amount()
    
    # Convert to dict for logging and Google Sheets
    payload = application.model_dump()
    payload["contribution_amount"] = contribution_amount
    
    # Log the application
    logger.info("=" * 60)
    logger.info("NEW ENTREPRENEUR APPLICATION")
    logger.info("=" * 60)
    logger.info(f"Full Name: {application.full_name}")
    logger.info(f"Email: {application.email}")
    logger.info(f"Phone: {application.phone}")
    logger.info(f"Company: {application.company}")
    logger.info(f"Project Idea: {application.project_idea or 'Not provided'}")
    logger.info(f"Participation Type: {application.participation_type}")
    logger.info(f"Contribution Amount: {contribution_amount} EUR")
    logger.info(f"Consent to Contact: {application.consent_to_contact}")
    logger.info(f"Language: {lang}")
    logger.info("=" * 60)
    
    # Send to Google Sheets
    success = await send_to_google_sheets("entrepreneur", payload)
    
    if not success:
        logger.error(f"Failed to send entrepreneur application to Google Sheets: {application.email}")
        return ApplicationResponse(
            success=False,
            message=MESSAGES[lang]["submission_error"]
        )
    
    return ApplicationResponse(
        success=True,
        message=MESSAGES[lang]["entrepreneur_success"]
    )


@router.post("/apply/student", response_model=ApplicationResponse)
async def apply_student(application: StudentApplication):
    """
    Handle student application submission.
    
    NOTE: Student applications are currently disabled on the landing page,
    but the endpoint is kept for potential future use.
    
    Validates the application data, logs it, and sends it to Google Sheets.
    """
    lang = application.language
    
    # Convert to dict for logging and Google Sheets
    payload = application.model_dump()
    
    # Log the application
    logger.info("=" * 60)
    logger.info("NEW STUDENT APPLICATION")
    logger.info("=" * 60)
    logger.info(f"Full Name: {application.full_name}")
    logger.info(f"Age/Grade: {application.age_grade}")
    logger.info(f"School: {application.school}")
    logger.info(f"Email: {application.email}")
    logger.info(f"Strengths: {', '.join(application.strengths)}")
    logger.info(f"Background: {application.background or 'Not provided'}")
    logger.info(f"Language: {lang}")
    logger.info("=" * 60)
    
    # Send to Google Sheets
    success = await send_to_google_sheets("student", payload)
    
    if not success:
        logger.error(f"Failed to send student application to Google Sheets: {application.email}")
        return ApplicationResponse(
            success=False,
            message=MESSAGES[lang]["submission_error"]
        )
    
    return ApplicationResponse(
        success=True,
        message=MESSAGES[lang]["student_success"]
    )
