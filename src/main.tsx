import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/sala.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}
