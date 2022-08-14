import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';

const Footer =() =>{

    return(
        <Navbar className='justify-content-center' fixed="bottom"  bg="primary" variant="dark">
            <Nav >
                <Nav.Link  as={NavLink} className="" href="/">CoppyRight 2022</Nav.Link>
            </Nav>    
        </Navbar>
    )
}

export default Footer;