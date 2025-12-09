# Deploying to Netlify with Forms

This guide explains how to deploy SiteBloom to Netlify with working contact forms.

## Quick Deploy

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Netlify Forms Setup

### How Forms Work

This site uses Netlify Forms for contact form submissions. The setup includes:

1. **Static HTML Form** (`/public/forms.html`)
   - Hidden form that Netlify detects at build time
   - Required for static exports from Next.js
   - Contains all form fields with exact field names

2. **React Form Component** (`/components/lead-form.tsx`)
   - User-facing form with styling
   - Matches field names from static HTML form
   - Includes required Netlify attributes:
     - `data-netlify="true"`
     - `name="contact"` attribute
     - Hidden input: `<input type="hidden" name="form-name" value="contact" />`
     - Honeypot field for spam protection

### Verifying Forms Are Detected

After deploying:

1. Go to your Netlify site dashboard
2. Click on "Forms" in the left sidebar
3. You should see "contact" form listed
4. If not listed, check the deploy log for form detection messages

### Testing Forms

**Test in Production (Recommended):**
Forms only work on the actual Netlify deployment, not in local development.

1. Deploy to Netlify
2. Visit your site's contact page
3. Fill out and submit the form
4. Check Netlify dashboard → Forms for the submission
5. You should be redirected to `/thanks/` page

**Common Issues:**

❌ **Form submissions return 404**
- Ensure `action="/thanks/"` matches your thanks page route
- Check that trailing slashes are enabled in `next.config.ts`

❌ **Forms not detected by Netlify**
- Verify `/public/forms.html` exists
- Check field names match exactly between static HTML and React form
- Look for form detection in Netlify build logs

❌ **"Form name not found" error**
- Ensure hidden input `<input type="hidden" name="form-name" value="contact" />` is present
- Verify form `name` attribute matches: `name="contact"`

### Email Notifications

To receive email notifications when forms are submitted:

1. Go to Netlify dashboard → Forms
2. Click on "Settings and Usage"
3. Click "Form notifications"
4. Click "Add notification" → "Email notification"
5. Enter your email address
6. Save

### Spam Protection

The form includes:

- **Honeypot field**: Hidden field that bots fill out
- **Netlify's built-in spam detection**: Automatically filters obvious spam
- **reCAPTCHA (optional)**: Can be enabled in Netlify dashboard

To enable reCAPTCHA:
1. Go to Site settings → Forms
2. Enable "reCAPTCHA 2"
3. Add your site key (Netlify provides one automatically)

## Environment Variables

If you have environment variables:

1. Go to Site settings → Environment variables
2. Add your variables:
   - `NEXT_PUBLIC_CALENDLY_URL`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
   - etc.

## Custom Domain

1. Go to Domain settings
2. Click "Add custom domain"
3. Follow instructions to update DNS
4. SSL certificate is automatically provisioned

## Build Settings (Already Configured)

The `netlify.toml` file includes:
- Build command: `npm run build`
- Publish directory: `out`
- Node version: 20
- Form processing: enabled
- Security headers
- Cache settings

## Troubleshooting

### Forms Not Working

1. **Check build logs** for form detection messages
2. **Verify static form** exists at `/public/forms.html`
3. **Test in production** (forms don't work locally)
4. **Check field names** match exactly between static and React forms
5. **Verify attributes**:
   - `data-netlify="true"`
   - `name="contact"`
   - Hidden input with `name="form-name"`

### Slow Build Times

- Check if dependencies are cached
- Review build logs for unnecessary operations
- Consider upgrading Netlify plan for faster builds

### 404 on Routes

- Ensure `trailingSlash: true` in `next.config.ts`
- Check that dynamic routes have `generateStaticParams()`
- Verify `output: 'export'` is set

## Support

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Netlify Support](https://www.netlify.com/support/)
