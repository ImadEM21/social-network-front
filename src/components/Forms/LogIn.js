import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import SignUpUser from './Inputs/SignUpUser';
import RememberUser from './Inputs/RememberUser';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

const LogIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        alert(`mail: ${email}, password: ${password}, remember: ${remember}`);
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <SignUpUser icon={faUser} value={email} placeholder="Email" type="email" required={true} 
            onValueChange={(value) => setEmail(value)} name="email"/>
            <SignUpUser icon={faKey} value={password} placeholder="Mot de passe" type="password" required={true} 
            onValueChange={value => setPassword(value)} name="password"/>
            <RememberUser value={remember} onValueChange={(value) => setRemember(value)}/>
            <Button variant="warning" type="submit">
                Se connecter
            </Button>
            <p className="text-muted mt-3"><span className="text-warning">*</span> Champs obligatoires</p>
        </Form>
     );
}
 
export default LogIn;