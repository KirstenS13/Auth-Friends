import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

const fakeFriends = [
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
]

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        setFriends(fakeFriends);
    }, [fakeFriends]);
    
    /* const getData = () => {
        axiosWithAuth
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log('res', res);
                setFriends(res);
            })
            .catch(err => {
                console.log('err', err);
            })
    }
    
    useEffect(() => {
        getData();
    }, [friends]); */

    return (
        <>
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