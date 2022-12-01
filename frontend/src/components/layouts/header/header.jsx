import {Component} from "react";
import './header.css';
import {NavLink} from "react-router-dom";


function Header (){
    return (
      <header>
        <div className="header-mobile">
          <div className="header-mobile__wrap">
            <div className="header-mobile__box">
              <NavLink to="/profile"
                 className="header-mobile__userimage"></NavLink>
              <NavLink to="#" className="header-mobile__search"></NavLink>
              <NavLink to="/notification"
                 className="header-mobile__notification"></NavLink>
              <div className="maketask-button">
                <NavLink to="#" className="maketask-button__label">
                  <p className="maketask-button__text">Создать
                    задачу</p>
                  <div
                    className="maketask-button__icon"></div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>)
}

export default Header;
