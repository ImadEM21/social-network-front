import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ImageInput = (props) => {
    return ( 
        <Form.Group>
            <InputGroup>
                <InputGroup.Prepend className="w-100">
                    <InputGroup.Text className="input-icons rounded-0">
                        <FontAwesomeIcon icon={props.icon} />
                    </InputGroup.Text>
                    <Form.File />
                </InputGroup.Prepend>
            </InputGroup>
        </Form.Group>
     );
}
 
export default ImageInput;