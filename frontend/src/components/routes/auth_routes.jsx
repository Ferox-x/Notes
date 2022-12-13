import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import urls from "../../urls";
import SignUp from "../authentification/sign_up/sign_up";
import Login from "../authentification/login/login";
import NoticeList from "../notice/notice_list/notice_list";

function AuthRoutes(props) {
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
    <div>


      <Routes>
        <Route path={urls.SIGNUP}
               element={<SignUp create={createNotice}/>}/>
        <Route path={urls.LOGIN}
               element={<Login create={createNotice}/>}/>
      </Routes>
      <NoticeList notifications={noticeList}/>

    </div>
  );
}

export default AuthRoutes;
