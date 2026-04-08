# Quick EmailJS Setup Guide

## Step 1: Create EmailJS Account (2 minutes)
1. Go to: https://www.emailjs.com/
2. Click "Sign Up" 
3. Use your email: sales@aspglobalmarine.com
4. Verify your email

## Step 2: Create Email Service (3 minutes)
1. Login to EmailJS dashboard
2. Click "Email Services" (left menu)
3. Click "Add New Service"
4. Select "Gmail" (or your email provider)
5. Connect your email account
6. **Copy your Service ID** (looks like: service_abc123def)

## Step 3: Create Email Template (5 minutes)
1. Click "Email Templates" (left menu)
2. Click "Create New Template"
3. Fill in:
   - **Template Name:** ASP Marine Contact Form
   - **Subject:** New Inquiry: {{subject}}
   - **To Email:** sales@aspglobalmarine.com
   - **Content:** (copy from below)

4. **Copy your Template ID** (looks like: template_xyz789uvw)

## Step 4: Get Public Key (1 minute)
1. Click "Account" → "API Keys"
2. **Copy your Public Key** (looks like: abc123def456ghi789jkl012mno345)

## Step 5: Update Your Code
Replace the example values in `src/components/Contact.jsx`:

```javascript
// FIND THESE LINES:
const serviceId = "service_7h3x9k8";
const templateId = "template_8j2k5l9";  
const publicKey = "7H3X9K8J2L5M9N1P";

// REPLACE WITH YOUR ACTUAL VALUES:
const serviceId = "service_YOUR_ACTUAL_ID";
const templateId = "template_YOUR_ACTUAL_ID";  
const publicKey = "YOUR_ACTUAL_PUBLIC_KEY";
```

## Email Template Content
Copy this into your EmailJS template:

```
You have received a new inquiry from ASP Global Marine website.

CONTACT DETAILS:
-----------------
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Urgency Level: {{urgency}}

INQUIRY DETAILS:
---------------
Subject: {{subject}}
Message: {{message}}

---
This message was sent from the ASP Global Marine Trading website.
Reply directly to: {{from_email}}
```

## Test Your Form
1. Start your server: npm start
2. Go to: http://localhost:3001/contact
3. Fill out the form
4. Check sales@aspglobalmarine.com for the email

## Troubleshooting
- **No email received?** Check spam folder
- **Error in console?** Verify all three IDs are correct
- **Still not working?** Make sure EmailJS service is active

---
**Total setup time: ~10 minutes**
