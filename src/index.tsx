import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import OrderOfService from 'Components/OrderOfService';
import Venue from 'Components/Venue';
import Accomodation from 'Components/Accomodation';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" index element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/venue" element={<Venue />}/>
        <Route path="/accomodation" element={<Accomodation />}/>
        <Route path="/order_of_service" element={<OrderOfService />}/>
        <Route
            path="*"
            element={<Navigate to="/home" replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
