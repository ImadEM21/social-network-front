import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import MainFooter from '../MainFooter';


const MainPage = (props) => {
    return (
        <Container fluid id="main-page" className="my-auto p-5">
            <header className="p-0 m-0">
            <Row className="mt-5 mb-0">
                <Col className="d-flex flex-column justify-content-between my-5">
                    <h1 className="text-center mb-3">Bienvenue sur Meteor</h1> 
                    <FontAwesomeIcon icon={faMeteor} color='white' size="6x" className="mx-auto mt-3"/>
                </Col>
            </Row>
            </header>
            <main>
            <Row className="mt-2 mb-5">
                <Col className="d-flex flex-md-row flex-column justify-content-around justify-content-md-center mt-5">
                    <Button href='/login' variant="outline-light" className="rounded-0 mx-md-3" size="lg">
                        Se connecter
                    </Button>
                    <p className="text-center my-3 mx-md-3">OU</p>
                    <Button href='/signup' variant="success" className="rounded-0 mx-md-3" size="lg">
                        Créer un compte
                    </Button>
                </Col>
            </Row>
            </main>
            <footer className="pt-5 mt-5">
                <MainFooter />
            </footer>
        </Container>
     );
}
 
export default MainPage;