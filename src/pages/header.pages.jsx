import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../components';

export const HeaderPage = () => {
    return (
        <Header>
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/filler">Filler</Link>
        </Header>
    );
};
