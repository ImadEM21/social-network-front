import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor, faBell } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@material-ui/core/Avatar';


const NavBar = (props) => {
    return ( 
        <Navbar bg="dark" expand={false}>
            <Navbar.Brand>
                <FontAwesomeIcon icon={faMeteor} color="white" size="2x" />
            </Navbar.Brand>
            <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Rechercher" className="rounded-0"/>
                <Button type="submit" className="rounded-0" variant="outline-light">Rechercher</Button>
            </Form>
            <NavDropdown id="notifications" title={<FontAwesomeIcon icon={faBell} color="white" />} className="ml-auto">
                <NavDropdown.Item>Notif</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
                <Avatar>I</Avatar>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    <Nav.Link href="/dashboard" className="text-white">Mon profil</Nav.Link>
                    <Nav.Link href="/friends" className="text-white">Amis</Nav.Link>
                    <Nav.Link href="/deconnexion" className="text-white">Déconnexion</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;