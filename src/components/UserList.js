import React, { useContext } from 'react';
import { userContext } from '../context-api/UserProvider';
import UserCard from './UserCard';


const UserList = () => {
    const  { users , loading } = useContext(userContext)

    if(loading)
    {
        return <div> Loaing..... </div>
    }

    return (
    
          <div className='container mx-auto'>
               <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12' >
               {
                users.users.map(user =>  <UserCard key={user.id} user = {user} /> )
               }
               </div>
            </div>
      
        
    );
};

export default UserList;