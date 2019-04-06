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
      /* to make routing work on gh-pages basename should be set to process.env.PUBLIC_URL as described here: 
      https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819 and 
      https://github.com/facebook/create-react-app/issues/1765 */
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
