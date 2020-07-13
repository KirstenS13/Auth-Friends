import axios from 'axios';

export const LOGIN = "LOGIN";

export const login = formState => dispatch => {
    console.log("login action creator");
    dispatch({ type: LOGIN, payload: formState});
    axios
        .post("http://localhost:5000/api/login", formState.credentials)
        .then(res => {
            console.log('res', res);
        })
        .catch(err => {
            console.log('err', err);
        })
}