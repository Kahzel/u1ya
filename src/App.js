import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TopCarousel from "./components/TopCarousel/TopCarousel";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import CardDisplay from "./components/CardDisplay/CardDisplay";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <Container fluid>
        <Row>
          <Col>
            <TopNavbar />
          </Col>
        </Row>
        <Row>
          <Col>
            <TopCarousel />
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDisplay />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
