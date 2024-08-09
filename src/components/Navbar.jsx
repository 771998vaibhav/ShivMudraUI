import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarmain = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor:"#ffe6cc",height: "100px"}}>
    <Container fluid className="d-flex justify-content-between align-items-center">
      <Navbar.Brand href="#" className="me-auto">
        <img
          src="src/images/shivmudraLogo.png" // Replace with your image URL
          alt="Brand Logo"
          width="105"
          height="105"
          className="d-inline-block align-top"
          style={{ marginRight: "10px" }}
        />
      </Navbar.Brand>
      <Nav className="mx-auto" style={{ color: "#333333", fontWeight: "bold", position: "absolute", left: "50%", transform: "translateX(-50%)", fontFamily:"Georgia",fontSize:"25px" }}>
        T-Shirt 2024
      </Nav>

    </Container>
  </Navbar>
  
  
  )
}

export default Navbarmain
