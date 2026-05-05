import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingPage() {

  // simple typing animation
  const fullText = `// AI Review\n\n❌ Missing async/await\n❌ No error handling\n\n✅ Suggested Fix:\nasync function fetchData() {\n  try {\n    const res = await fetch('/api/data');\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n  }\n}`;

  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <header className="sticky top-0 backdrop-blur bg-black/70 border-b border-white/20 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold tracking-wide">Codri</h1>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm px-4 py-2 hover:underline">
              Login
            </Link>

            <Link
              to="/signup"
              className="relative overflow-hidden border border-white px-4 py-2 rounded-lg text-sm group"
            >
              <span className="relative z-10 group-hover:text-black transition">
                Start Free
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </header>


      {/* Hero */}
      <section className="text-center py-32 px-6 border-b border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight"
        >
          AI that reviews your code like a senior engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 text-white/70 max-w-xl mx-auto"
        >
          Find bugs, improve performance, and refactor instantly — without waiting for code reviews.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            to="/signup"
            className="relative overflow-hidden border border-white px-6 py-3 rounded-lg group"
          >
            <span className="relative z-10 group-hover:text-black transition">
              Try it free
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>

          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
        </motion.div>

        <p className="mt-8 text-sm text-white/40">
          Used by developers to ship better code faster
        </p>
      </section>


      {/* LIVE DEMO */}
      <section className="px-6 py-24 max-w-4xl mx-auto border-b border-white/10">
        <div className="border border-white/20 rounded-xl p-6 font-mono text-sm text-white/80 bg-black">
          <pre className="whitespace-pre-wrap">{typed}</pre>
        </div>
      </section>


      {/* How it works */}
      <section className="relative py-28 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px] animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-16">How it works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {["Paste your code", "AI analyzes instantly", "Get improvements"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="p-8 border border-white/20 rounded-2xl relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-3">{i + 1}</div>
                  <p className="text-white/80">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="text-center py-28 px-6">
        <h2 className="text-4xl font-bold">
          Start reviewing your code in seconds
        </h2>

        <Link
          to="/signup"
          className="relative inline-block mt-8 overflow-hidden border border-white px-8 py-4 rounded-lg group"
        >
          <span className="relative z-10 group-hover:text-black transition">
            Get Started Free
          </span>
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>
      </section>


      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Codri. All rights reserved.
      </footer>

    </div>
  );
}
