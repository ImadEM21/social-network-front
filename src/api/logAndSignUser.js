import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});


export const signUpUser = data => {
    return api.post('/signup', data);
};

export const logInUser = data => {
    return api.post('/login', data);
};


const logAndSignUser = {
    signUpUser,
    logInUser
};

export default logAndSignUser;

