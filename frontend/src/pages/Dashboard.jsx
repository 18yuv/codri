import { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/authContext.jsx";
import axios from "axios";
import logout from "../controllers/logout.js";
import toast from "react-hot-toast";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function Dashboard() {
  const { user } = useAuth();

  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const resultRef = useRef(null);

  const handleSubmit = async () => {
    if (!code.trim()) {
      return toast.error("Please enter some code");
    }

    try {
      setLoading(true);
      setResult("");

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/ai/get-response`,
        { code },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setResult(res.data.result);
    } catch (err) {
      console.error(err);
      toast.error("Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard!");
  };

  const handleSample = () => {
    const sample = `function fetchData() {
  let data = fetch('/api/data').then(res => res.json());
  return data;
}`;
    setCode(sample);
  };

  // Auto-scroll when result updates
  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 backdrop-blur bg-black/60">
        <h1 className="text-lg font-semibold">Codri</h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-white/60">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="border border-white px-4 py-1 rounded-lg text-sm hover:bg-white hover:text-black transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-5xl mx-auto p-6 space-y-6">

        {/* Input */}
        <div className="border border-white/20 bg-black/60 backdrop-blur p-5 rounded-2xl">

          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm text-white/60 uppercase tracking-wide">
              Input Code
            </h2>

            <button
              onClick={handleSample}
              className="text-xs text-white/50 hover:text-white transition"
            >
              Try sample
            </button>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="// Paste your code here..."
            className="w-full h-52 p-4 bg-black border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-white"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 relative overflow-hidden border border-white px-5 py-2 rounded-lg group"
          >
            <span className="relative z-10 group-hover:text-black transition">
              {loading ? "Analyzing..." : "Review Code"}
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </motion.button>

        </div>

        {/* Output */}
        <div
          ref={resultRef}
          className="border border-white/20 bg-black/60 backdrop-blur p-5 rounded-2xl relative"
        >
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-sm text-white/60 uppercase tracking-wide">
              AI Review
            </h2>

            {result && (
              <button
                onClick={handleCopy}
                className="text-xs text-white/50 hover:text-white transition"
              >
                Copy
              </button>
            )}
          </div>

          {loading ? (
            <p className="text-white/40 animate-pulse">
              AI is analyzing your code...
            </p>
          ) : result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ReactMarkdown
                components={{
                  code({ inline, className, children }) {
                    const match = /language-(\\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                      >
                        {String(children).replace(/\\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="bg-white/10 px-1 rounded">
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {result}
              </ReactMarkdown>
            </motion.div>
          ) : (
            <p className="text-white/30">
              Your AI review will appear here...
            </p>
          )}
        </div>

      </div>
    </div>
  );
}