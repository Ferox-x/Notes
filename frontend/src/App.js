import React, {Component} from 'react';
import {Routes, Route, NavLink, BrowserRouter} from "react-router-dom";
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import Content from "./components/layouts/content/content";
import './App.css'
import MainPage from "./components/layouts/main_page/main_page";
import Task from "./components/layouts/task/task";
import Project from "./components/layouts/project/project";
import Notifications from "./components/layouts/notifications/notifications";
import User_profile
    from "./components/layouts/profile/user_profile/user_profile";
import ProfileSettings
    from "./components/layouts/profile/profile_settings/profile_settings";
import ProfilePush
    from "./components/layouts/profile/profile_push/profile_push";
import EditProfile
    from "./components/layouts/profile/edit_profile/edit_profile";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={'container'}>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<MainPage/>}/>
                        <Route path={"/task"} element={<Task/>}/>
                        <Route path={"/project"} element={<Project/>}/>
                        <Route path={"/notification"}
                               element={<Notifications/>}/>
                        <Route path={"/profile"} element={<User_profile/>}/>
                        <Route path={"/settings"} element={<ProfileSettings/>}/>
                        <Route path={"/profilepush"} element={<ProfilePush/>}/>
                        <Route path={"/editprofile"} element={<EditProfile/>}/>
                        {/*<Deadlines />*/}
                        {/*<Validation/>*/}
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>

        )
    }
}

export default App;
