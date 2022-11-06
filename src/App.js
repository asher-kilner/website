import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { Navigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    const [authenticated, setauthenticated] = useState(null);
        useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
    }, []);
    if (!authenticated) {
        return <Navigate replace to="/login" />;
    } else {
        return (
            <div>
                <Header/>
                <h1>Asher loves chelsea lots and lots X</h1>
                <Footer/>
                <Login/>
            </div>
        );
    }
}

export default App;
