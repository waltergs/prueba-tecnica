import React, {useState} from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react/';
import Results from './Results';

test('renders content', () => { 
    const tipo_doc = '';
    const num_doc = '';
    const mostrar = '';

 })

 const component = render( <Results 
    tipo_doc={tipo_doc} 
    num_doc={num_doc}
    mostrar={mostrar} />);

console.log(component)