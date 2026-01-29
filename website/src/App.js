import React from "react";
import "./App.css"; // Using the same CSS for animations and styling

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1 className="fade-in">Hi, I'm Elyab Ville</h1>
        <p className="fade-in delay">Welcome to my project! Download my app below:</p>

        <a
          href="https://expo.dev/@YOUR_USERNAME/calculator-app"
          target="_blank"
          rel="noopener noreferrer"
          className="download-btn fade-in delay-2"
        >
          Download App
        </a>
      </div>
    </div>
  );
}

export default App;
