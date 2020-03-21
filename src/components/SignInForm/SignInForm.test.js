import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import SignInForm from './SignInForm';

describe('SignInForm basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <SignInForm />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    })
})
