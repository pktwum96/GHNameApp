import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SocialsModal } from './SocialsModal';

export const NavigationBar = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                Find Name
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                Learn More
                            </Nav.Link>
                        </Nav>
                        <Nav onClick={handleShow}>
                            <Nav.Link>
                                Share <i className="bi bi-share"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SocialsModal show={show} handleClose={handleClose} />
        </>
    );
};

export default NavigationBar;
