import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);
console.log(root);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
