import {Component} from "react";
import './footer.css';


class Footer extends Component {
  render() {
    return (
      <nav className="bottom-navbar-mobile">
        <a href="#" className="bottom-navbar-mobile__btn-home"></a>
        <a href="#" className="bottom-navbar-mobile__btn-task"></a>
        <a href="#" className="bottom-navbar-mobile__btn-share"></a>
        <a href="#" className="bottom-navbar-mobile__btn-calendar"></a>
      </nav>)
  }
}

export default Footer;
