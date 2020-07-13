import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers';
import axios from 'axios';

const Login = () => {
    const [formState, setFormState] = useState({
        credentials: {
            username: "",
            password: ""
        },
        isLoading: false
    });
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setFormState({ ...formState, credentials: { ...formState.credentials, [e.target.name]: e.target.value }})
    };

    const handleSubmit = e => {
        e.preventDefault();
        setFormState({...state, isLoading: true});
        dispatch({ type: "LOGIN", payload: formState});
        axios.post()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username..."
                    value={formState.credentials.username}
                    onChange={handleChanges}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password..."
                    value={formState.credentials.password}
                    onChange={handleChanges}
                />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;