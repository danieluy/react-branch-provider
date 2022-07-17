import { enableDevTools } from "react-branch-provider";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

if (process.env.NODE_ENV === "development") {
  enableDevTools();
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
