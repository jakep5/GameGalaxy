import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
        const renderer = shallow(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGame />
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
                .find('.deleteGameButton').exists()).toBeTruthy();
    })

    it('folder game contains completed button', () => {
        const renderer = shallow(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGame />
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
                .find('.completeButton').exists()).toBeTruthy();
    })
})
