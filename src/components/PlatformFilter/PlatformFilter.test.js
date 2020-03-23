import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import GamesConsumer from '../../contexts/GamesContext';
import PlatformFilter from './PlatformFilter';

Enzyme.configure({ adapter: new Adapter() });

describe('PlatformFilter basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <PlatformFilter />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('component successfully renders 6 platform options', () => {
        const renderer = shallow(
            <PlatformFilter>
                <GamesConsumer value={TestObject}/>
            </PlatformFilter>
        );

        expect(renderer.dive().find('li').length).toBe(6);
    })
})
