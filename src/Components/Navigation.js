import React from 'react';
import {Navbar,Container, Nav} from 'react-bootstrap';
import {IoLogoVimeo} from 'react-icons/io';
import '../Styles/navbar.css'

function Navigation() {
  return (
    <Navbar expand ='lg'>
      <Container className='p-4'>
        <Navbar.Text ><IoLogoVimeo className='logo'/></Navbar.Text>
        <Navbar.Brand href="#home"> Business</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
          <Nav.Link>
            Home
          </Nav.Link>
          <Nav.Link>
            About
          </Nav.Link>
          <Nav.Link>
            People
          </Nav.Link>
          <Nav.Link>
            Blog
          </Nav.Link>
          <Nav.Link>
            Service
          </Nav.Link>
          <Nav.Link>
            Contact
          </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  )
}

export default Navigation




