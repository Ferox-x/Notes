import {Component} from "react";
import MainPage from "../main_page/main_page";
import Task from "../task/task";
import Project from "../project/project";
import Notifications from "../notifications/notifications";
import Deadlines from "../deadlines/deadlines";
import Validation from "../validation/validation";
import MainPageFull from "../main_page_full/main_page_full";

function Content () {
    return (
      <div className={'content'}>
        {/*<MainPage/>*/}
        {/*<Task/>*/}
        {/*<Project/>*/}
        {/*<Notifications/>*/}
        {/*<Deadlines />*/}
        {/*<Validation/>*/}
        <MainPageFull/>
      </div>
    )
}

export default Content;
