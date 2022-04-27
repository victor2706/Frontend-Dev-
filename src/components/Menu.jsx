import React from 'react'
import { Card, Carousel, Container, Nav, Navbar, Row, link, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

<Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/Artworks">Museu do Frontend</Navbar.Brand>
          <Navbar.Brand href="/obradetalhes">Obras de Arte</Navbar.Brand>
          <Nav className="me-auto">
          <NavDropdown title="Tipos" className="show" id="basic-nav-dropdown">
          <Link className="dropdown-item" to="">Time Based Media</Link>
          <Link className="dropdown-item" to="">Materials</Link>
          <Link className="dropdown-item" to="">Equipment</Link>
          <Link className="dropdown-item" to="">Painting</Link>
          <Link className="dropdown-item" to="">Photograph</Link>
          <Link className="dropdown-item" to="">Sculpture</Link>
          <Link className="dropdown-item" to="">Icon</Link>
          <Link className="dropdown-item" to="">Taxtile</Link>
          <Link className="dropdown-item" to="">Furniture</Link>
          <Link className="dropdown-item" to="">Decorative Arts</Link>
          <Link className="dropdown-item" to="">Audio - Video</Link>
          <Link className="dropdown-item" to="">Cstume and Accessories</Link>
          </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

        <br />


    </div>
  )
}

export default Menu