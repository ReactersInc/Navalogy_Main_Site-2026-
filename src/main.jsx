import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/typography.css";
import "./styles/components.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/research.css";
import "./styles/featured-research.css";
import "./styles/people.css";
import "./styles/publications.css";
import "./styles/footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);