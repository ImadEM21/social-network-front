import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { faUser, faEnvelope, faInfo, faKey, faPhone, faGlobe, faCamera } from '@fortawesome/free-solid-svg-icons';
import SignUpUser from './Inputs/SignUpUser';
import CountryInput from './Inputs/CountryInput';
import ImageInput from './Inputs/ImageInput';

const SignUp = (props) => {
    return ( 
        <Form>
            <SignUpUser icon={faUser} placeholder="Pseudo" type="text" required={true}/>
            <SignUpUser icon={faEnvelope} placeholder="Email" type="email" required={true}/>
            <SignUpUser icon={faInfo} placeholder="Prénom" type="text" required={true}/>
            <SignUpUser icon={faInfo} placeholder="Nom" type="text" required={true}/>
            <SignUpUser icon={faKey} placeholder="Mot de passe" type="password" required={true}/>
            <SignUpUser icon={faKey} placeholder="Confirmer le mot de passe" type="password" required={true}/>
            <SignUpUser icon={faPhone} placeholder="Numéro de téléphone" type="number" required={false}/>
            <CountryInput icon={faGlobe} />
            <ImageInput icon={faCamera} />
            <Button variant="warning" type="submit">
                Créer un compte
            </Button>
            <p className="text-muted mt-3"><span className="text-warning">*</span> Champs obligatoires</p>
        </Form>
     );
}
 
export default SignUp;