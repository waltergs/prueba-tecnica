import React, {useState} from "react";
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react/';
import Login from './Login';

test('renders content', () => { 
    const [tipo_doc, onTipoChange] = useState('');
    const [num_doc, onNumChange] = useState('');
    const [mostrar, setMostrar] = useState(false);

 })

 const component = render(<Login 
    tipo_doc={tipo_doc} 
    num_doc={num_doc} 
    onTipoChange={onTipoChange} 
    onNumChange={onNumChange}
    mostrar={mostrar}
    setMostrar={setMostrar} />);

console.log(component)
