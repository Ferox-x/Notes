import './footer.css'
import {NavLink} from 'react-router-dom'
import urls from '../../../urls'

function Footer () {
    return (
        <nav className="bottom-navbar-mobile">
            <NavLink to={urls.MAIN_PAGE} className="bottom-navbar-mobile__btn-home"></NavLink>
            <NavLink to={urls.TASK} className="bottom-navbar-mobile__btn-task"></NavLink>
            <NavLink to="#" className="bottom-navbar-mobile__btn-share"></NavLink>
            <NavLink to="#" className="bottom-navbar-mobile__btn-calendar"></NavLink>
        </nav>)
}

export default Footer
