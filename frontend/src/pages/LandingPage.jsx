import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <header className="sticky top-0 backdrop-blur bg-black/70 border-b border-white/20 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold tracking-wide">AI Code Reviewer</h1>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm px-4 py-2 hover:underline">
              Login
            </Link>

            <Link
              to="/signup"
              className="relative overflow-hidden border border-white px-4 py-2 rounded-lg text-sm group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Start for Free
              </span>
              <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </header>


      {/* Hero */}
      <section className="text-center py-28 px-6 border-b border-white/10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight"
        >
          Get instant, expert-level feedback on your code
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-white/70 max-w-xl mx-auto"
        >
          Improve code quality, fix bugs, and learn best practices with AI-powered reviews in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="relative overflow-hidden border border-white px-6 py-3 rounded-lg group"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Start for Free
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
        </motion.div>
      </section>


      {/* Demo */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 border-b border-white/10">
        <div className="border border-red-500/40 text-red-400 p-4 rounded-xl text-sm font-mono">
          <p className="mb-2 text-white">❌ Before</p>
          <pre>{`function fetchData() {
  let data = fetch('/api/data').then(res => res.json());
  return data;
}`}</pre>
        </div>

        <div className="border border-green-500/40 text-green-400 p-4 rounded-xl text-sm font-mono">
          <p className="mb-2 text-white">✅ After</p>
          <pre>{`async function fetchData() {
  try {
    const res = await fetch('/api/data');
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}`}</pre>
        </div>
      </section>


      {/* How it works */}
      <section className="relative py-24 px-6 border-b border-white/10 overflow-hidden">

        {/* Visible animated background */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl top-[-100px] left-[-100px] animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl bottom-[-100px] right-[-100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-12">How it works</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {["Paste your code", "AI analyzes instantly", "Get improvements"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-6 border border-white/20 rounded-2xl relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

                <div className="relative z-10">
                  <div className="font-bold text-lg mb-2">{i + 1}</div>
                  <p>{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="relative py-24 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-10 right-10 animate-[pulse_10s_ease-in-out_infinite]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Instant Feedback",
              desc: "Get code reviews in seconds, not hours.",
            },
            {
              title: "Smart Suggestions",
              desc: "Improve performance and readability.",
            },
            {
              title: "Secure & Private",
              desc: "Your code is never shared.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-white/20 rounded-2xl relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              <div className="relative z-10">
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="text-center py-24 px-6 border-b border-white/10">
        <h2 className="text-3xl font-bold">
          Start improving your code today
        </h2>

        <p className="mt-3 text-white/70">
          Join developers using AI to write better code faster.
        </p>

        <Link
          to="/signup"
          className="relative inline-block mt-6 overflow-hidden border border-white px-6 py-3 rounded-lg group"
        >
          <span className="relative z-10 group-hover:text-black transition">
            Get Started Free
          </span>
          <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
        </Link>
      </section>


      {/* Footer */}
      <footer className="border-t border-white/20 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} AI Code Reviewer. All rights reserved.
      </footer>

    </div>
  );
}