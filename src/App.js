import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main';
import Navigation from './components/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="App">
          <Row>
            <Col xs={12} md={4} className="bg-light">
              <Navigation />
            </Col>
            <Col xs={12} md={8}>
              <Main />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
