import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Form from '../../Components/Form/Form';
import TableContainer from '../../Components/TableContainer/TableContainer';
import './Home.css';
const Home: React.FC = () => {
  return (
    <div className="flex font-poppins">
      <div className="h-screen fixed form-container">
        <Form />
      </div>
      <div className="w-full flex flex-col table-container">
        <div className="h-24 bg-white-200">
          <NavBar />
        </div>
        <div className="h-full">
          <TableContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
