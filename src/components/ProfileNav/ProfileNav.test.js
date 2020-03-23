import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider, { GamesConsumer } from '../../contexts/GamesContext';
import ProfileNav from './ProfileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('ProfileNav basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <ProfileNav />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders Astronaut logo', () => {
        const renderer = shallow(
            <ProfileNav>
                <GamesConsumer />
            </ProfileNav>
        );

        expect(renderer.dive().find(FontAwesomeIcon).exists()).toBeTruthy();
    })
})
