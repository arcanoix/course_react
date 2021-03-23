
describe('Pruebas en el archivo demo.test.js', () => {
    
    test('debe ser iguales los string',  ()  =>  {
    
        const message = 'Hola Mundo';
        const message2 = 'Hola Mundo';

        expect( message ).toBe(message2);
    
    })

});




