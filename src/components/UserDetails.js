import React, { useContext } from 'react';
import { userContext } from '../context-api/UserProvider';
import { useParams } from 'react-router-dom';

const UserDetails = () => {

    const {users} = useContext(userContext)
    const {id} = useParams();
    const user = users.users?.find((user) => user.id === parseInt(id, 10));
    
     console.log(user)

     

    if(!user) {
       return <div>User not found</div>
    }

    return (
        <div className='container mx-auto' >
            <p>User Id: {user.id} </p>
            <p>Age: {user.age} </p>
        </div>
    );
};

export default UserDetails;