import { useState } from "react";
import login from "../controllers/loginController.js";
import googleLogin from "../controllers/googleLogin.js";
import resetPassword from "../controllers/forgotPassword.js";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import AuthNavbar from "../components/Navbar.jsx";

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(form.email, form.password);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await googleLogin();
      navigate("/dashboard");
    } catch {
      toast.error("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!form.email) {
      return toast.error("Enter your email first");
    }
    try {
      await resetPassword(form.email);
      toast.success("Password reset email sent!");
    } catch {
      toast.error("Failed to send reset email");
    }
  };

const handleError = (err) => {
  switch (err.code) {
    case "auth/user-not-found":
      toast.error("User not found");
      break;
    case "auth/wrong-password":
      toast.error("Incorrect password");
      break;
    case "auth/invalid-email":
      toast.error("Invalid email");
      break;

    case "EMAIL_NOT_VERIFIED":
      toast.error("Please verify your email first");
      break;

    default:
      toast.error("Login failed");
  }
};

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      <AuthNavbar type="login" />
      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md border border-white/20 bg-black/60 backdrop-blur p-8 rounded-2xl"
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          Welcome back
        </h2>

        <p className="text-sm text-white/50 text-center mb-6">
          Continue reviewing your code with AI
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white"
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:outline-none focus:border-white"
          />

          <div className="flex justify-end text-sm">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-white/60 hover:text-white transition"
            >
              Forgot password?
            </button>
          </div>

          {/* Login button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="w-full relative overflow-hidden border border-white py-3 rounded-lg group"
          >
            <span className="relative z-10 group-hover:text-black transition">
              {loading ? "Logging in..." : "Login"}
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </motion.button>
        </form>

        {/* Divider */}
        <div className="my-6 text-center text-white/30">or</div>

        {/* Google button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full border border-white/20 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          Continue with Google
        </motion.button>

        {/* Signup */}
        <p className="text-sm text-center mt-6 text-white/60">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}