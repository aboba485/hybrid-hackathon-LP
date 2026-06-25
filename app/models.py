"""
Pydantic models for Hybrid Hackathon application forms.
"""

from typing import Literal, Optional, List
from pydantic import BaseModel, EmailStr, field_validator


class EntrepreneurApplication(BaseModel):
    """Model for entrepreneur application form."""
    full_name: str
    email: Optional[EmailStr] = None
    phone: str
    company: Optional[str] = None
    project_idea: Optional[str] = None
    participation_type: Literal["entrepreneur_250", "patron_500"] = "entrepreneur_250"
    consent_to_contact: bool
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
    def validate_company(cls, v: Optional[str]) -> Optional[str]:
        if v:
            return v.strip()
        return v

    @field_validator("consent_to_contact")
    @classmethod
    def validate_consent(cls, v: bool) -> bool:
        if not v:
            raise ValueError("Consent to contact is required")
        return v

    def get_contribution_amount(self) -> int:
        """Calculate contribution amount based on participation type."""
        if self.participation_type == "entrepreneur_250":
            return 250
        elif self.participation_type == "patron_500":
            return 500
        return 250


class StudentApplication(BaseModel):
    """
    Model for student application form.
    
    NOTE: Student applications are currently disabled on the landing page,
    but the endpoint is kept for potential future use.
    """
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
        "entrepreneur_success": "Thank you. Your application has been received. We will contact you soon.",
        "student_success": "Thank you. Your student application has been received. We will contact you soon.",
        "validation_error": "Please check your form and correct the errors.",
        "submission_error": "Something went wrong while submitting your application. Please try again or contact the organizers.",
        "consent_required": "You must agree to be contacted to submit the application.",
    },
    "ru": {
        "entrepreneur_success": "Спасибо. Ваша заявка получена. Мы скоро свяжемся с вами.",
        "student_success": "Спасибо. Ваша заявка школьника / студента получена. Мы скоро свяжемся с вами.",
        "validation_error": "Пожалуйста, проверьте форму и исправьте ошибки.",
        "submission_error": "Что-то пошло не так при отправке заявки. Пожалуйста, попробуйте еще раз или свяжитесь с организаторами.",
        "consent_required": "Необходимо согласие на связь для отправки заявки.",
    }
}
