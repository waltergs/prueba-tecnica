import React, { useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login({tipo_doc, onTipoChange, num_doc, onNumChange, mostrar, setMostrar}) {

    const manejarEnvio = (event) => {
        event.preventDefault(); 
        setMostrar(true);
    };

    
    return(        
        <Card>
            <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicDocument">
                    <Form.Label>Tipo de Documento</Form.Label>
                    <Form.Select id="docSelect" onChange={(e) => onTipoChange(e.target.value)}>
                        <option>Seleciona tipo</option>
                        <option value={1}>Cédula de Ciudadanía</option>
                        <option value={2}>Pasaporte</option>
                    </Form.Select>                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Número de Documento</Form.Label>
                    <Form.Control type="numero" min="8" max="10" placeholder="Digita el número" value={num_doc} onChange={(e) => onNumChange(e.target.value)}/>
                </Form.Group>                
                <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={!num_doc && !tipo_doc ? true : false}
                    onClick={manejarEnvio}>
                    Buscar
                </Button>
            </Form> 
            
            </Card.Body>
        </Card>
        
    );

}

export default Login;