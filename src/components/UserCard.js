import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
    const { id, username, email, image} = user
  
    return (
        <>
         
          <div className='max-w-xs' >
            <Link to={`user/${id}`} className='block' >
            <div className='bg-white shadow-lg rounded-lg py-3' >
                    <div className="image-wrapper">
                         <img className='w-32 h-32  rounded-full mx-auto'  src= {image} alt='/'  /> 

                    </div>
                     <div className="body pt-5">
                         <p  className='text-center text-xl text-gray-900 font-medium leading-8' > Username: {username} </p>
                         <p  className='text-center text-base text-gray-600 text-gray-900 font-medium' > email: {email} </p>
                     </div>
             </div>
            </Link>
        </div>
         
      
        </>
    );
};

export default UserCard;