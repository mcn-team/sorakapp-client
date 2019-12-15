import React from 'react';
import {
    BrowserRouter
} from 'react-router-dom';

import { HeaderPage } from './pages/header.pages';
import { Router } from './router';

import './App.css';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderPage />
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
