import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [formState, setFormState] = useState({
        credentials: {
            username: "Lambda School",
            password: "i<3Lambd4"
        },
        isLoading: false
    })

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    const handleLogin = e => {
        e.preventDefault();
        setFormState({ ...formState, isLoading: true });
        axios
            .post("http://localhost:5000/api/login", formState.credentials)
            .then(res => {
                console.log('res', res);
                setFormState({ ...formState, isLoading: false});
                localStorage.setItem("token", res.data.payload);
                //history.push("/friendslist");
            })
            .catch(err => {
                console.log('err', err);
            })
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username..."
                    value={formState.username}
                    onChange={handleChanges}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password..."
                    value={formState.password}
                    onChange={handleChanges}
                />
                <button>{formState.isLoading === true ? <p>Loading...</p> : "Login"}</button>
            </form>
        </>
    )
}

export default Login;