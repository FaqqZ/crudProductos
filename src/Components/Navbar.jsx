import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/AcercaDeNosotros">Acerca de nosotros</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link> */}

            <NavLink to='/' className={'nav-link'}>Inicio</NavLink>
            <NavLink to='/AcercaDeNosotros' className={'nav-link'}>Acerca de nosotros</NavLink>
            <NavLink to='/admin' className={'nav-link'}>Admin</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
