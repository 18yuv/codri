import './App.css'
import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import axios from "axios"

function App() {
  const [code, setCode] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

const handleSubmit = async () => {
  try {
    setLoading(true)
    console.log("Sending code:", code)

    const res = await axios.post(
      import.meta.env.VITE_BACKEND_URL,
      { code },
      { timeout: 10000 }
    )

    console.log("Response:", res.data)

    setResponse(res.data.result)

  } catch (error) {
    console.log("FULL ERROR:", error)

    if (error.code === "ECONNABORTED") {
      setResponse("⏱️ Timeout")
    } else if (error.response) {
      setResponse(`❌ ${error.response.data.message}`)
    } else {
      setResponse("❌ Server not responding")
    }
  } finally {
    setLoading(false)
  }
}

  return (
    <main>
      <div className="left">
        <div className="code">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
        </div>

        <button className="review" onClick={handleSubmit}>
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>

      <div className="right">
        <h2>Output</h2>
        <ReactMarkdown>
          {response || "Your AI review will appear here..."}
        </ReactMarkdown>
      </div>
    </main>
  )
}

export default App