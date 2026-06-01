"""
Pydantic models for Hybrid Hackathon application forms.
"""

from typing import Literal, Optional, List
from pydantic import BaseModel, EmailStr, field_validator


class EntrepreneurApplication(BaseModel):
    """Model for entrepreneur application form."""
    full_name: str
    email: EmailStr
    phone: str
    company: str
    project_idea: Optional[str] = None
    wants_to_sponsor: bool = False
    sponsor_amount: Optional[float] = None
    language: Literal["en", "ru"] = "en"

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Full name is required")
        return v.strip()

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Phone is required")
        return v.strip()

    @field_validator("company")
    @classmethod
    def validate_company(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Company is required")
        return v.strip()

    @field_validator("sponsor_amount")
    @classmethod
    def validate_sponsor_amount(cls, v: Optional[float]) -> Optional[float]:
        if v is not None and v < 0:
            raise ValueError("Sponsor amount must be positive")
        return v


class StudentApplication(BaseModel):
    """Model for student application form."""
    full_name: str
    age_grade: str
    school: str
    email: EmailStr
    strengths: List[Literal["Mathematics", "AI", "Programming"]]
    background: Optional[str] = None
    language: Literal["en", "ru"] = "en"

    @field_validator("full_name")
    @classmethod
    def validate_full_name(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Full name is required")
        return v.strip()

    @field_validator("age_grade")
    @classmethod
    def validate_age_grade(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("Age/grade is required")
        return v.strip()

    @field_validator("school")
    @classmethod
    def validate_school(cls, v: str) -> str:
        if not v or not v.strip():
            raise ValueError("School is required")
        return v.strip()

    @field_validator("strengths")
    @classmethod
    def validate_strengths(cls, v: List[str]) -> List[str]:
        if not v or len(v) == 0:
            raise ValueError("At least one strength is required")
        return v


class ApplicationResponse(BaseModel):
    """Response model for application submissions."""
    success: bool
    message: str


# Translation messages for responses
MESSAGES = {
    "en": {
        "entrepreneur_success": "Thank you. Your entrepreneur application has been received. We will contact you soon.",
        "student_success": "Thank you. Your student application has been received. We will contact you soon.",
        "validation_error": "Please check your form and correct the errors.",
        "submission_error": "Something went wrong while submitting your application. Please try again or contact the organizers.",
    },
    "ru": {
        "entrepreneur_success": "Спасибо. Ваша заявка предпринимателя получена. Мы скоро свяжемся с вами.",
        "student_success": "Спасибо. Ваша заявка школьника / студента получена. Мы скоро свяжемся с вами.",
        "validation_error": "Пожалуйста, проверьте форму и исправьте ошибки.",
        "submission_error": "Что-то пошло не так при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с организаторами.",
    }
}
