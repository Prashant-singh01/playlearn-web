import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import KidHome from "./pages/KidHome.jsx";
import Alphabets from "./pages/Alphabets.jsx";
import Numbers from "./pages/Numbers.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<KidHome />} />
        <Route path="/alphabets" element={<Alphabets />} />
        <Route path="/numbers" element={<Numbers />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
