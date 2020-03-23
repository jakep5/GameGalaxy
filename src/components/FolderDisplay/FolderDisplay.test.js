import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import noFoldersContext from '../../testStore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import FolderDisplay from './FolderDisplay';

Enzyme.configure({ adapter: new Adapter() });

describe('FolderDisplay basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderDisplay />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });
})