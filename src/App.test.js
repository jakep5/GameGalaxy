import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from './contexts/GamesContext';
import App from './App';

describe('Basic smoke tests', () => {
    it('app renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter>
                            <GamesProvider>
                                <App />
                            </GamesProvider>
                        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})

