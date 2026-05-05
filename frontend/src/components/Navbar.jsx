// components/AuthNavbar.jsx
import { Link } from "react-router-dom";

export default function AuthNavbar({ type }) {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* Logo → Landing */}
        <Link to="/" className="font-semibold text-white tracking-wide">
          Codri
        </Link>

        {/* Right side */}
        {type === "login" ? (
          <Link
            to="/signup"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Sign up
          </Link>
        ) : (
          <Link
            to="/login"
            className="text-sm text-white/60 hover:text-white transition"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}