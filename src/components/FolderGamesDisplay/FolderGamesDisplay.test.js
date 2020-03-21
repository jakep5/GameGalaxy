import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import FolderGameDisplay from './FolderGamesDisplay';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';

Enzyme.configure({ adapter: new Adapter() });

describe('FolderGameDisplay basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGameDisplay />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders item holder div', () => {
        const shallowRender = shallow(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGameDisplay />
                </GamesProvider>
            </BrowserRouter>
        );
        expect(shallowRender.find('#itemsHolder')).to.have.length(1);
    })
})
