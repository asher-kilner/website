import React, { useEffect, useState } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import RSVPForm from './Components/RSVPForm'
import { Navigate } from "react-router-dom";
import './index.css'
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { appTheme } from 'themes/theme';


function App() {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        } else {
            setauthenticated('false');
        }
    }, []);
    if (authenticated == 'false') {
        console.log(authenticated)
        return <Navigate replace to="/login" />;
    } else {
        return (
            <ThemeProvider theme={appTheme}>
                <CssBaseline enableColorScheme />
                <div>
                    <Header/>
                    <RSVPForm/>
                    <h1>Asher loves chelsea lots and lots X</h1>
                    <Button color="primary" variant="contained">
                    Primary
                    </Button>
                    <Button color="secondary" variant="contained">
                    Secondary
                    </Button>   
                    <Footer/>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
