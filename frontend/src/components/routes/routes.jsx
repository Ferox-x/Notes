import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import AuthCheck from '../authentification/auth_check'
import MainPage from '../main_page/main_page'
import Task from '../task/task'
import Project from '../project/project'
import Notifications from '../notifications/notifications'
import User_profile from '../profile/user_profile/user_profile'
import ProfileSettings from '../profile/profile_settings/profile_settings'
import ProfilePush from '../profile/profile_push/profile_push'
import EditProfile from '../profile/edit_profile/edit_profile'
import urls from '../../urls'
import PersonalTask from '../task/personal_task/personal_task'
import DetailTask from '../task/personal_task/detail_task/detail_task'
import SignUp from '../authentification/sign_up/sign_up'
import Login from '../authentification/login/login'
import NoticeList from '../notice/notice_list/notice_list'


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
                                                    component={<Task/>}/>}/>
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
        <Route path={urls.PERSONAL_TASK}
               element={<AuthCheck create={createNotice}
                                   component={<PersonalTask/>}/>}/>
        <Route path={'/task1'} element={<DetailTask/>}/>
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
