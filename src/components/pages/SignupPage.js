import React from 'react';
import SignUp from '../Forms/SignUp';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const SignupPage = (props) => {
    return ( 
        <Container fluid id="signup-page" className="p-5">
            <main>
                <Row className="mt-5">
                    <Col className="d-flex justify-content-center h-100">
                        <Card className="card-style">
                            <Card.Header>
                                <h3>Créer un compte</h3>
                                <div className="d-flex justify-content-end social-icons">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <SignUp />
                            </Card.Body>
                            <Card.Footer>
                                <p className="text-center">
                                    Vous avez déjà un compte ? <a href='/login'>Connectez-vous</a>
                                </p>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </main>
        </Container>
     );
}
 
export default SignupPage;