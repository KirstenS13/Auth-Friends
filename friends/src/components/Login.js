import React, {useState} from 'react';
import {login} from '../actions';

const Login = () => {
    const [formState, setFormState] = useState({
        credentials: {
            username: "",
            password: ""
        },
        isLoading: false
    });

    const handleChanges = e => {
        setFormState({ ...formState, credentials: { ...formState.credentials, [e.target.name]: e.target.value }})
    };

    const handleSubmit = e => {
        e.preventDefault();
        setFormState({...formState, isLoading: true});
        login(formState);
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