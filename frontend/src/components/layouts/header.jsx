import {Component} from 'react'
import './styles/header.css'
import {NavLink} from 'react-router-dom'
import urls from '../../urls'

function Header (){
    return (
        <header>
            <div className="header-mobile">
                <div className="header-mobile__wrap">
                    <div className="header-mobile__box">
                        <NavLink to={urls.PROFILE}
                            className="header-mobile__userimage"></NavLink>
                        <NavLink to="#" className="header-mobile__search"></NavLink>
                        <NavLink to={urls.NOTIFICATION}
                            className="header-mobile__notification"></NavLink>
                        <div className="maketask-button">
                            <NavLink to={urls.CREATE_TASK} className="maketask-button__label">
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

export default Header
