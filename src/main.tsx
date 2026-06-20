import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureApi } from "@grab/seller-api";
import App from "./app/App";
import "./styles.css";

configureApi({
  baseUrl: "/api",
  getAccessToken: () => localStorage.getItem("seller-access-token"),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
