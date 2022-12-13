import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "../main_page/main_page";
import Task from "../task/task";
import Project from "../project/project";
import Notifications from "../notifications/notifications";
import User_profile from "../profile/user_profile/user_profile";
import ProfileSettings from "../profile/profile_settings/profile_settings";
import ProfilePush from "../profile/profile_push/profile_push";
import EditProfile from "../profile/edit_profile/edit_profile";
import urls from "../../urls";
import PersonalTask from "../task/personal_task/personal_task";
import DetailTask from "../task/personal_task/detail_task/detail_task";
import AuthRoutes from "./auth_routes";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function Content(props) {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <div>
      <Routes>
        {isAuth
          ?
          <div className={'app-wrap'}>
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
          </div>

          :
          <Navigate to={urls.SIGNUP}/>
        }
         <AuthRoutes/>


      </Routes>

    </div>


  )
}

export default Content;
