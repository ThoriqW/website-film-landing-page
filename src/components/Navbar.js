import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">THORFILMS</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">TRENDING</Nav.Link>
          <NavDropdown title="GENRE" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Drama</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
