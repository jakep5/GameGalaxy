import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import { BrowserRouter } from 'react-router-dom';
import Enzyme from 'enzyme';
import dive from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import GamesProvider, { GamesConsumer } from '../../contexts/GamesContext';
import GenreFilter from './GenreFilter';

Enzyme.configure({ adapter: new Adapter() });

describe('GenreFilter basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <GenreFilter />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders 9 filter options', () => {
        const renderer = shallow(
            <GenreFilter >
                <GamesConsumer value={TestObject}/>
            </GenreFilter>                            
        );

        expect(renderer.dive().find('li').length).toBe(9);
    })
})
