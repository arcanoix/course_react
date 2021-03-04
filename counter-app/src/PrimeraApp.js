import React, { Fragment } from 'react';


const PrimeraApp = ( { saludo = 'Hola ' } ) => {

   
    return (
        <Fragment>
            <h1> { saludo } </h1>
            <p>primera aplicacion</p>
        </Fragment>
    );

}



export default PrimeraApp;