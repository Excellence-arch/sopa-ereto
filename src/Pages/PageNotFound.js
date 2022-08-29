import React from 'react';
import { useSelector } from 'react-redux';
import image from '../assets/Page not found.gif';
import Nav from '../Layouts/Nav';
import NavBar from '../Layouts/NavBar';

const PageNotFound = () => {
  const online = useSelector((state) => state.onlineReducer.status);
  return (
    <div>
      {online == true ? <Nav /> : <NavBar />}
      <div className="container">
        <div className="text-center">
          <img src={image} alt="404 not found" />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
