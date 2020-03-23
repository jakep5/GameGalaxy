import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import ReviewFilter from './ReviewFilter';

Enzyme.configure({ adapter: new Adapter() });


describe('ReviewFilter basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <ReviewFilter />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders review input field', () => {
        const renderer = shallow(
            <ReviewFilter />
        );

        expect(renderer.dive().find('input').exists()).toBeTruthy();
    })
})
