import React from 'react';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
