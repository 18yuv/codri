import { useState } from "react";
import login from "../controllers/loginController.js";
import googleLogin from "../controllers/googleLogin.js";
import resetPassword from "../controllers/forgotPassword.js";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      toast.success("Logged in with Google!");
      navigate("/dashboard");
    } catch (err) {
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
    } catch (err) {
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
      default:
        toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          />

          <div className="flex justify-end text-sm">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">or</div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full border py-2 rounded-lg hover:bg-gray-50 transition"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}