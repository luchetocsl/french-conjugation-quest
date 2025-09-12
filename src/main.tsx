import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Alpine from "alpinejs";

// Initialize Alpine.js
window.Alpine = Alpine;
Alpine.start();

createRoot(document.getElementById("root")!).render(<App />);
