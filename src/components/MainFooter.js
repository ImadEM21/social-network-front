import React from 'react';
import { Row, Col } from 'react-bootstrap';


const MainFooter = (props) => {
    return ( 
        <Row>
            <Col>
                <p className="text-muted mb-0">
                    &copy; 2021 <a href="https://imadelmahrad.com" className="text-muted">Imad Elmahrad</a>
                </p>
            </Col>
        </Row>
     );
}
 
export default MainFooter;