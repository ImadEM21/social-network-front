import React from 'react';
import { Form } from 'react-bootstrap';


const RememberUser = (props) => {

    const handleChange = e => {
        props.onValueChange(e.target.checked);
    }

    return ( 
        <Form.Group>
            <Form.Check type="checkbox" label="Se souvenir de moi" onChange={handleChange}/>
        </Form.Group>
     );
}
 
export default RememberUser;