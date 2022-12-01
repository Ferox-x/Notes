import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "../main_page/main_page";
import Task from "../task/task";
import Project from "../project/project";
import Notifications from "../notifications/notifications";
import User_profile from "../profile/user_profile/user_profile";
import ProfileSettings from "../profile/profile_settings/profile_settings";
import ProfilePush from "../profile/profile_push/profile_push";
import EditProfile from "../profile/edit_profile/edit_profile";


function Path() {
  return (
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
  )
}

export default Path;
