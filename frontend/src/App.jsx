import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import LoginPage from "./pages/Login.jsx"
import SignupPage from "./pages/Signup.jsx"
import ProtectedRoute from "./components/protectedRoute.jsx";


function App() {

  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App