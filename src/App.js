import React, { useState } from 'react';
import {
    BrowserRouter
} from 'react-router-dom';

import { Header } from './components';
import { MainRouter } from './routers';

import './App.css';

function App() {
    const [ isLogged, setIsLogged ] = useState(false);

    const callback = () => {
        setIsLogged(!isLogged);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Header className="App-header" onLogout={callback} />
                <MainRouter onLogin={callback} />
            </div>
        </BrowserRouter>
    );
}

export default App;
