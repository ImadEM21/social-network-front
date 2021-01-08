import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LogIn from '../Forms/LogIn';


const LoginPage = (props) => {
    return ( 
        <Container fluid id="login-page" className="p-5">
            <main>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center h-100">
                    <Card className="card-style">
                        <Card.Header>
                            <h3>Se connecter</h3>
                        </Card.Header>
                        <Card.Body>
                            <LogIn />
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                Vous n'avez pas de compte ? Alors <a href='/signup' className="ml-1">inscrivez-vous</a>.
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href='/forgot-password'>Mot de passe oubié ?</a>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            </main>
        </Container>
     );
}
 
export default LoginPage;