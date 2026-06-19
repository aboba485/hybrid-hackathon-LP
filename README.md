# Hybrid Lab Landing Page

A premium, brutalist-style bilingual (EN/RU) landing page for **Hybrid Lab** — a 1.5-day AI-building sprint for entrepreneurs.

![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Features

- **Bilingual Support**: Full English and Russian translations with automatic browser language detection
- **Brutalist Design**: Black/white/grayscale Swiss-style aesthetic with strong typography
- **Fully Responsive**: Optimized for all screen sizes (360px to 1440px+)
- **Entrepreneur Application Form**: With participation type selection (Entrepreneur/Patron)
- **Google Sheets Integration**: Applications automatically saved via webhook
- **Accessible**: Semantic HTML, keyboard navigation, reduced motion support

## Tech Stack

- **Backend**: Python 3.11+, FastAPI, Uvicorn
- **Templates**: Jinja2
- **Frontend**: HTML5, CSS3 (custom), Vanilla JavaScript
- **Integration**: Google Apps Script webhook → Google Sheets
- **Deployment**: Railway-ready

## Project Structure

```
hybrid-hackathon-LP/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── routes.py
│   ├── models.py
│   ├── services/
│   │   ├── __init__.py
│   │   └── google_sheets.py
│   ├── templates/
│   │   └── index.html
│   └── static/
│       ├── css/
│       │   └── styles.css
│       ├── js/
│       │   ├── i18n.js
│       │   └── main.js
│       ├── logos/
│       │   ├── dodo-pizza.jpg
│       │   ├── metagames.png
│       │   └── hybrid-lab.png
│       └── people/
│           ├── kirill-krinkin.jpg
│           ├── evgeny-tarasov.jpg
│           ├── claude-ai.png
│           ├── timur-atnashev.jpg
│           └── ekaterina-astafieva.jpg
├── requirements.txt
├── Procfile
├── railway.json
├── .env.example
└── README.md
```

## Replacing Logos

Put your actual logo files here:

- **Dodo Pizza**: `app/static/logos/dodo-pizza.svg` or `.jpg`/`.png`
- **MetaGames**: `app/static/logos/metagames.svg` or `.png`
- **Hybrid Lab**: `app/static/logos/hybrid-lab.svg` or `.png`

**Recommended format**: SVG with transparent background  
**Recommended max height**: 48-64px

If using different file extensions, update the image paths in `index.html`.

## Replacing People Photos

Put photos here:

- `app/static/people/kirill-krinkin.jpg`
- `app/static/people/evgeny-tarasov.jpg`
- `app/static/people/claude-ai.png`
- `app/static/people/timur-atnashev.jpg`
- `app/static/people/ekaterina-astafieva.jpg`

**Recommended format**: JPG or PNG, square crop, at least 600x600px.

If a photo is missing, a monochrome initials placeholder will be displayed automatically.

## Local Development

### Prerequisites

- Python 3.11 or higher
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hybrid-hackathon-LP.git
   cd hybrid-hackathon-LP
   ```

2. **Create a virtual environment**
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables** (optional for local dev)
   ```bash
   cp .env.example .env
   ```

5. **Run the development server**
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

6. **Open in browser**
   ```
   http://localhost:8000
   ```

> **Note**: The app works locally without Google Sheets configuration. Applications will be logged to the console.

## Google Sheets Integration

Applications are sent to Google Sheets using a Google Apps Script webhook.

### Architecture

```
Landing Page → FastAPI API → Google Apps Script Webhook → Google Sheets
```

### Setup Instructions

#### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it (e.g., "Hybrid Lab Applications")
4. Create sheet tab: `Entrepreneurs`

#### 2. Add the Apps Script

1. In the Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste the following script:

```javascript
/**
 * Hybrid Lab - Google Sheets Webhook
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    const applicationType = data.type;
    const timestamp = data.timestamp;
    const payload = data.payload;
    
    if (!applicationType || !payload) {
      return createResponse(false, 'Missing required fields: type or payload');
    }
    
    if (applicationType === 'entrepreneur') {
      writeEntrepreneur(timestamp, payload);
    } else if (applicationType === 'student') {
      writeStudent(timestamp, payload);
    } else {
      return createResponse(false, 'Unknown application type: ' + applicationType);
    }
    
    return createResponse(true, 'Application saved successfully');
    
  } catch (error) {
    console.error('Webhook error:', error);
    return createResponse(false, 'Server error: ' + error.message);
  }
}

function doGet(e) {
  return createResponse(true, 'Hybrid Lab webhook is active. Use POST to submit applications.');
}

function writeEntrepreneur(timestamp, payload) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Entrepreneurs');
  
  if (!sheet) {
    sheet = ss.insertSheet('Entrepreneurs');
  }
  
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp',
      'Language',
      'Full Name',
      'Email',
      'Phone',
      'Company / Project',
      'Idea / Challenge',
      'Participation Type',
      'Contribution Amount',
      'Consent To Contact'
    ];
    sheet.appendRow(headers);
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#262626');
    headerRange.setFontColor('#ffffff');
  }
  
  let participationType = payload.participation_type || 'entrepreneur_250';
  let contributionAmount = payload.contribution_amount || 250;
  
  if (participationType === 'entrepreneur_250') {
    participationType = 'Entrepreneur';
    contributionAmount = 250;
  } else if (participationType === 'patron_500') {
    participationType = 'Patron';
    contributionAmount = 500;
  }
  
  const row = [
    formatTimestamp(timestamp),
    payload.language || 'en',
    payload.full_name || '',
    payload.email || '',
    payload.phone || '',
    payload.company || '',
    payload.project_idea || '',
    participationType,
    contributionAmount + ' €',
    payload.consent_to_contact ? 'Yes' : 'No'
  ];
  
  sheet.appendRow(row);
}

function writeStudent(timestamp, payload) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Students');
  
  if (!sheet) {
    sheet = ss.insertSheet('Students');
  }
  
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp',
      'Language',
      'Full Name',
      'Email',
      'Age / Grade',
      'School / University',
      'Strengths',
      'Background'
    ];
    sheet.appendRow(headers);
    
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#262626');
    headerRange.setFontColor('#ffffff');
  }
  
  const strengths = Array.isArray(payload.strengths) 
    ? payload.strengths.join(', ') 
    : (payload.strengths || '');
  
  const row = [
    formatTimestamp(timestamp),
    payload.language || 'en',
    payload.full_name || '',
    payload.email || '',
    payload.age_grade || '',
    payload.school || '',
    strengths,
    payload.background || ''
  ];
  
  sheet.appendRow(row);
}

function formatTimestamp(isoString) {
  if (!isoString) return new Date().toISOString();
  
  try {
    const date = new Date(isoString);
    return Utilities.formatDate(date, 'Europe/Nicosia', 'yyyy-MM-dd HH:mm:ss');
  } catch (e) {
    return isoString;
  }
}

function createResponse(success, message) {
  const response = {
    success: success,
    message: message
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}
```

#### 3. Deploy the Apps Script

1. Click **Deploy → New deployment**
2. Click the gear icon and choose **Web app**
3. Configure:
   - **Description**: "Hybrid Lab Webhook v1"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access** and grant permissions
6. **Copy the Web App URL**

#### 4. Configure Railway

1. Go to your Railway project
2. Open **Variables** settings
3. Add:
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
4. Redeploy your service

### Expected Google Sheets Columns

**Entrepreneurs sheet:**
| Column | Description |
|--------|-------------|
| Timestamp | When the application was submitted |
| Language | en or ru |
| Full Name | Applicant's full name |
| Email | Contact email |
| Phone | Contact phone |
| Company / Project | Company or project name |
| Idea / Challenge | What they want to explore |
| Participation Type | Entrepreneur or Patron |
| Contribution Amount | 250 € or 500 € |
| Consent To Contact | Yes or No |

## API Endpoints

### `POST /api/apply/entrepreneur`

Submit an entrepreneur application.

**Request Body:**
```json
{
  "full_name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "TechStartup Inc.",
  "project_idea": "AI-powered workflow automation",
  "participation_type": "entrepreneur_250",
  "consent_to_contact": true,
  "language": "en"
}
```

**Participation Types:**
- `entrepreneur_250` — Entrepreneur (250 €)
- `patron_500` — Patron (500 €)

### `GET /health`

Health check endpoint.

## Deployment on Railway

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Update landing page"
   git push
   ```

2. **Deploy on Railway**
   - Connect your GitHub repo
   - Railway auto-detects the configuration

3. **Add Environment Variables**
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
   ```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Set automatically by Railway |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Yes (production) | Google Apps Script Web App URL |

## Language Configuration

The landing page automatically:
1. Detects browser language (Russian if starts with "ru")
2. Falls back to English
3. Saves preference in localStorage
4. Allows manual switching via EN/RU toggle

## Security Notes

- Google Sheets webhook URL is stored only in server-side environment variables
- Contribution amounts are calculated server-side
- All form data is validated server-side with Pydantic

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome for Android 90+

## License

MIT License

---

**Hybrid Lab** — Build the AI project you were afraid to start.
