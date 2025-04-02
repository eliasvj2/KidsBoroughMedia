import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { AuthContexProvider } from "./hooks/authContext.js";
import { BrowserRouter } from "react-router";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContexProvider>
       
      <App />
     
    </AuthContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);


