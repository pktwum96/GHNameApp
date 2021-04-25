import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
interface NavigationBarProps {
    handleShow: () => void;
}

interface NavigationLink {
    path: string;
    displayText: string;
}

export const NavigationBar = (props: NavigationBarProps) => {
    const { pathname } = useLocation();

    const homeLink: NavigationLink = {
        path: '/',
        displayText: 'Ghanaian Name Generator',
    };

    const navLinks: NavigationLink[] = [
        {
            path: '/random',
            displayText: 'Random Name',
        },
        {
            path: '/resultName',
            displayText: 'Find Name',
        },
        {
            path: '/learn',
            displayText: 'Learn More',
        },
    ];
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container className="col-lg-9">
                    <Link className="navbar-brand" to={homeLink.path}>
                        {homeLink.displayText}
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {navLinks.map((navLink) => (
                                <Link
                                    className="nav-link"
                                    to={navLink.path}
                                >
                                    {navLink.displayText}
                                </Link>
                            ))}
                        </Nav>
                        <Nav onClick={props.handleShow}>
                            <Link
                                className="nav-link"
                                to={`${pathname}/share`.replace(
                                    /\/\//g,
                                    '/',
                                )}
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
