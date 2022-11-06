import {Component} from "react";
import header_styles from './header.module.css';


class Header extends Component {
  render() {
    return (<header>
      <div className="header-mobile">
        <div className="header-mobile__wrap">
          <div className="header-mobile__box">
            <a href="#"
               className="header-mobile__userimage"></a>
            <a href="#" className="header-mobile__search"></a>
            <a href="#"
               className="header-mobile__notification"></a>
            <div className="maketask-button">
              <a href="#" className={header_styles.maketask_button__label}>
                <p className={header_styles.maketask_button__text}>Создать
                  задачу</p>
                <div
                  className={header_styles.maketask_button__icon}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>)
  }
}

export default Header;
