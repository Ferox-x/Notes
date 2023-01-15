import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import AuthCheck from '../authentification/auth_check'
import MainPage from './main_page/main_page'
import Task from './task/task'
import Project from './project/project'
import Notifications from './notifications/notifications'
import User_profile from './profile/user_profile/user_profile'
import ProfileSettings from './profile/profile_settings/profile_settings'
import ProfilePush from './profile/profile_push/profile_push'
import EditProfile from './profile/edit_profile/edit_profile'
import urls from '../../urls'
import SignUp from '../authentification/sign_up'
import Login from '../authentification/login'
import NoticeList from '../notice/notice_list/notice_list'
import CreateTask from "./create_task/create_task"
import TaskCompleted from "./task/task_completed/task_completed";
import NotificationFilled
  from "./notifications/notification_filled/notification_filled";
import ProjectFilled from "./project/project_filled/project_filled";
import TaskProject from "./task/task_project/task_project";
import EditTask from "./task/edit_task/edit_task";
import BoardTaskFilled from "./task/board_task_filled/board_task_filled";


function Content(props) {

  const [noticeList, setNoticeList] = useState([])

  function deleteNotice(id) {
    const filtered = noticeList.filter(n => n.key !== id)
    setNoticeList(filtered)
  }

  function createNotice(id, message) {
    setNoticeList([...noticeList,
      {
        id,
        message,
        deleteNotice
      }
    ])
  }

  return (
    <div>
      <Routes>
        <Route path={urls.MAIN_PAGE} element={<AuthCheck create={createNotice}
                                                         component={
                                                           <MainPage/>}/>}/>
        <Route path={urls.TASK} element={<AuthCheck create={createNotice}
                                                    component={<Task createNotice={createNotice}/>}/>}/>
        <Route path={urls.PROJECT} element={<AuthCheck create={createNotice}
                                                       component={
                                                         <Project/>}/>}/>
        <Route path={urls.NOTIFICATION}
               element={<AuthCheck create={createNotice}
                                   component={<Notifications/>}/>}/>
        <Route path={urls.PROFILE} element={<AuthCheck create={createNotice}
                                                       component={
                                                         <User_profile/>}/>}/>
        <Route path={urls.SETTINGS} element={<AuthCheck create={createNotice}
                                                        component={
                                                          <ProfileSettings/>}/>}/>
        <Route path={urls.PUSH} element={<AuthCheck create={createNotice}
                                                    component={
                                                      <ProfilePush/>}/>}/>
        <Route path={urls.EDIT} element={<AuthCheck create={createNotice}
                                                    component={
                                                      <EditProfile/>}/>}/>
        <Route path={urls.CREATE_TASK}
               element={<AuthCheck create={createNotice}
                                   component={<CreateTask createNotice={createNotice}/>}/>}/>
        {/*<Route path={urls.CREATE_TASK}*/}
        {/*       element={<CreateTask/>}*/}
        {/*/>*/}
        <Route
          path={urls.BOARD_TASK}
          element={<BoardTaskFilled/>}
        />
        <Route
          path={urls.TASK_COMPLETED}
          element={<TaskCompleted/>}
        />
        <Route
          path={urls.NOTIFICATION_FILLED}
          element={<NotificationFilled/>}
        />
        <Route
          path={urls.PROJECT_FILLED}
          element={<ProjectFilled/>}
        />
        <Route
          path={urls.TASK_PROJECT}
          element={<TaskProject/>}
        />
        <Route
          path={urls.EDIT_TASK}
          element={<EditTask/>}
        />
        <Route path={urls.SIGNUP}
               element={<SignUp create={createNotice}/>}/>
        <Route path={urls.LOGIN}
               element={<Login create={createNotice}/>}/>
      </Routes>
      <NoticeList notifications={noticeList}/>
    </div>
  )
}

export default Content
