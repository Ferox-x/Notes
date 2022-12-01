import {Component} from "react";
import './footer.css';
import {NavLink} from "react-router-dom";


function Footer () {
    return (
      <nav className="bottom-navbar-mobile">
        <NavLink to="/" className="bottom-navbar-mobile__btn-home"></NavLink>
        <NavLink to="/task" className="bottom-navbar-mobile__btn-task"></NavLink>
        <a href="#" className="bottom-navbar-mobile__btn-share"></a>
        <a href="#" className="bottom-navbar-mobile__btn-calendar"></a>
      </nav>)
}

export default Footer;
