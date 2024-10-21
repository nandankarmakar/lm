import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div>
      <h1>You might be lost, Please go back to the homepage</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Error;
