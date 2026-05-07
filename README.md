# Codri

> An AI-powered code reviewer built with the Gemini API, React, and Express.js — providing intelligent, context-aware feedback on your code in seconds.

 **Live Demo:** [codri-frontend.onrender.com](https://codri-frontend.onrender.com)

---

## What is Codri?

Codri is a full-stack web application that leverages Google's Gemini generative AI to review code submitted by users. Instead of waiting for manual peer reviews, developers can paste their code and instantly receive detailed, structured feedback powered by customizable AI system instructions and prompts. Whether you're debugging, optimizing, or learning best practices, Codri gives you an expert second opinion — on demand.

---

## Features

- **AI Code Review** — Paste any code snippet and get intelligent feedback powered by the Gemini API, covering correctness, efficiency, readability, and best practices
- **Customizable Review Prompts** — Control what the AI focuses on via configurable system instructions and prompts, letting you tailor the review for security audits, performance optimization, style checking, and more
- **Firebase Authentication** — Full auth system including email/password sign-up with email verification and a secure password reset flow
- **Google OAuth Login** — One-click sign-in with Google via Firebase Authentication
- **Protected Routes** — Only authenticated and verified users can access the review functionality
- **Rate Limiting** — Backend API is rate-limited to prevent abuse and ensure fair usage
- **Smooth Animations** — Fluid UI transitions and interactions powered by Framer Motion
- **Responsive Design** — Fully responsive interface built with Tailwind CSS, works seamlessly on desktop and mobile

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React | Component-based UI framework |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and page transitions |
| Firebase SDK | Auth (email/password + Google OAuth) |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express.js | REST API server |
| Google Gemini API | AI code review engine |
| Firebase Admin SDK | Server-side token verification |

---

## Project Structure

```
codri/
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level page components
│   │   ├── context/        # Auth context / state management
│   │   └── firebase.js     # Firebase config & initialization
│   └── package.json
│
├── backend/                # Express.js API server
│   ├── routes/             # API route handlers
│   ├── controllers/        # Business logic (Gemini integration)
│   ├── middleware/         # Auth verification middleware
│   └── server.js           # Entry point
│
└── package.json
```

---

## How It Works

1. **Sign up or log in** using your email or Google account
2. **Verify your email** (for email/password registration) to unlock full access
3. **Paste your code** into the editor on the review page
4. The frontend sends your code along with a system prompt to the Express backend
5. The backend authenticates your request via Firebase and calls the **Gemini API** with the configured system instructions
6. Gemini analyzes the code and returns detailed review feedback
7. The response is rendered back in the UI with formatting and highlights

---

## Authentication Flow

Codri uses Firebase Authentication for a secure, complete auth experience:

- **Sign Up** — Register with email and password; a verification email is sent automatically
- **Email Verification** — Users must verify their email before accessing review features
- **Login** — Email/password or Google OAuth one-click sign-in
- **Password Reset** — "Forgot password" flow sends a reset link via Firebase
- **Protected Routes** — Client-side route guards ensure unverified/unauthenticated users are redirected

---

## Environment Variables

| Variable | Location | Description |
|---|---|---|
| `GEMINI_API_KEY` | backend `.env` | Your Google Gemini API key |
| `PORT` | backend `.env` | Port for the Express server |
| `VITE_FIREBASE_*` | frontend `.env` | Firebase project config values |
| `VITE_BACKEND_URL` | frontend `.env` | URL of the backend API |

---

## Deployment

This project is deployed on [Render](https://render.com):

- **Frontend:** Static site deployment from the `/frontend` directory (`npm run build`)
- **Backend:** Web service from the `/backend` directory (`npm start`)

Make sure to set all environment variables in your Render service settings before deploying.

---

## Roadmap / Possible Improvements

- [ ] Syntax highlighting in the code input editor
- [ ] Support for multiple programming languages with language-specific review prompts
- [ ] Review history — save and revisit past reviews
- [ ] User-configurable system prompts saved per account
- [ ] Export review results as PDF or Markdown

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

> Built by [18yuv](https://github.com/18yuv) · Powered by Google Gemini AI