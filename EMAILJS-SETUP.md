# EmailJS Setup Guide for ASP Global Marine

## Overview

Your contact form is now configured to automatically send emails to `sales@aspglobalmarine.com` using EmailJS service.

## Setup Instructions

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and authorize EmailJS
5. Note your **Service ID** (looks like: `service_xxxxxxxxx`)

### 3. Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** ASP Marine Contact Form
**Subject:** New Inquiry: {{subject}}
**To Email:** sales@aspglobalmarine.com

**Email Content:**

```
You have received a new inquiry from ASP Global Marine Trading website.

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

ATTACHMENTS:
------------
Trading List: {{tradingList}}
VAT Certificate: {{vatCertificate}}
Enquiry Attachment: {{enquiryAttachment}}

---
This message was sent from the ASP Global Marine Trading website contact form.
Reply directly to: {{from_email}}

Note: File attachments are handled separately. Please check your email or contact the sender for the actual files.
```

4. Save the template and note your **Template ID** (looks like: `template_xxxxxxxxx`)

### 4. Get Public Key

1. Go to **Account** → **API Keys** in EmailJS dashboard
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

### 5. Update Your Code

Replace the placeholder values in `src/components/Contact.jsx` with your actual EmailJS credentials:

```javascript
const serviceId = "service_your_actual_service_id";
const templateId = "template_your_actual_template_id";
const publicKey = "your_actual_public_key_from_emailjs";
```

### 6. Test Your Form

1. Start your development server: `npm start`
2. Go to the Contact page
3. Fill out the form with test data
4. Submit and check if you receive the email at `sales@aspglobalmarine.com`

## Important Notes

### Security

- Your Public Key is safe to expose in frontend code
- Never share your Private Key
- EmailJS free tier has 200 emails/month limit

### Email Deliverability

- Add `no-reply@emailjs.com` to your email contacts to avoid spam folder
- Check your spam/junk folder if emails don't arrive
- Consider upgrading to EmailJS paid plan for higher volume

### Customization

You can modify the email template in EmailJS dashboard to include:

- Company branding
- Additional fields
- Different formatting
- Auto-responders to customers

## Troubleshooting

### Common Issues

1. **Email not received**: Check spam folder, verify EmailJS service is active
2. **Form submission error**: Verify all three IDs are correctly entered
3. **Rate limiting**: EmailJS free tier has limits, consider upgrading

### Error Messages

- "Failed to send message": Check console for detailed error
- "Email service responded with error": Verify template and service configuration

## Alternative Configuration

If you prefer not to use EmailJS, you can also:

1. Use Netlify Forms (requires Netlify hosting)
2. Set up a backend server with Nodemailer
3. Use Formspree or similar form services

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- ASP Global Marine Support: Contact your development team

---

_This setup ensures all contact form submissions are automatically emailed to sales@aspglobalmarine.com_
