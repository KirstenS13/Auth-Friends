import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = props => {
    console.log('FriendForm props', props);

    const [newFriend, setNewFriend] = useState({
        id: 7,
        name: "",
        age: "",
        email: ""
    })

    const handleChanges = e => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
    }

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("friends", newFriend)
            .then(res => {
                console.log('addFriend res', res);
                props.getData();
            })
            .catch(err => {
                console.log(err);
            });
        setNewFriend({
            id: newFriend.id + 1,
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
                value={newFriend.name}
                onChange={handleChanges}
            />
            <label htmlFor="age">Age: </label>
            <input 
                type="number"
                name="age"
                id="age"
                placeholder="Enter friend's age..."
                value={newFriend.age}
                onChange={handleChanges}
            />
            <label htmlFor="email">Email: </label>
            <input 
                type="email"
                name="email"
                id="email"
                placeholder="Enter friend's email..."
                value={newFriend.email}
                onChange={handleChanges}
            />
            <button>Add Friend</button>
        </form>
    )
};

export default FriendForm;