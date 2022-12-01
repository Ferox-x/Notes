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
              <a href="#" className="header-mobile__search"></a>
              <NavLink to="/notification"
                 className="header-mobile__notification"></NavLink>
              <div className="maketask-button">
                <a href="#" className="maketask-button__label">
                  <p className="maketask-button__text">Создать
                    задачу</p>
                  <div
                    className="maketask-button__icon"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>)
}

export default Header;
