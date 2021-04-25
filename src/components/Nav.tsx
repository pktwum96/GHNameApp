import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
interface NavigationBarProps {
    handleShow: () => void;
}

export const NavigationBar = (props: NavigationBarProps) => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Link className="navbar-brand" to="/">
                        Ghanaian Name Generator
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link
                                className="nav-link"
                                to="/resultName"
                            >
                                Find Name
                            </Link>

                            <Link className="nav-link" to="/learn">
                                Learn More
                            </Link>
                        </Nav>
                        <Nav onClick={props.handleShow}>
                            <Link
                                className="nav-link"
                                to={{
                                    pathname: '/share',
                                    state: {
                                        showModal: true,
                                    },
                                }}
                            >
                                Share <i className="bi bi-share"></i>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
