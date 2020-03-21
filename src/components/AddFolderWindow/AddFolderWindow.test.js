import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import noFoldersContext from '../../testStore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import styles from './styles.module.css';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import AddFolderWindow from './AddFolderWindow';

Enzyme.configure({ adapter: new Adapter() });

describe('AddFolderWindow basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <AddFolderWindow />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component renders successfully without folders added', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={noFoldersContext}>
                    <AddFolderWindow />
                </GamesProvider>
            </BrowserRouter>
        , div)
    });

    it('component successfully renders add folder toggle button', () => {
        const render = shallow(<AddFolderWindow />);

        expect(render.find('#addFolderButton').exists()).toBeTruthy();
    });
})