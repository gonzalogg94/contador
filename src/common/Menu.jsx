import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home">Acerca de mi</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
