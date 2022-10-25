import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <h1>Asher loves chelsea lots and lots X</h1>
            <Footer/>
        </div>
    );
}

export default App;
