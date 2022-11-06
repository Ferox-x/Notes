import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "./layouts/header/header";

class App extends Component {
    render() {
        return (
            <div className={'app-wrapper'}>
                <Header/>
            </div>
        )
    }
}

export default App;

