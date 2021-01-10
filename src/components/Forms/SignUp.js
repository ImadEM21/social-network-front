import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { faUser, faEnvelope, faInfo, faKey, faPhone, faGlobe, faCamera } from '@fortawesome/free-solid-svg-icons';
import SignUpUser from './Inputs/SignUpUser';
import CountryInput from './Inputs/CountryInput';
import ImageInput from './Inputs/ImageInput';
import logAndSignUser from '../../api/logAndSignUser';

const SignUp = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('France');
    const [userImage, setUserImage] = useState(null);


    const handleSubmit = e => {
        e.preventDefault();


        const newUser = new FormData();
        newUser.append('username', username);
        newUser.append('userImage', userImage);
        newUser.append('email', email);
        newUser.append('firstName', firstName);
        newUser.append('lastName', lastName);
        newUser.append('password', password);
        newUser.append('phone', phone);
        newUser.append('country', country);
        
        logAndSignUser.signUpUser(newUser)
        .then(res => {
            alert('Utilisateur créer avec succès');
            console.log(res.data);
        })
        .catch(error => console.log(error.response));
    }

    return ( 
        <Form onSubmit={handleSubmit}>
            <SignUpUser icon={faUser} placeholder="Pseudo" type="text" name="username" required={true}
            value={username} onValueChange={(value) => setUsername(value)} />
            <SignUpUser icon={faEnvelope} placeholder="Email" type="email" name="email" required={true}
            value={email} onValueChange={(value) => setEmail(value)} />
            <SignUpUser icon={faInfo} placeholder="Prénom" type="text" name="firstName" required={true}
            value={firstName} onValueChange={(value) => setFirstName(value)} />
            <SignUpUser icon={faInfo} placeholder="Nom" type="text" name="lastName" required={true}
            value={lastName} onValueChange={(value) => setLastName(value)} />
            <SignUpUser icon={faKey} placeholder="Mot de passe" type="password" name="password" required={true}
            value={password} onValueChange={(value) => setPassword(value)} />
            <SignUpUser icon={faKey} placeholder="Confirmer le mot de passe" type="password" name="confirmPassword" 
            required={true} value={confirmPassword} onValueChange={(value) => setConfirmPassword(value)} />
            <SignUpUser icon={faPhone} placeholder="Numéro de téléphone" type="number" name="phone" required={false}
            value={phone} onValueChange={(value) => setPhone(value)} />
            <CountryInput icon={faGlobe} name="country" value={country} onValueChange={(value) => setCountry(value)}/>
            <ImageInput icon={faCamera} name="userImage" 
            onValueChange={(value) => setUserImage(value)}/>
            <Button variant="warning" type="submit">
                Créer un compte
            </Button>
            <p className="text-muted mt-3"><span className="text-warning">*</span> Champs obligatoires</p>
        </Form>
     );
}
 
export default SignUp;