import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar,Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function MyNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
<NavLink to='/' className='nav-link'>
<Navbar.Brand >Movies__Land</Navbar.Brand>
</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/movies">movies</NavLink>
            <NavLink className="nav-link"  to="/movies/0/edit">add movie</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
