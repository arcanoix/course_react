import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe( 'Pruebas en 02-template-strings' , () => {
        test('getSaludo debe de retornar hola gustavo', () => {

            const nombre = 'gustavo';

            const saludo = getSaludo( nombre );
        
            expect(saludo).toBe( 'Hola ' + nombre);
        })

        test('getSaludo debe retornar valor por defaul si no pasa argumento ', () => {
            
                const saludo = getSaludo();
                const nombre = 'DAIRY';

               expect(saludo).toBe('Hola ' + nombre)
        })
        
        
});