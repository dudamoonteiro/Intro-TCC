'use client'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export function MyNavbar2() {
    return (
        <Navbar className="mynav">
            <Container>
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Nav className="me-auto">
                    <h1>COND TRACK</h1>                   
                </Nav>
            </Container>
        </Navbar>
    );
}
