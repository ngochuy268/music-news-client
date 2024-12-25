import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useNavbarController } from '../../../controllers/navbarcontroller';
import SearchBar from './SearchBar';
import SocialLinks from './SocialLink';
import "../../../css/style.css";

function Navbarfunc({ news, loading }) {
  const {
    isSticky,
    searchValue,
    searchResults,
    showResults,
    searchRef,
    getUniqueCategories,
    handleSearch,
    handleInputChange
  } = useNavbarController(news);

  const { types, authors } = getUniqueCategories();

  if(loading) return null;


  return (
    <div className={`nav-bar ${isSticky ? 'nav-sticky' : ''}`}>
      <Container>
        <Navbar className='nav-bar navbar-dark' expand="md">
          <Navbar.Brand href="#" className='navbar-brand'>MENU</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />

          <Navbar.Collapse id="navbarCollapse" className="justify-content-between">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" className="nav-item nav-link">Home</Nav.Link>
              <NavDropdown title="SINGER" id="basic-nav-dropdown" className="nav-item">
                {authors.map((author, index) => (
                  <NavDropdown.Item 
                    key={Math.random(index)} 
                    href={`/singer/${author.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="dropdown-item"
                  >
                    {author}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="TYPE" id="basic-nav-dropdown" className="nav-item">
                {types.map((type, index) => (
                  <NavDropdown.Item 
                    key={Math.random(index)} 
                    href={`/type/${type.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="dropdown-item"
                  >
                    {type}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="nav-item nav-link">Contact Us</Nav.Link>
            </Nav>
            
            <SearchBar 
              searchRef={searchRef}
              searchValue={searchValue}
              handleInputChange={handleInputChange}
              handleSearch={handleSearch}
              showResults={showResults}
              searchResults={searchResults}
            />
            
            <SocialLinks />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navbarfunc;