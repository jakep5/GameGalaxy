import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow} from 'enzyme';
import GamesProvider from '../../contexts/GamesContext';
import TestObject from '../../testStore';
import CompletedIcon from './CompletedIcon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

Enzyme.configure({ adapter: new Adapter() });

describe('Basic smoke tests', () => {
    it('Completed icon renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <CompletedIcon />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Completed icon successfuly displays FontAwesome icon', () => {
        const render = shallow(<CompletedIcon />);

        expect(render.find('#checkIcon').exists()).toBe(true);
    })
})