## Getting Started

### Prerequisites

- Node.js v18+
- A [Google Gemini API key](https://makersuite.google.com/app/apikey)
- A [Firebase project](https://console.firebase.google.com/) with Email/Password and Google sign-in enabled

### 1. Clone the repository

```bash
git clone https://github.com/18yuv/codri.git
cd codri
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
```

Start the backend server:

```bash
npm start
```

### 3. Set up the Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_URL=http://localhost:5000
```

Start the frontend dev server:

```bash
npm run dev
```

The app will be running at `http://localhost:5173`.

---