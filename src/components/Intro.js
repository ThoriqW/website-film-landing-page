import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro d-flex align-items-end">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">REKOMENDASI FILM</div>
            <div className="title">TERLENGKAP DAN TERBARU</div>
            <div className="introButton mt-4 text-center">
              <Button variant="light">List Film</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
