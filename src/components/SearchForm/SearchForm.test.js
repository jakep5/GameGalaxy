import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import SearchForm from './SearchForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchForm basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <SearchForm />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders game title input field', () => {
        const renderer = shallow(
            <SearchForm />
        );

        expect(renderer.find('.nameInput').exists()).toBeTruthy();
    });

    it('component successfully renders submit button', () => {
        const renderer = shallow(
            <SearchForm />
        );

        expect(renderer.find('#callToActionButton').exists()).toBeTruthy();
    })
})
