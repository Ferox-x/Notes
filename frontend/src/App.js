import React, {Component} from 'react';
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import MainHeader from "./components/layouts/main_header/main_header";
import './App.css'


class App extends Component {
    render() {
        return (
            <div className={'container'}>
                <Header />
                <MainHeader/>
                <Footer />

            </div>
        )
    }
}

export default App;
