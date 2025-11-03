# 🧓 TechGuide

**TechGuide** is a simple, senior-friendly platform that helps older adults confidently learn and use modern technology. From email and video calls to social media and online shopping, TechGuide offers **clear, step-by-step tutorials** and **personalized support** — free of jargon and frustration.

But TechGuide isn’t just about using technology — it’s about using it safely. With built-in **scam detection tips**, **real-time alerts**, and **interactive lessons** on spotting fraud, users learn how to protect themselves online.  
TechGuide empowers seniors to stay **connected, independent, and secure** in the digital world.

---

## 📋 Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Team Roles](#team-roles)  
4. [Tech Stack](#tech-stack)  
5. [Project Setup](#project-setup)
6. [Testing](#testing)  

---

## 🧭 Overview
TechGuide’s mission is to bridge the digital divide by making technology education accessible, safe, and enjoyable for seniors. Through interactive lessons, guided walkthroughs, and security-focused learning modules, TechGuide helps users gain the confidence to explore modern tools and platforms at their own pace.

---

## ✨ Features
- **Step-by-Step Tutorials** — Easy-to-follow guides for common tech tasks (email, Zoom, online shopping, etc.)  
- **Interactive Learning** — Quizzes and video demonstrations for hands-on practice  
- **Safety Center** — Tips and alerts for detecting scams and fraud  
- **Personalized Experience** — Tracks progress and recommends next lessons  
- **Accessibility-First Design** — Large fonts, voice narration, and simplified navigation  

---

## 👥 Team Roles

| Name | Role | Responsibilities |
|------|------|------------------|
| **Rezaul** | Project Manager | Oversees project scope, timelines, and communication across the team. Ensures deliverables align with class objectives. |
| **Misael** | Infrastructure Engineer | Manages deployment, hosting setup, and configuration of Supabase backend. Handles environment setup and scalability. |
| **Kyle** | Full Stack Engineer | Develops front-end and back-end integration with Supabase APIs. Implements key application logic and authentication flow. |
| **Xin** | QA / Testing Automation Engineer | Builds and runs testing suites to ensure functionality, reliability, and accessibility. Oversees bug tracking and quality assurance. |
| **Munjer** | UI / UX Engineer | Designs intuitive, accessible interfaces using Figma. Conducts user-flow testing and refines layouts for senior-friendly usability. |
| **Timson** | Full Stack Engineer | Collaborates on both front-end and back-end development. Focuses on feature implementation, debugging, and integration testing. |
| **Mamuna** | Full Stack Engineer | Develops and maintains both front-end and back-end features, ensuring smooth application flow through testing, and seamless integration of core functionalities. |

---

## 🧰 Tech Stack

### Frontend
- **Framework:** React (via Vite)
- **Language:** JavaScript (ES6+)
- **UI Design:** Figma

### Backend / Database
- **Database:** Supabase (PostgreSQL backend with real-time APIs)
- **API Layer:** Supabase client for CRUD operations and authentication

### Authentication
- **Provider:** Supabase Auth (email, OAuth, and optional MFA)

### Hosting
- **Frontend Hosting:** *(TBD)* 
- **Database Hosting:** Managed via Supabase Cloud

### Testing
- **Unit/Integration Testing:** Vitest
- **E2E Testing:** Playwright
- **Test Runner:** npm test (unit/integration), npm run test:e2e (browser tests)
- **Coverage Reporting:** Vitest coverage 

---

## ⚙️ Project Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Supabase account
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/Timmer-1/TechGuide.git

# Navigate into the project
cd techguide

# Install dependencies
npm install

# Install Playwright browsers (for E2E testing)
npx playwright install

# Start development server
npm run dev
```

---

## Testing

TechGuide uses automated testing to ensure reliability and quality.

### Running Tests
```bash
# Run unit and integration tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run end-to-end browser tests
npm run test:e2e

# Run E2E tests with visual UI
npm run test:e2e:ui

# View last E2E test report
npx playwright show-report
```

### Test Structure
```
tests/
├── e2e/           # End-to-end browser tests (Playwright)
├── integration/   # Integration tests (API, health checks)
└── unit/          # Unit tests (components, functions)
```

### Health Monitoring
```bash
# Check server health and latency
npm test healthcheck
```

For detailed testing documentation, see [QA_SETUP_SUMMARY.md](QA_SETUP_SUMMARY.md).