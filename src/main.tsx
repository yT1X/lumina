import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/sala.css";

// Coloca o site dentro da div com id="root", definida no index.html.
const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}
