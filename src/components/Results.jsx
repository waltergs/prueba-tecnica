import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import data from '../data/datos.json'

function Results({tipo_doc, num_doc, mostrar}) {
    console.log(tipo_doc);
    if(mostrar !== false){
        return (
            <Card>
                <Card.Header>
                    Resultados para {num_doc}:
                </Card.Header>
                <Card.Body>
                    { 
                        data.filter(usuarios => usuarios.tipo_doc == tipo_doc && usuarios.num_doc == num_doc).map(
                            usuario => 
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicNombre">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control type="text" value={usuario.nombres} disabled/>
                                </Form.Group> 
                                <Form.Group className="mb-3" controlId="formBasicApellido">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="text" value={usuario.apellidos} disabled/>
                                </Form.Group>
                            </Form>               
                        )
                    }
                </Card.Body>
            </Card>
        );
    } else {
        return('');
    }
        
    
}

export default Results;