import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users = [{ username: "Jane", password: "testpassword" }];
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
        localStorage.setItem("authenticated", true);
        navigate("/dashboard");
        }
    };
    return (
        <div className="flex-auto flex justify-center">
            <div className="border m-20 flex font-serif w-3/5">
                <form className="flex-auto p-6"onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-baseline">
                        <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                            Who are you?
                        </h1>
                    </div>
                    <div className="mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name"/>
                        </div>
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
                        </div>
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address"/>
                        </div>
                        <div className="mb-6">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-5 text-sm font-medium">
                        <div className="flex-auto flex space-x-4 justify-center">
                            <button className="flex-none w-1/3 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
                            RSVP
                            </button>
                        </div>
                    </div>
                </form>
                <div class="flex-none w-2/5 relative">
                    <div className="absolute inset-0 w-full h-full object-cover">Login</div>    
                </div>
            </div>
        </div>
        
    );
}

export default Login