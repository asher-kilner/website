import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import RSVPForm from './Components/RSVPForm'
import { Navigate, useNavigate } from "react-router-dom";
import './index.css'
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from 'themes/theme';


function App() {
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        } else {
            setauthenticated('false');
            navigate('/login')
        }
    }, []);
    const handleRSVP = () => {
        navigate("/RSVP");
    }
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme />
            <div style={{ color: appTheme.palette.secondary.main }}>
                <Header/>
                <h1>Asher loves chelsea lots and lots X</h1>
                
                {/* <Footer/> */}
            </div>
        </ThemeProvider>
    );

}

export default App;
