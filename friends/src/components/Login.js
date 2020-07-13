import React, {useState} from 'react';

const Login = () => {
    const [formState, setFormState] = useState({
        credentials: {
            username: "",
            password: ""
        }
    })

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
    };

    return (
        <>
            <form>
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
                <button>Login</button>
            </form>
        </>
    )
}

export default Login;