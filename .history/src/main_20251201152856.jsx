import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import KidHome from "./pages/KidHome.jsx";
import Alphabets from "./pages/Alphabets.jsx";
import Numbers from "./pages/Numbers.jsx";  // <-- ADD THIS LINE
import "./index.css";
import Welcome from "./pages/Welcome.jsx";
import SelectRole from "./pages/SelectRole.jsx";
import KidAge from "./pages/KidAge.jsx";
import Kid5to6 from "./pages/Kid5to6.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
  {/* Step 1: Welcome Screen */}
  <Route path="/" element={<Welcome />} />

  {/* Step 2: Kid / Parent selection */}
  <Route path="/select" element={<SelectRole />} />

  {/* Step 3: Age selection */}
  <Route path="/kid-age" element={<KidAge />} />
  <Route path="/kid-2-4" element={<KidHome />} />
  <Route path="/kid-5-6" element={<Kid5to6 />} />

  {/* Existing old pages */}
  <Route path="/home" element={<KidHome />} />
  <Route path="/alphabets" element={<Alphabets />} />
  <Route path="/numbers" element={<Numbers />} />
</Routes>

    </BrowserRouter>
  </React.StrictMode>
);
