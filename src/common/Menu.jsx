import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link,NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar className="bg-dark py-4 text-center pb-5">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">Inicio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand as={Link} to="/nosotros" className="text-white">Acerca de mi</Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
