import React from 'react';
import { Form } from 'react-bootstrap';


const RememberUser = (props) => {
    return ( 
        <Form.Group>
            <Form.Check type="checkbox" label="Se souvenir de moi" />
        </Form.Group>
     );
}
 
export default RememberUser;