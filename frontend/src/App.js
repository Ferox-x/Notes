import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import './App.css'
import Content from "./components/routes/routes";
import AuthRoutes from "./components/routes/auth_routes";


function App() {


    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <div className={'content-container'}>
                    <Content/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    )
}

export default App;
