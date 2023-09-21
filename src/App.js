// src/App.js
import React from 'react';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
    const router  = createBrowserRouter([ 
      {
        path:'/', element: <UserList></UserList>
      },
      {
        path: '/user/:id', element: <UserDetails></UserDetails>
      }

    ])
  return (
     <RouterProvider router={ router} >

     </RouterProvider>
  );
}

export default App;

