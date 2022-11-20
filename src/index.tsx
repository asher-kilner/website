import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" index element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route
            path="*"
            element={<Navigate to="/home" replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
