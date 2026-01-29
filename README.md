# UBreakIFix Dashboard

A responsive AI-powered call center dashboard built with React, TypeScript, and Tailwind CSS.

## Installation

### Prerequisites
- Node.js 16+

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Folder Structure

```
ubreakfix-dashboard/
├── assets/
│   └── Logo.png
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── CallTrendsChart.tsx
│   │   │   ├── RecentActivity.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   └── TopRepairRequests.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── AppointmentsPage.tsx
│   │   ├── CallLogsPage.tsx
│   │   ├── DashboardOverview.tsx
│   │   └── SettingsPage.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Features

- Dashboard with real-time statistics
- Call logs with filtering and search
- Appointment management
- User settings and profile management
- Fully responsive design

