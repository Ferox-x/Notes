import React, {Component} from 'react';
import {Routes, Route, NavLink, BrowserRouter} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import './App.css'
import Path from "./components/routes/routes";


function App() {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <Path/>
                <Footer/>
            </div>
        </BrowserRouter>

    )
}

export default App;
