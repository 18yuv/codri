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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-semibold">AI Code Reviewer</h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{user?.email}</span>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-1 rounded-lg text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Input */}
        <div className="bg-white p-4 rounded-xl shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">Paste your code</h2>
            <button
              onClick={handleSample}
              className="text-sm text-blue-600 hover:underline"
            >
              Try sample
            </button>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Paste your code here..."
            className="w-full h-48 p-3 border rounded-lg font-mono text-sm focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-3 bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            {loading && (
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            )}
            {loading ? "Analyzing..." : "Review Code"}
          </button>
        </div>

        {/* Output */}
        <div
          ref={resultRef}
          className="bg-white p-4 rounded-xl shadow relative"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">AI Review</h2>

            {result && (
              <button
                onClick={handleCopy}
                className="text-sm text-blue-600 hover:underline"
              >
                Copy
              </button>
            )}
          </div>

          {loading ? (
            <p className="text-gray-500 animate-pulse">
              Generating response...
            </p>
          ) : result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ReactMarkdown
                components={{
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code>{children}</code>
                    );
                  },
                }}
              >
                {result}
              </ReactMarkdown>
            </motion.div>
          ) : (
            <p className="text-gray-400">
              Your review will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}