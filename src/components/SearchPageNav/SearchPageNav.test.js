import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import SearchPageNav from './SearchPageNav';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchPageNav basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <SearchPageNav />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders FontAwesome site logo', () => {
        const renderer = shallow(
            <SearchPageNav />
        );

        expect(renderer.dive().find(FontAwesomeIcon).exists()).toBeTruthy();
    })
})
