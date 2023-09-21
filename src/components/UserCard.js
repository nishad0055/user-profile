import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({user}) => {
    const { id, username, email, image} = user
  
    return (
        <>
         
          <div className='max-w-xs ' >
            <Link to={`user/${id}`} className='block  hover:scale-105 hover:duration-500 ' >
            <div className='bg-white  rounded-lg py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ' >
                    <div className="image-wrapper">
                         <img className='w-32 h-32  rounded-full mx-auto'  src= {image} alt='/'  /> 

                    </div>
                     <div className="body pt-5">
                         <p  className='text-center text-xl text-gray-900 font-medium leading-8' > Username: {username} </p>
                         <p  className='text-center text-base text-gray-600 text-gray-900 font-medium' > email: {email} </p>
                     </div>
                     <div class="text-center my-3">
                <Link to={`user/${id}`} className="text-md text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">View Profile</Link>
            </div>
             </div>
            </Link>
        </div>
         
      
        </>
    );
};

export default UserCard;