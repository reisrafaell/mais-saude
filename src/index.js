import React from "react";
import ReactDOM from "react-dom/client";
import Section from "./components/section";
import "./index.css";
import Rotas from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Section>
    <Rotas />
    </Section>
  </React.StrictMode>
);
