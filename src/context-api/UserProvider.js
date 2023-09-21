import React, { createContext, useEffect, useState } from 'react';

export  const userContext = createContext()

const UserProvider = ({children}) => {
    const [users, setUser] = useState([])
    const [loading, setLoading] =  useState(true)

    useEffect(()=>{
            fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data =>{
                setUser(data)
                setLoading(false)
            })
    },[])

    const authInfo = {
        users,
        loading
    }
    return (
        <userContext.Provider value={authInfo} >
             {children}
        </userContext.Provider>
    );
};

export default UserProvider;