import './Styles/App.css';
import React, { Component } from 'react';

import Routers from 'Routers/Routers';

class App extends Component {
    // eslint-disable-next-line class-methods-use-this
    handleScriptError() {}

    handleScriptLoad() {
        this.setState({ scriptLoaded: true });
    }

    render() {
        return <Routers />;
    }
}

export default App;
