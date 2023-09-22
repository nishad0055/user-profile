import React, { useContext } from "react";
import { userContext } from "../context-api/UserProvider";
import { useParams } from "react-router-dom";
import bg from "../assets/images/bg-blue.jpg";

const UserDetails = () => {
  const { users, loading } = useContext(userContext);
  const { id } = useParams();
  const user = users.users?.find((user) => user.id === parseInt(id, 10));



  if (loading) {
    return <div>loading...</div>;
  }
  if (!user) {
    return <div>user not found</div>;
  }

  return (
    <div className="relative">
      <div>
        <div className="relative">
          <img className="w-full h-72" src={bg} alt="" />
          <div class="absolute inset-0 bg-[rgba(0,0,0,.4)]"></div>
          <h2 className="flex justify-center items-center text-5xl top-0 left-0 flex-col w-full h-full absolute text-white font-bold">
            {user.firstName} Details info
          </h2>
        </div>

        <div className="relative -top-20 left-0 right-0">
          <div className="flex justify-center mx-auto">
            <div className="bg-white  rounded-lg p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  w-full md:w-1/2">
              <div className="image-wrapper">
                <img
                  className="w-32 h-32  rounded-full mx-auto"
                  src={user.image}
                  alt="/"
                />
              </div>
              <div className="body pt-5">
                <table className="mx-auto">
                  <tr>
                    <th className="">
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Name:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4  text-xl text-gray-900 font-medium leading-8">
                        {user.firstName} {user.lastName}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Postion:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.company.title}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Company Name:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.company.name}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Location:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.address.address}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        City:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.address.city}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Phone:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.phone}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Email:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.email}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Date Of Birth:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.birthDate}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Age:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.age}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Gender:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.gender}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Blood Group:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.bloodGroup}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <p className="text-right  text-xl text-gray-900 font-medium leading-8">
                        Education:
                      </p>
                    </th>
                    <td>
                      <p className="text-left ml-4 text-xl text-gray-900 font-medium leading-8">
                        {user.university}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
