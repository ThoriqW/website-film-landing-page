import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro d-flex align-items-end">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col className="text-center">
            <div className="title">GET RECOMENDATION</div>
            <div className="title">OR GET OUT.</div>
            <p className="sub-title">Best Place To Find You Favorite Movie</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
