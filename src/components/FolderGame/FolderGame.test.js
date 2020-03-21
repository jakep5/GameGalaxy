import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider, { GamesConsumer } from '../../contexts/GamesContext';
import FolderGame from './FolderGame';

Enzyme.configure({ adapter: new Adapter() });

describe('FolderGame basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGame />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('folder game contains delete button', () => {
        const shallowRender = shallow(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGame />
                </GamesProvider>
            </BrowserRouter>
        );

        expect(shallowRender.find('#deleteGameButton')).to.have.lengthOf(1);
    })
})
