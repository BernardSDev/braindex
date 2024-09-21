import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* BrowserRouter around your main.tsx file to enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
