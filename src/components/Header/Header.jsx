import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="header-bg">
            <Container>
                <Navbar.Brand href="/">Smarty Pants.</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                        <Nav.Link as={Link} to='/statistics'>Statistics</Nav.Link>
                        <Nav.Link as={Link} to='/signup' className="join-now">Join Now</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;