
# ANRG Portfolio

A custom-built, animated portfolio site built from scratch using **Next.js**, **Tailwind CSS**, **Framer Motion**, and deployed with **Vercel** using a custom domain: [anrg.pro](https://www.anrg.pro)

## Overview

This portfolio showcases my work as a data engineer and analytics professional, featuring custom page transitions, responsive design, interactive elements, and external integrations (e.g., EmailJS).

---

## Tech Stack

- [Next.js 13+](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/) (for contact form)
- [Vercel](https://vercel.com/) (hosting)
- [Namecheap](https://www.namecheap.com/) (custom domain)

---

## File Structure

```
.
├── app/                # Pages and layout structure
├── components/         # Navbar, Footer, Brain animation, etc.
├── public/             # Static assets (images, resume.pdf)
├── styles/             # globals.css with Tailwind + custom styles
├── .env.local          # Environment variables for EmailJS
└── next.config.mjs     # Next.js config
```

---

## Setup Instructions

### 1. Create the Repo

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_SERVICE_ID="your_emailjs_service_id"
NEXT_PUBLIC_TEMPLATE_ID="your_emailjs_template_id"
NEXT_PUBLIC_PUBLIC_KEY="your_emailjs_public_key"
```

---

## Local Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment (Vercel + Custom Domain)

### 1. Push to GitHub

```bash
git init
git remote add origin https://github.com/anrg-bot/anrg-portfolio.git
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

### 2. Deploy on Vercel

- Go to [vercel.com](https://vercel.com) and import your GitHub repo.
- Set environment variables under **Project Settings > Environment Variables**
- Build should trigger automatically after pushing to `main`.

### 3. Custom Domain Setup (e.g., `anrg.pro`)

On Vercel:

- Go to **Settings > Domains** → Add `www.anrg.pro`
- Follow the DNS instructions:
  - Add an `A` Record: `@ → 76.76.21.21`
  - Add a `CNAME` Record: `www → cname.vercel-dns.com.`
- Wait for DNS to propagate (~10 mins)
- Set up redirect to ensure `www.anrg.pro` routes properly

---

## Contact Form Setup

Uses [EmailJS](https://emailjs.com) to send form submissions directly to your email.

1. Create an EmailJS account
2. Add a service (e.g., Gmail)
3. Create a template with `user_email` and `user_message` variables
4. Paste the generated service ID, template ID, and public key into `.env.local`

---

## Live Demo

[https://www.anrg.pro](https://www.anrg.pro)

---

## Credits

Inspired by Lama Dev.

---