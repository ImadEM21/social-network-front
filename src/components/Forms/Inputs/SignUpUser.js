import React from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SignUpUser = (props) => {
    return ( 
        <Form.Group>
            <InputGroup>
                <InputGroup.Prepend className="w-100">
                    <InputGroup.Text className="input-icons rounded-0">
                        <FontAwesomeIcon icon={props.icon} />
                    </InputGroup.Text>
                    <FormControl type={props.type} placeholder={props.placeholder} className="rounded-0" required={props.required}/>
                    {props.required ?
                        <span className="text-warning ml-2">*</span>
                    : null}
                </InputGroup.Prepend>
            </InputGroup>
        </Form.Group>
     );
}
 
export default SignUpUser;