import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, username, email, image } = user;

  return (
    <>
      <div className="w-full md:max-w-xs ">
        <Link to={`user/${id}`} className="block transition-all duration-500 ">
          <div className="bg-white  rounded-lg py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  relative hover:shadow-none">
            <div className="image-wrapper">
              <img
                className="w-32 h-32  rounded-full mx-auto"
                src={image}
                alt="/"
              />
            </div>
            <div className="body pt-5">
              <p className="text-center text-xl text-gray-900 font-medium leading-8">
                {" "}
                Username: {username}{" "}
              </p>
              <p className="text-center text-base text-gray-600 font-medium">
                {" "}
                email: {email}{" "}
              </p>
            </div>
            <div class="text-lg text-white font-bold text-center my-3 w-full h-full -top-10 left-0 absolute flex items-center flex-col justify-center bg-[rgba(0,0,255,0.5)] opacity-0 transition-all rounded-lg duration-500 hover:opacity-100 hover:duration-500 hover:top-0">
              <p>View Profile</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserCard;
