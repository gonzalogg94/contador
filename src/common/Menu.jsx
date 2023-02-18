import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Menu = () => {
  return (
    <Navbar className="bg-dark py-4 text-center">
      <Container>
        <Navbar.Brand href="#home" className="text-white">Inicio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand href="#home" className="text-white">Acerca de mi</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
