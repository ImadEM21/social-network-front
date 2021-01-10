import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ImageInput = (props) => {

    const handleChange = files => {
        const image = files[0];
        props.onValueChange(image)
    };

    return ( 
        <Form.Group>
            <InputGroup>
                <InputGroup.Prepend className="w-100">
                    <InputGroup.Text className="input-icons rounded-0">
                        <FontAwesomeIcon icon={props.icon} />
                    </InputGroup.Text>
                    <Form.File name={props.name} onInput={(e) => handleChange(e.target.files)}/>
                </InputGroup.Prepend>
            </InputGroup>
        </Form.Group>
     );
}
 
export default ImageInput;