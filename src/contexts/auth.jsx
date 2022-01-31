import React, { createContext , useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { api,createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recLoggedUser = localStorage.getItem("user");

        if (recLoggedUser){
            setUser(JSON.parse(recLoggedUser));
        }

        setLoading(false);
    }, []);

    const login = async(email, password) => {

        const response = await createSession(email, password);

        if(response !== "error"){
            
            const token = response.data.Authorization;
            const loggedUser = response.data;

            //sempre enviara o token ao fazer uma requisição
            api.defaults.headers.Authorization = `Bearer ${token}`;

            localStorage.setItem("user", JSON.stringify(loggedUser));
            localStorage.setItem("token", JSON.stringify(token));
            setUser(loggedUser);
            navigate("/");
        }else{
            alert("Invalid username or password!")
        }

        
    };

    const logout = () => {
        localStorage.removeItem("user")
        api.defaults.headers.Authorization = null;

        setUser(null);
        navigate("/login")
    }; 

    return (
        <AuthContext.Provider 
        value={{authenticaded: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};