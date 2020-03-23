import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import SignInNav from './SignInNav';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Enzyme.configure({ adapter: new Adapter() });

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
    });
    
    it('component successfully renders site logo', () => {
        const renderer = shallow(
            <SignInNav />
        );

        expect(renderer.find(FontAwesomeIcon).exists()).toBeTruthy();
    })
})
