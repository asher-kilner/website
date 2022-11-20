import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || 'false')
    );
    const login = { password: "password" };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (login.password === password) {
        localStorage.setItem("authenticated", 'true');
        navigate("/home");
        }
    };
    return (
        <div className="flex-auto flex h-screen bg-login-background">
            <div className="flex flex-auto bg-lime-900 bg-opacity-90">
                <div className="flex flex-auto bg-black bg-opacity-30">
                    <div className="m-auto flex font-serif w-1/5 bg-white bg-opacity-50">
                        <form className="flex-auto p-4"onSubmit={handleSubmit}>
                            <div className="pt-3">
                                <div className="mb-4">
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setpassword(e.target.value)} id="password" type="password" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="flex space-x-4 text-sm font-medium">
                                <div className="flex-auto flex space-x-4 justify-center">
                                    <button className="flex-auto h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
                                    Sumbit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login