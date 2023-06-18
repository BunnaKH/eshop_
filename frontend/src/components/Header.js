import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
 <header>
    <Navbar bg="dark" variant ='dark' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to ='/'>
        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{marginLeft:"auto"}}>
            <LinkContainer to="/cart">
            <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>        
            <LinkContainer to="/login">
            <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </header>
  )
}

export default Header
