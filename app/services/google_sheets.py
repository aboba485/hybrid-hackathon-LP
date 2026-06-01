"""
Google Sheets integration via Google Apps Script webhook.

This module sends application data to Google Sheets using a webhook URL
configured in the GOOGLE_SHEETS_WEBHOOK_URL environment variable.
"""

import os
import logging
from datetime import datetime, timezone
from typing import Any

import httpx

logger = logging.getLogger(__name__)

WEBHOOK_URL = os.environ.get("GOOGLE_SHEETS_WEBHOOK_URL")
WEBHOOK_SECRET = os.environ.get("GOOGLE_SHEETS_WEBHOOK_SECRET")

REQUEST_TIMEOUT = 10.0


async def send_to_google_sheets(application_type: str, payload: dict[str, Any]) -> bool:
    """
    Send application data to Google Sheets via webhook.
    
    Args:
        application_type: Either "entrepreneur" or "student"
        payload: Dictionary containing the application data
        
    Returns:
        True if successful or webhook not configured (for local dev)
        False if webhook request failed
    """
    if not WEBHOOK_URL:
        logger.warning(
            "GOOGLE_SHEETS_WEBHOOK_URL is not configured. "
            "Application logged to console only. "
            "Set this environment variable in Railway for production."
        )
        return True
    
    timestamp = datetime.now(timezone.utc).isoformat()
    
    data = {
        "type": application_type,
        "timestamp": timestamp,
        "payload": payload
    }
    
    headers = {
        "Content-Type": "application/json"
    }
    
    if WEBHOOK_SECRET:
        headers["X-Webhook-Secret"] = WEBHOOK_SECRET
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                WEBHOOK_URL,
                json=data,
                headers=headers,
                timeout=REQUEST_TIMEOUT,
                follow_redirects=True
            )
            
            if 200 <= response.status_code < 300:
                logger.info(
                    f"Successfully sent {application_type} application to Google Sheets. "
                    f"Status: {response.status_code}"
                )
                return True
            else:
                logger.error(
                    f"Google Sheets webhook returned non-2xx status: {response.status_code}. "
                    f"Response: {response.text[:500]}"
                )
                return False
                
    except httpx.TimeoutException:
        logger.error(
            f"Google Sheets webhook request timed out after {REQUEST_TIMEOUT}s. "
            f"Application type: {application_type}"
        )
        return False
        
    except httpx.RequestError as e:
        logger.error(
            f"Google Sheets webhook request failed: {type(e).__name__}: {e}. "
            f"Application type: {application_type}"
        )
        return False
        
    except Exception as e:
        logger.error(
            f"Unexpected error sending to Google Sheets: {type(e).__name__}: {e}. "
            f"Application type: {application_type}"
        )
        return False
