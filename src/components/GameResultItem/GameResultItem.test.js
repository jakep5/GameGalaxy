import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from '../../testStore';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider from '../../contexts/GamesContext';
import GameResultItem from './GameResultItem';

Enzyme.configure({ adapter: new Adapter() });

describe('GameResultItem basic smoke tests', () => {
    it('component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <GameResultItem />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    })

    it('component successfully renders add to folder button', () => {
        const render = shallow(<GameResultItem />);
    
        expect(render.find('button').exists()).toBeTruthy();
    });
})
