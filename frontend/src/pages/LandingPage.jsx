import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navbar */}
            <header className="flex justify-between items-center px-6 py-4 border-b">
                <h1 className="text-xl font-bold">AI Code Reviewer</h1>

                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm hover:underline">
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-black text-white px-4 py-2 rounded-lg text-sm"
                    >
                        Get Started
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="text-center py-20 px-6">
                <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
                    Get instant, expert-level feedback on your code
                </h2>

                <p className="mt-4 text-gray-600 max-w-xl mx-auto">
                    Improve code quality, fix bugs, and learn best practices with AI-powered reviews in seconds.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <Link
                        to="/signup"
                        className="bg-black text-white px-6 py-3 rounded-lg"
                    >
                        Start for Free
                    </Link>

                    <Link
                        to="/login"
                        className="border px-6 py-3 rounded-lg"
                    >
                        Login
                    </Link>
                </div>
            </section>

            {/* Demo Section */}
            <section className="px-6 pb-20 max-w-5xl mx-auto">
                <div className="bg-gray-900 text-green-400 p-4 rounded-xl text-sm font-mono overflow-x-auto">
                    {`function fetchData() {
                        let data = fetch('/api/data').then(res => res.json());
                        return data;
                        }

                        // ❌ Issues:
                        // - Missing async/await
                        // - No error handling

                        // ✅ Suggested Fix:
                        // Use async/await with try/catch`
                    }
                </div>
            </section>

            {/* Features */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="font-semibold text-lg">⚡ Instant Feedback</h3>
                        <p className="text-gray-600 mt-2">
                            Get code reviews in seconds, not hours.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">🧠 Smart Suggestions</h3>
                        <p className="text-gray-600 mt-2">
                            Improve performance, readability, and structure.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">🔐 Secure & Private</h3>
                        <p className="text-gray-600 mt-2">
                            Your code stays protected and never shared.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-20 px-6">
                <h2 className="text-3xl font-bold">
                    Start improving your code today
                </h2>

                <p className="mt-3 text-gray-600">
                    Join developers using AI to write better code faster.
                </p>

                <Link
                    to="/signup"
                    className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg"
                >
                    Get Started Free
                </Link>
            </section>

            {/* Footer */}
            <footer className="border-t py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} AI Code Reviewer. All rights reserved.
            </footer>
        </div>
    );
}