import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // Vite uses import.meta.env instead of process.env
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  if (!apiKey) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        <h2>Error: API key is missing!</h2>
        <p>Please set `VITE_NEWS_API_KEY` in your `.env.local` file.</p>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<News country="us" category="general" apiKey={apiKey} />} />
        <Route path="/business" element={<News country="us" category="business" apiKey={apiKey} />} />
        <Route path="/entertainment" element={<News country="us" category="entertainment" apiKey={apiKey} />} />
        <Route path="/sports" element={<News country="us" category="sports" apiKey={apiKey} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
