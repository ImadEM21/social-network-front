import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SignUpUser from './Inputs/SignUpUser';
import RememberUser from './Inputs/RememberUser';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const LogIn = (props) => {
    return ( 
        <Form>
            <SignUpUser icon={faUser} placeholder="Email" type="email" required={true}/>
            <SignUpUser icon={faKey} placeholder="Mot de passe" type="password" required={true}/>
            <RememberUser />
            <Button variant="warning" type="submit">
                Se connecter
            </Button>
            <p className="text-muted mt-3"><span className="text-warning">*</span> Champs obligatoires</p>
        </Form>
     );
}
 
export default LogIn;