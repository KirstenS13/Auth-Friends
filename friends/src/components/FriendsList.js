import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

/* const fakeFriends = [
    {
        id: 0,
        name: "Kris",
        age: 23,
        email: "kris@gmail.com"
    },
    {
        id: 1,
        name: "Chris",
        age: 24,
        email: "chris@gmail.com"
    },
    {
        id: 2,
        name: "Krys",
        age: 21,
        email: "krys@gmail.com"
    },
    {
        id: 3,
        name: "Chrys",
        age: 20,
        email: "chrys@gmail.com"
    }
] */

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    /* useEffect(() => {
        setFriends(fakeFriends);
    }, []); */
    
    const getData = () => {
        axiosWithAuth()
            .get("friends")
            .then(res => {
                console.log('res', res);
                setFriends(res.data);
            })
            .catch(err => {
                console.log('err', err);
            })
    }
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <FriendForm />
            <p>Friends List</p>
            {friends.map(friend => {
                return (
                    <Friend 
                        key={friend.id}
                        name={friend.name}
                        age={friend.age}
                        email={friend.email}
                    />
                )
            })}
        </>
    )
};

export default FriendsList;