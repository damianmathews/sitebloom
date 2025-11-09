# SiteBloom - Marketing Site

A production-ready marketing site for SiteBloom, selling simple, fast, lead-generating websites to local blue-collar and service businesses.

## Features

- **Netlify Forms** - Server-rendered contact forms with spam protection
- **Calendly Integration** - Inline and popup booking widgets
- **Plausible Analytics** - Privacy-friendly analytics (env-configurable)
- **LocalBusiness Schema** - Optional JSON-LD structured data
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation
- **Performance** - Optimized for mobile with target LCP ~2.5s
- **Responsive Design** - Mobile-first with clean, trustworthy aesthetics

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: TailwindCSS v4 + shadcn/ui
- **Motion**: Framer Motion with reduced-motion support
- **Icons**: lucide-react
- **Deployment**: Netlify with zero manual configuration

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

### 3. Update Site Configuration

Edit `/content/config.json` with your business information:

```json
{
  "siteName": "Your Business Name",
  "phone": "(555) 123-4567",
  "email": "hello@yourbusiness.com"
}
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
```

## Deployment to Netlify

### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will auto-detect Next.js settings from `netlify.toml`
6. Set environment variables in Netlify UI
7. Click "Deploy"

### Option 2: Deploy via Netlify CLI

```bash
netlify deploy --prod
```

## Netlify Forms Setup

Forms work automatically on Netlify when they include:
- `data-netlify="true"` attribute
- `name` attribute
- Hidden input with `name="form-name"`

The contact form is already configured correctly. After deployment, check your Netlify dashboard under "Forms" to verify detection.

## Content Management

All content is in `/content/` JSON files:
- **config.json** - Site configuration
- **pricing.json** - Pricing tiers
- **copy.json** - Marketing copy

Edit these files and redeploy to update content.

## Customization

### Brand Colors

Edit `/lib/brand-tokens.ts` and `/app/globals.css` to customize colors, typography, and motion.

### Adding Pages

1. Create folder in `/app/`
2. Add `page.tsx`
3. Update navigation in `/components/header.tsx`

## Accessibility

Follows WCAG 2.1 Level AA:
- Semantic HTML
- Keyboard navigation
- Skip links
- Respects prefers-reduced-motion
- 4.5:1 color contrast

## Legal Placeholders

⚠️ **The Terms and Privacy pages contain placeholder text. Have them reviewed by an attorney before launch.**

## Project Structure

```
sitebloom/
├── app/              # Pages (Next.js App Router)
├── components/       # React components
├── content/          # JSON content files
├── lib/              # Utilities & design tokens
├── netlify.toml      # Netlify config
└── .env.example      # Environment template
```

## Support

- [Netlify Forms Docs](https://docs.netlify.com/forms/setup/)
- [Calendly Developer Docs](https://developer.calendly.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Next.js Docs](https://nextjs.org/docs)
