import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from './contexts/GamesContext'
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <GamesProvider>
            <App />
        </GamesProvider>
    </BrowserRouter>, document.getElementById('root'));
