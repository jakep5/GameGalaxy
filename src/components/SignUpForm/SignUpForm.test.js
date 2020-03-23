import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import SignUpForm from './SignUpForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('SignUpForm basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <SignUpForm />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders sign up username input field', () => {
        const renderer = shallow(
            <SignUpForm />
        );

        expect(renderer.find('.signUpUsername').exists()).toBeTruthy();
    });

    it('component successfully renders sign up password input field', () => {
        const renderer = shallow(
            <SignUpForm />
        );

        expect(renderer.find('.signUpPassword').exists()).toBeTruthy();
    });
})