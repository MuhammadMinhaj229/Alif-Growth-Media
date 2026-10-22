# Alif Growth Media — Digital Operating Systems & Hybrid Tech Team Platform

[![Live Production](https://img.shields.io/badge/Live_Site-alif--growth.netlify.app-0f3830?style=for-the-badge&logo=netlify&logoColor=c99b3b)](https://alif-growth.netlify.app)
[![Framework](https://img.shields.io/badge/Framework-TanStack_Start_%2B_React_19-blue?style=flat-square)](https://tanstack.com/start)
[![Language](https://img.shields.io/badge/Language-TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Styling](https://img.shields.io/badge/Styling-TailwindCSS_v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Hosting-Netlify_Edge-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://alif-growth.netlify.app)

The official web platform and systems portfolio for **Alif Growth Media** — acting as the dedicated hybrid technical team and fractional CTO for retail businesses, supermarkets, fitness centers, and professional firms across Telangana and the Gulf.

---

## 💡 What Alif Growth Media Does

Most local businesses stay constrained by disconnected tools: static websites that require coding just to update prices, lost inquiries over WhatsApp, manual paper billing, and zero daily revenue visibility.

Alif Growth Media solves this by engineering custom, self-operating business software:
1. **Live Visual CMS:** Storefronts with embedded visual page editors so owners can update banners, announcements, and product listings in real time without writing code.
2. **WhatsApp CRM Hub:** Shared multi-agent chat inboxes with automated instant greetings, digital catalog delivery, and lead stage tracking.
3. **1-Tap Digital Invoicing:** Swift mobile bill generation sent directly to customer WhatsApp, tracking daily cash vs. UPI collection.
4. **Mobile Executive BI Dashboards:** A single mobile glass cockpit tracking customer visit histories, daily cash totals, and stock levels.

---

## 🏗️ Technical Architecture

This application is engineered with **TanStack Start**, the modern full-stack React framework powered by Vite and Nitro server engines.

```
Alif-Growth-Media/
├── alif-growth-media/               # Main application source
│   ├── src/
│   │   ├── components/
│   │   │   ├── motion/              # Scroll physics & interaction primitives
│   │   │   └── site/                # Modular UI components
│   │   │       ├── HybridTechTeamBanner.tsx      # Interactive team comparison cards
│   │   │       ├── IndustryMaturityShowcase.tsx  # Industry Before/After matrix
│   │   │       ├── InteractiveDemoSuite.tsx      # Live in-browser simulators
│   │   │       ├── Header.tsx                    # Mobile-responsive navigation drawer
│   │   │       └── CtaBand.tsx                   # Conversion & WhatsApp hotlines
│   │   ├── content/
│   │   │   └── site.ts              # Central business data & copy configuration
│   │   ├── routes/                  # TanStack File-based Routes
│   │   │   ├── index.tsx            # Homepage with interactive sandboxes
│   │   │   ├── services.tsx         # Full service specifications & deliverables
│   │   │   ├── work.index.tsx       # Prototype directory & platform catalogue
│   │   │   ├── contact.tsx          # Technical audit scheduler
│   │   │   └── about.tsx            # Company identity & operating methodology
│   ├── package.json
│   ├── vite.config.ts
│   └── netlify.toml
├── netlify.toml                     # Root Netlify build configuration
└── README.md
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js `v20.x` or `v22.x` (Node 22 recommended)
- npm `v10+`

### Installation
```bash
# 1. Clone repository
git clone https://github.com/MuhammadMinhaj229/Alif-Growth-Media.git
cd Alif-Growth-Media/alif-growth-media

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 How to Deploy

### Option A: Deploy to Netlify (Current Production)
The repository includes dedicated `netlify.toml` configurations for automated continuous deployment.

1. Push your changes to the `main` branch on GitHub.
2. Link the repository in the **Netlify Dashboard**:
   - **Base directory:** `alif-growth-media`
   - **Build command:** `npm run build`
   - **Publish directory:** `alif-growth-media/.output/public`
3. In Netlify Site Settings > **Build & Deploy** > **Environment variables**:
   - `NODE_VERSION` = `22`
4. Netlify will build the client and server assets, deploying to the global edge network within ~25 seconds.

### Option B: Deploy to Vercel
1. Import the repository into the **Vercel Dashboard**.
2. Set the **Root Directory** to `alif-growth-media`.
3. Framework Preset: **Other** / **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `.output/public`
6. Click **Deploy**.

---

## 🛡️ License & Author
Engineered with precision by **Mohammed Minhaj Mahmood** ([@MuhammadMinhaj229](https://github.com/MuhammadMinhaj229)).  
Copyright © 2026 Alif Growth Media. All rights reserved.
