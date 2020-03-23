import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import HomepageNav from './HomepageNav';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Enzyme.configure({ adapter: new Adapter() });

describe('HomepageNav basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <HomepageNav />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    })

    it('component successfully renders FA icon', () => {
        const renderer = shallow (
            <HomepageNav />
        );

        expect(renderer.find(FontAwesomeIcon).exists()).toBeTruthy();
    })
})
