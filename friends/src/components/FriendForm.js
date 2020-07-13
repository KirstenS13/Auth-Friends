import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = () => {
    const [friendState, setFriendState] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChanges = e => {
        setFriendState({ ...friendState, [e.target.name]: e.target.value });
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth
            .post()
            .then()
            .catch();
        setFriendState({
            name: "",
            age: "",
            email: ""
        });
    }

    return (
        <form onSubmit={addFriend}>
            <label htmlFor="name">Name: </label>
            <input 
                type="text"
                name="name"
                id="name"
                placeholder="Enter friend's name..."
                value={friendState.name}
                onChange={handleChanges}
            />
            <label htmlFor="age">Age: </label>
            <input 
                type="number"
                name="age"
                id="age"
                placeholder="Enter friend's age..."
                value={friendState.age}
                onChange={handleChanges}
            />
            <label htmlFor="email">Email: </label>
            <input 
                type="email"
                name="email"
                id="email"
                placeholder="Enter friend's email..."
                value={friendState.email}
                onChange={handleChanges}
            />
            <button>Add Friend</button>
        </form>
    )
};

export default FriendForm;