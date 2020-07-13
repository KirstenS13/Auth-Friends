import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = props => {
    /* const removeFriend = e => {
        e.preventDefault();
        axiosWithAuth
            .delete()
            .then()
            .catch()
    } */

    return (
        <>
            <p>{props.name}</p>
            <p>Age: {props.age}</p>
            <p>Email: {props.email}</p>
            <button>Remove Friend</button>
            <button>Edit Friend</button>
        </>
    )
}

export default Friend;