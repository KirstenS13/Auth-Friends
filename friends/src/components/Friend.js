import React from 'react';

const Friend = props => {
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