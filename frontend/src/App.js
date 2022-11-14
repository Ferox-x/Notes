import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./layouts/header/header";
import Footer from "./layouts/footer/footer";
import './App.css'
import MainPage from "./layouts/main_page/main_page";


class App extends Component {
    render() {
        return (
            <div className={'container'}>
                <Header />
                <MainPage/>
                <Footer />
            </div>


        )
    }
}

export default App;
