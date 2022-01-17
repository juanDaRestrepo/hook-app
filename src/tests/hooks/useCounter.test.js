
import { renderHook,act } from '@testing-library/react-hooks';
import { useCounter } from '../../Hooks/useCounter';

describe('Pruebas en el hook useCounter', () => {

    test('Debe de retornar valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );

        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
        
    });

    test('Debe de retornar el valor en el counter que le pase como parametro', () => {

        const { result } = renderHook( () => useCounter(11) );

        expect( result.current.counter ).toBe(11);        
    });

    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter(11) );
        const { increment } = result.current;

        act(() => {
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(12);
    })

    test('debe de disminuir el counter en 1', () => {

        const { result } = renderHook( () => useCounter(11) );
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(10);
    });

    test('debe de resetear al valor por defecto o pasado como aprametro del counter', () => {

        const { result } = renderHook( () => useCounter(11) );
        const { decrement } = result.current;
        const { reset } = result.current;

        act(() => {
            decrement();
            reset();
        });



        const {counter} = result.current;
        expect(counter).toBe(11);
    })
})