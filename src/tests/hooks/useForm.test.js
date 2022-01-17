import { renderHook,act } from '@testing-library/react-hooks';
import { useForm } from '../../Hooks/useForm';


describe('Pruebas en el hook useForm', () => {
   
    const initialForm = {
        name: 'Daniel',
        email: 'daniel@gmail.com'
    }
    
    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const[ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('debe de cambiar el valor del formulario', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const[ , handleInputChange ] = result.current;
        
        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Julian'
                }
            });
        });

        const [formValues] =  result.current;
        expect( formValues ).toEqual( {...initialForm, name: 'Julian'})
    });

    test('debe de resetaer el valor del formulario', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const[ , handleInputChange, reset ] = result.current;
        
        act(() => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Julian'
                }
            });

            reset();

        });

        const [formValues] =  result.current;
        expect( formValues ).toEqual( initialForm )
    })
})