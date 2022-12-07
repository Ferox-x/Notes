import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import './App.css'
import Content from "./components/routes/routes";
import NoticeList from "./components/notice/notice_list/notice_list";
import {useSelector} from "react-redux";
import Switch from "react-switch";
import urls from "./urls";
import SignUp from "./components/authentification/sign_up/sign_up";
import Login from "./components/authentification/login/login";


function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    const [noticeList, setNoticeList] = useState([])

    function deleteNotice(id) {
        setNoticeList(noticeList.filter(n => n.key !== id))
    }

    function createNotice(id, message) {
        setNoticeList([...noticeList,
            {
                id: Date.now(),
                message,
                deleteNotice
            }
        ])
    }

    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <div className={'content-container'}>
                    <Content/>
                    {!isAuth &&
                        <Routes>
                            <Route path={urls.SIGNUP}
                                   element={<SignUp create={createNotice}/>}/>
                            <Route path={urls.LOGIN}
                                   element={<Login create={createNotice}/>}/>
                        </Routes>
                    }
                    <NoticeList notifications={noticeList}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    )
}

export default App;
