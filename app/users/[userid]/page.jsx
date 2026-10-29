import React from 'react';

const Detailspage = async ({params}) => {
    const { userid } = await params;

    const res = await fetch(`http://localhost:5000/users/${userid}`);
    const user = await res.json();

    return (
        <div>
            <h2>Details for User:</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>ID: {user._id}</p>
        </div>
    );
};

export default Detailspage;