
import React from 'react';
import setupTest from '../setupTest';
import { HookApp } from '../HookApp';
import {shallow} from 'enzyme';


describe('Pruebas en Hook App', () => {

    test('Debe de mostrar el <HookApp /> correctamente', () => {

        const wrapper = shallow(<HookApp />);
        expect ( wrapper ).toMatchSnapshot(); 

    })

})

