import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Contexttri } from './TriContext';

function NavScrollExample() {
  const { argument, update } = useContext(Contexttri);
  const [selectedValue, setSelectedValue] = useState(null);
  const [dinamic, setDinamic] = useState(window.innerWidth > 768 ? '80px' : 'auto');
  const [dropdownHeight, setDropdownHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setDinamic(window.innerWidth > 800 ? '80px' : 'auto');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (eventKey) => {
    update(eventKey);
    setSelectedValue(eventKey);
    console.log(eventKey);
  };

  const handleDropdownToggle = (isOpen, event, metadata) => {
    if (isOpen) {
      setDropdownHeight(metadata?.menuHeight || 0);
      setDinamic(`${metadata?.menuHeight + 20}px`); // 20px pour le padding
    } else {
      setDinamic(window.innerWidth > 768 ? '80px' : 'auto');
    }
  };

  return (
    <div>
      <div style={{ paddingBottom: dinamic }}>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ height: dinamic }}  >
          <Container fluid>
          <Navbar.Brand >  <FontAwesomeIcon icon={faShoppingCart} size="2x" color="black" />  </Navbar.Brand>
            <Navbar.Brand style={{ fontFamily: "fantasy" }}> FIDELE-SHOPPING</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                
                <Nav.Link href="#action2">Nouveautés</Nav.Link>
                <NavDropdown
                  title="Trier par types:"
                  id="navbarScrollingDropdown"
                  onSelect={handleSelect}
                  onToggle={handleDropdownToggle}
                >
                  <NavDropdown.Item eventKey="vetement">Vêtement</NavDropdown.Item>
                  <NavDropdown.Item eventKey="electronique">Électronique</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="autres">Autres</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Banner />
      
    </div>
  );
}

export default NavScrollExample;
