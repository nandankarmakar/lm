import React from 'react';
import NavBar from '../NavBar/NavBar';
import Form from '../Form/Form';

const RootLayout: React.FC = () => {
  return (
    <div className="flex font-poppins">
      <div className="w-2/6 h-screen">
        <Form />
      </div>
      <div className="w-full h-24 bg-white-200">
        <NavBar />
      </div>
    </div>
  );
};

export default RootLayout;
