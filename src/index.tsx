import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Principal } from "./screens/Principal";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
);
