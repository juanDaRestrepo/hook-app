import React from 'react';
import { shallow } from 'enzyme';
import {MultipleCustomHooks} from "../../../components/03-examples/MultipleCustomHooks";
import setupTest from '../../../setupTest';
import { useFetch } from '../../../Hooks/useFetch';

describe('Pruebas en <MultipleCustomHooks />' , () => {

    test('Debe de mostrarse correctamente', () => {

        const wrapper = shallow(<MultipleCustomHooks />);
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostar la información', () => {
      
    });
    
})