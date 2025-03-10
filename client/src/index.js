import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { AuthContexProvider } from "./hooks/authContext.js";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);


