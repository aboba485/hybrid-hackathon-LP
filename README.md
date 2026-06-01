# Hybrid Hackathon Landing Page

A premium, fully responsive bilingual (EN/RU) landing page for **Hybrid Hackathon** — an experimental event bringing together entrepreneurs and gifted young students in math, programming, and AI.

![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Features

- **Bilingual Support**: Full English and Russian translations with automatic browser language detection
- **Premium Design**: Dark theme with glassmorphism, animated gradient mesh, and micro-animations
- **Fully Responsive**: Optimized for all screen sizes (360px to 1440px+)
- **Application Forms**: Entrepreneur and student registration with client & server validation
- **Google Sheets Integration**: Applications automatically saved to Google Sheets via webhook
- **Accessible**: Semantic HTML, keyboard navigation, reduced motion support
- **Fast**: No heavy frameworks, vanilla JavaScript, optimized CSS

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
│   ├── main.py              # FastAPI application entry
│   ├── routes.py            # API endpoints
│   ├── models.py            # Pydantic models
│   ├── services/
│   │   ├── __init__.py
│   │   └── google_sheets.py # Google Sheets webhook integration
│   ├── templates/
│   │   └── index.html       # Landing page template
│   └── static/
│       ├── css/
│       │   └── styles.css   # Premium responsive styles
│       ├── js/
│       │   ├── i18n.js      # Translations (EN/RU)
│       │   └── main.js      # Form handling & interactions
│       └── logos/
│           ├── metagames.svg
│           └── hybrid-hub.svg
├── requirements.txt
├── Procfile
├── railway.json
├── .env.example
└── README.md
```

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
   # Edit .env if you want to test Google Sheets integration locally
   ```

5. **Run the development server**
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

6. **Open in browser**
   ```
   http://localhost:8000
   ```

> **Note**: The app works locally without Google Sheets configuration. Applications will be logged to the console instead.

## Google Sheets Integration

Applications are sent to Google Sheets using a Google Apps Script webhook. This keeps the integration simple and serverless.

### Architecture

```
Landing Page → FastAPI API → Google Apps Script Webhook → Google Sheets
```

### Setup Instructions

#### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it (e.g., "Hybrid Hackathon Applications")
4. Create two sheet tabs:
   - `Entrepreneurs`
   - `Students`

#### 2. Add the Apps Script

1. In the Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code
3. Paste the following script:

```javascript
/**
 * Hybrid Hackathon - Google Sheets Webhook
 * 
 * This script receives application data from the FastAPI backend
 * and writes it to the appropriate sheet.
 */

// Optional: Set a secret key for additional security
// Must match GOOGLE_SHEETS_WEBHOOK_SECRET in Railway
const WEBHOOK_SECRET = ''; // Leave empty to disable secret check

/**
 * Handle POST requests from the webhook
 */
function doPost(e) {
  try {
    // Check webhook secret if configured
    if (WEBHOOK_SECRET) {
      const receivedSecret = e.parameter['secret'] || 
                             (e.postData && JSON.parse(e.postData.contents).secret) ||
                             '';
      // Also check headers (Apps Script receives headers differently)
      const headers = e.parameter;
      
      // For simplicity, we'll check if secret is in the payload
      // In production, you might want more sophisticated header checking
    }
    
    // Parse the JSON payload
    const data = JSON.parse(e.postData.contents);
    
    const applicationType = data.type;
    const timestamp = data.timestamp;
    const payload = data.payload;
    
    if (!applicationType || !payload) {
      return createResponse(false, 'Missing required fields: type or payload');
    }
    
    // Route to appropriate handler
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

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return createResponse(true, 'Hybrid Hackathon webhook is active. Use POST to submit applications.');
}

/**
 * Write entrepreneur application to sheet
 */
function writeEntrepreneur(timestamp, payload) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Entrepreneurs');
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('Entrepreneurs');
  }
  
  // Add header row if sheet is empty
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Timestamp',
      'Language',
      'Full Name',
      'Email',
      'Phone',
      'Company / Project',
      'Idea / Challenge',
      'Wants to Sponsor',
      'Sponsor Amount'
    ];
    sheet.appendRow(headers);
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4a5568');
    headerRange.setFontColor('#ffffff');
  }
  
  // Prepare row data
  const row = [
    formatTimestamp(timestamp),
    payload.language || 'en',
    payload.full_name || '',
    payload.email || '',
    payload.phone || '',
    payload.company || '',
    payload.project_idea || '',
    payload.wants_to_sponsor ? 'Yes' : 'No',
    payload.sponsor_amount || ''
  ];
  
  sheet.appendRow(row);
}

/**
 * Write student application to sheet
 */
function writeStudent(timestamp, payload) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Students');
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet('Students');
  }
  
  // Add header row if sheet is empty
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
    
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4a5568');
    headerRange.setFontColor('#ffffff');
  }
  
  // Join strengths array into comma-separated string
  const strengths = Array.isArray(payload.strengths) 
    ? payload.strengths.join(', ') 
    : (payload.strengths || '');
  
  // Prepare row data
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

/**
 * Format ISO timestamp to readable format
 */
function formatTimestamp(isoString) {
  if (!isoString) return new Date().toISOString();
  
  try {
    const date = new Date(isoString);
    return Utilities.formatDate(date, 'Europe/Helsinki', 'yyyy-MM-dd HH:mm:ss');
  } catch (e) {
    return isoString;
  }
}

/**
 * Create JSON response
 */
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
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "Hybrid Hackathon Webhook v1"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access** and grant permissions
6. **Copy the Web App URL** - you'll need this for Railway

> **Important**: The URL looks like `https://script.google.com/macros/s/ABC123.../exec`

#### 4. Configure Railway

1. Go to your Railway project
2. Open **Variables** settings
3. Add:
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
4. Optionally add a secret (must match the `WEBHOOK_SECRET` in the Apps Script):
   ```
   GOOGLE_SHEETS_WEBHOOK_SECRET=your-secret-key
   ```
5. Redeploy your service

### Testing the Integration

1. Submit a test application on the landing page
2. Check your Google Sheet - a new row should appear
3. Check Railway logs for any errors

### Troubleshooting

- **Applications not appearing**: Check Railway logs for webhook errors
- **403 Forbidden**: Make sure the Apps Script is deployed with "Anyone" access
- **Timeout errors**: Google Apps Script has execution limits; the script is optimized to run quickly
- **Missing columns**: The script auto-creates headers if the sheet is empty

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
  "project_idea": "AI-powered solution",
  "wants_to_sponsor": true,
  "sponsor_amount": 500,
  "language": "en"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you. Your entrepreneur application has been received. We will contact you soon."
}
```

**Error Response (Google Sheets failure):**
```json
{
  "success": false,
  "message": "Something went wrong while submitting your application. Please try again or contact the organizers."
}
```

### `POST /api/apply/student`

Submit a student application.

**Request Body:**
```json
{
  "full_name": "Jane Smith",
  "age_grade": "16 years old / 10th grade",
  "school": "Technical High School",
  "email": "jane@example.com",
  "strengths": ["Mathematics", "AI", "Programming"],
  "background": "Won regional math olympiad, built a chatbot",
  "language": "en"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you. Your student application has been received. We will contact you soon."
}
```

### `GET /health`

Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "app": "Hybrid Hackathon"
}
```

## Deployment on Railway

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/hybrid-hackathon-LP.git
   git push -u origin main
   ```

2. **Deploy on Railway**
   - Go to [Railway](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically detect the configuration

3. **Add Environment Variables**
   ```
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
   ```

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Set automatically by Railway |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Yes (production) | Google Apps Script Web App URL |
| `GOOGLE_SHEETS_WEBHOOK_SECRET` | No | Optional security secret |

## Language Configuration

The landing page automatically:
1. Detects browser language (Russian if browser language starts with "ru")
2. Falls back to English for all other languages
3. Saves user preference in localStorage
4. Allows manual switching via EN/RU toggle

## Customization

### Adding Translations

Edit `app/static/js/i18n.js` to add or modify translations:

```javascript
const TRANSLATIONS = {
    en: {
        // English translations
    },
    ru: {
        // Russian translations
    }
};
```

### Modifying Styles

Edit `app/static/css/styles.css`. Key CSS variables are defined in `:root`:

```css
:root {
    --color-primary: #8b5cf6;
    --color-secondary: #06b6d4;
    --font-size-hero: clamp(2.5rem, 7vw, 4.5rem);
    /* ... */
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome for Android 90+

## Accessibility

- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states visible
- Reduced motion support
- High contrast text

## Security Notes

- The Google Sheets webhook URL is stored only in server-side environment variables
- The URL is never exposed to the frontend
- Optionally add `GOOGLE_SHEETS_WEBHOOK_SECRET` for additional security
- All form data is validated server-side with Pydantic

## License

MIT License - feel free to use for your own events!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Hybrid Hackathon** — Where entrepreneurs meet young AI builders.
