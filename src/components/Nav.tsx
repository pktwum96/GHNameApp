import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
            <>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="dark"
                    variant="dark"
                >
                    <Container>
                        <Navbar.Brand href="#home">
                            Ghanaian Name Generator
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">
                                    Home
                                </Nav.Link>
                                <Nav.Link href="#pricing">
                                    Learn More
                                </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">
                                    Share{' '}
                                    <i className="bi bi-share"></i>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavigationBar;
