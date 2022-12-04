import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import './App.css'
import Content from "./components/routes/routes";
import NoticeList from "./components/notice/notice_list/notice_list";
import {useSelector} from "react-redux";


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
