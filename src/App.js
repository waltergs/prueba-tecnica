
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './components/Login.jsx'
import Results from './components/Results.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {  
  const [tipo_doc, onTipoChange] = useState('');
  const [num_doc, onNumChange] = useState('');
  const [mostrar, setMostrar] = useState(false);
  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <main className='App-main'>
        <Container>
          <Row>
            <Col>
              <Login 
                tipo_doc={tipo_doc} 
                num_doc={num_doc} 
                onTipoChange={onTipoChange} 
                onNumChange={onNumChange}
                mostrar={mostrar}
                setMostrar={setMostrar} />
            </Col>
            <Col>
              <Results 
                tipo_doc={tipo_doc} 
                num_doc={num_doc}
                mostrar={mostrar} />
            </Col>
          </Row>
        </Container>      
      </main>
      <footer className="App-footer">        
      </footer>
    </div>
  );
}

export default App;
