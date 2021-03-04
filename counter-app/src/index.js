import React from 'react';
import ReactDom from 'react-dom';
//import PrimeraApp from './PrimeraApp';

import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

//<PrimeraApp saludo="Hola soy gustavo" />

ReactDom.render( <CounterApp  />  , divRoot);

