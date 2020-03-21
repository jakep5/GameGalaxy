import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import noFoldersContext from '../../testStore';
import Enzyme from 'enzyme';
import styles from './styles.module.css';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import FolderDisplay from './FolderDisplay';
import FolderApiServiceObject from '../../services/folder-api-service';

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

    it('successfully renders add folder button', () => {
        const render = shallow(
            
                    <FolderDisplay />
                
        )

        expect(render.find('#addFolderButton')).toHaveLength(1);
    })

    it('renders no folder names when no folders are saved', () => {

        const render = shallow(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderDisplay />
                </GamesProvider>
            </BrowserRouter>
        );

        expect(render.find('li').exists()).toBeFalsy();
    })
})