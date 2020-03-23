import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import SignInNav from './SignInNav';

describe('SignInNav basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <SignInNav />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    })
})
