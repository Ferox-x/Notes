import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Switch from "react-switch";
import MainPage from "../main_page/main_page";
import Task from "../task/task";
import Project from "../project/project";
import Notifications from "../notifications/notifications";
import User_profile from "../profile/user_profile/user_profile";
import ProfileSettings from "../profile/profile_settings/profile_settings";
import ProfilePush from "../profile/profile_push/profile_push";
import EditProfile from "../profile/edit_profile/edit_profile";
import urls from "../../urls";
import SignUp from "../authentification/sign_up/sign_up";
import NoticeList from "../notice/notice_list/notice_list";
import Login from "../authentification/login/login";
import {useSelector} from "react-redux";
import PersonalTask from "../task/personal_task/personal_task";
import DetailTask from "../task/personal_task/detail_task/detail_task";

function Content(props) {



  return (
    <div>
      <Routes>
        <Route path={urls.MAIN_PAGE} element={<MainPage/>}/>
        <Route path={urls.TASK} element={<Task/>}/>
        <Route path={urls.PROJECT} element={<Project/>}/>
        <Route path={urls.NOTIFICATION}
               element={<Notifications/>}/>
        <Route path={urls.PROFILE} element={<User_profile/>}/>
        <Route path={urls.SETTINGS} element={<ProfileSettings/>}/>
        <Route path={urls.PUSH} element={<ProfilePush/>}/>
        <Route path={urls.EDIT} element={<EditProfile/>}/>
        <Route path={urls.PERSONAL_TASK} element={<PersonalTask/>}/>
        <Route path={'/task1'} element={<DetailTask/>}/>
      </Routes>

    </div>


  )
}

export default Content;
