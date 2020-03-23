import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider, { GamesConsumer } from '../../contexts/GamesContext';
import SignInForm from './SignInForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

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
    });

    it('component successfully renders username input field', () => {
        const renderer = shallow(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <SignInForm />
                </GamesProvider>
            </BrowserRouter>
        );

        expect(renderer
                .dive()
                .dive()
                .dive()
                .dive()
                .dive()
                .dive()
                .dive()
                .dive()
                .find('.signInUsername').exists()).toBeTruthy();
    });

    it('component successfully renders password input field', () => {

        const renderer = shallow(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <SignInForm />
                </GamesProvider>
            </BrowserRouter> 
        );

        expect(renderer
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .dive()
        .find('.signInPassword').exists()).toBeTruthy();
    })
})
