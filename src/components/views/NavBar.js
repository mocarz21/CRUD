import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
const NavBar =() =>{

    return(
      
        <Navbar  bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand href="/">Blog.app</Navbar.Brand>
                <Nav className="me-2 ">
                    <Nav.Link as={NavLink} to="/">Home </Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        
    )
}

export default NavBar