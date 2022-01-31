import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import LoginPage from './Pages/LoginPage'; 
import HomePage from './Pages/HomePage';
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticaded, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando... </div>
        }

        if(!authenticaded){
            return <Navigate to="/login" />;
        }

        return children
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>}/>
                    <Route exact path="/" element={ <Private><HomePage/></Private> }/>
                </Routes>
            </AuthProvider>
        </Router>
    );
}


export default AppRoutes;