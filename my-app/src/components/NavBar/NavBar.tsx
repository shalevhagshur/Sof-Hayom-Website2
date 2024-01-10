// components/NavBar/NavBar.tsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/img/sof_hayom_logo_transparent-modified.png';
import typography from '../../assets/img/TypographyFixed.png';
import './NavBar.css';

const NavBar = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll distance as needed
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg" className={shrink ? 'shrink' : ''}>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="navbar-logo d-inline-block align-top"
            alt="Sof Hayom Logo"
          />
          <img
            src={typography}
            className="navbar-typography"
            alt="Sof Hayom Typography"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
            <Nav.Link href="#The App">The App</Nav.Link>
            <Nav.Link href="#Q&A">Q&A</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;