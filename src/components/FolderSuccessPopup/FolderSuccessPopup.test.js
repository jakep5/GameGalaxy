import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GamesProvider from '../../contexts/GamesContext';
import { GamesConsumer } from '../../contexts/GamesContext';
import FolderSuccessPopup from './FolderSuccessPopup';

Enzyme.configure({ adapter: new Adapter() });

describe('FolderSuccessPopup basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderSuccessPopup />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders success message', () => {
        const wrapper = shallow(mount(
                    <FolderSuccessPopup>
                        <GamesConsumer value={TestObject} />
                    </FolderSuccessPopup>
            ).find('#successPopup'));

        expect(wrapper.find('p').shallow.length).toBe(1);

        /* console.log(wrapper.debug()); */
    })
})
