import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Ensure the path matches where App.jsx is located

// Grab the root element from the HTML
const rootElement = document.getElementById("root");

// Create a React root and render the App component
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
