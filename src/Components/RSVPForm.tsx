import * as React from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Navigation from "./Navigation"
import Alert from "@mui/material/Alert";

function RSVPForm(){
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [persons, setPersons] = React.useState('');
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem("authenticated", true);
        setOpen(true);
        console.log('sending to db...')
    };

    return(
        <div className="h- b bg-regal-blue">
            <form className="flex-auto p-4"onSubmit={handleSubmit}>
                <div className="flex pt-3 mb-2 w-2/5">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setEmail(e.target.value)} id="password" type="text" placeholder="Email"/>
                </div>
                <div className="flex pt-3 mb-8 w-2/5">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPersons(e.target.value)} id="password" type="text" placeholder="Person"/>
                </div>
                <div className="flex justify-center">
                    <div className="flex text-sm font-medium w-2/5">
                        <button className="flex-auto h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
                                RSVP
                        </button>
                    </div>
                </div>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default RSVPForm