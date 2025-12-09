# Email Setup for Lead Magnets

The lead magnet forms (e.g., Website Checklist) are connected to Netlify Forms but **do not automatically send PDF emails yet**. Here's how to set that up.

## Current State

✅ **What Works:**
- Form submissions are captured in Netlify dashboard
- User sees the checklist on-screen immediately
- Email addresses are collected in Netlify Forms

❌ **What Doesn't Work Yet:**
- Automatic PDF email delivery
- Email list integration (Mailchimp, ConvertKit, etc.)

## Option 1: Manual Process (Free, Immediate)

### How It Works:
1. User submits email on `/resources/website-checklist`
2. Submission appears in Netlify dashboard → Forms
3. You receive notification email (if configured)
4. You manually email them the PDF

### Setup:
1. **Enable Netlify Email Notifications:**
   - Netlify dashboard → Forms → Settings
   - Add notification → Email notification
   - Enter your email
   - Select form: `resource-download`

2. **When You Get Notified:**
   - Open the submission in Netlify
   - Copy user's email address
   - Send them the PDF manually

**Pros:** Free, works immediately, no setup
**Cons:** Manual work for each submission

---

## Option 2: Zapier Automation (Recommended)

### How It Works:
Zapier connects Netlify Forms → Email Service → Send PDF automatically

### Setup Steps:

1. **Create Zapier Account** (free tier: 100 tasks/month)
   - Go to [zapier.com](https://zapier.com)
   - Sign up (free plan is fine)

2. **Create New Zap:**
   - Trigger: Netlify Form Submission
   - Select form: `resource-download`
   - Filter: Only when `resource = "website-checklist"`

3. **Add Action - Send Email:**

   **Option A: Direct Email (Gmail/Outlook)**
   - Action: Gmail/Outlook → Send Email
   - To: `{{email}}` (from form submission)
   - Subject: "Your Free Website Checklist for Contractors"
   - Body: Include link to PDF (see below)
   - Attach PDF file

   **Option B: Email Service (Better for scaling)**
   - Action: Mailchimp/ConvertKit → Add Subscriber
   - Tag: "website-checklist"
   - Trigger welcome email with PDF link

4. **Upload PDF Somewhere:**
   - Google Drive (public link)
   - Dropbox (public link)
   - Or host on your site at `/downloads/website-checklist.pdf`

**Pros:** Fully automated, professional, scalable
**Cons:** $20/month after 100 submissions (or use email service)

---

## Option 3: Email Service Integration (Best for Growth)

### Recommended Services:
- **Mailchimp** (Free up to 500 contacts)
- **ConvertKit** (Free up to 1,000 subscribers)
- **MailerLite** (Free up to 1,000 subscribers)

### How It Works:
1. User submits form
2. Zapier adds them to email list with tag
3. Automated welcome email sends PDF
4. You can nurture them with more emails

### Setup:

1. **Choose Email Service** and create account

2. **Create Welcome Automation:**
   - Trigger: New subscriber with tag "website-checklist"
   - Email 1: Send PDF immediately
   - Email 2: (Optional) Follow-up 2 days later
   - Email 3: (Optional) Pitch your service 1 week later

3. **Upload PDF to Email Service:**
   - Most services let you attach files to emails
   - Or host it and include download link

4. **Connect via Zapier:**
   - Trigger: Netlify Form
   - Action: Add to Mailchimp/ConvertKit with tag

**Pros:** Best for building an email list, nurture sequences, grow business
**Cons:** Requires more setup, learning curve

---

## Option 4: Netlify Functions (Most Technical)

### How It Works:
Write a serverless function that:
1. Triggers on form submission
2. Sends email via SendGrid/Mailgun
3. Fully custom

### Setup:
Requires coding. Not recommended unless you're technical.

---

## Quick Start: What To Do Right Now

### Step 1: Manual Process (Today)
1. Deploy your site to Netlify
2. Go to Forms → Settings → Notifications
3. Add your email
4. When someone submits, email them manually

### Step 2: Zapier Automation (This Week)
1. Sign up for Zapier free
2. Connect Netlify → Gmail
3. Auto-send emails

### Step 3: Email Service (Next Month)
1. As you get more leads, move to Mailchimp/ConvertKit
2. Build email sequences
3. Grow your list

---

## Creating the PDF

The checklist currently shows on-screen. To create a PDF:

### Option 1: Use the Print Function
- Visit `/resources/website-checklist`
- Submit the form
- Click "Print Checklist" button
- Save as PDF instead of printing
- This is the PDF you'll email to people

### Option 2: Design a Better PDF
- Use Canva (free)
- Create branded PDF with your logo
- Include the checklist items
- Add call-to-action at the end
- Export as PDF

---

## Sample Email Template

```
Subject: Your Free Website Checklist for Contractors

Hi there!

Thanks for downloading the Complete Website Checklist for Contractors!

[ATTACH OR LINK TO PDF]

This 15-point checklist will help you ensure your website has everything it needs to turn visitors into paying customers.

Here's what's inside:
✓ First Impressions (4 critical items)
✓ Mobile Experience (4 must-haves)
✓ Contact & Conversion (4 essentials)
✓ Content & Trust (4 trust signals)
✓ Technical Basics (5 checklist items)

Have questions? Just reply to this email - I read every one.

Cheers,
[Your Name]
SiteBloom

P.S. If you want us to build you a website that checks every box on this list, reply with "interested" and let's chat. We deliver in 48 hours for $299.
```

---

## Summary

**Right Now:** Forms work but you'll email PDFs manually
**This Week:** Set up Zapier for automation
**Next Month:** Move to email service for list building

The forms are configured correctly - you just need to choose how you want to handle the email delivery!
