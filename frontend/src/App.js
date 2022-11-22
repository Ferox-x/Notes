import React, {Component} from 'react';
import Header from "./components/layouts/header/header";
import Footer from "./components/layouts/footer/footer";
import Content from "./components/layouts/content/content";
import './App.css'


class App extends Component {
    render() {
        return (
            <div className={'container'}>
                <Header />
                <Content/>
                <Footer />

            </div>
        )
    }
}

export default App;
