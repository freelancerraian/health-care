import React from 'react';
import './home.css';
import { NavLink } from "react-router-dom";
import Services from '../services/services';
import Doctors from '../doctors/doctors';

const Home = () => {
    return (
      <div className="">
        <div className="home">
          <div className="container main">
            <div className="text">
              <h1>One Stop Solution For All Medical Need</h1>
              <p>
                Access to health care may vary across countries, communities,
                and individuals, influenced by social and economic conditions as
                well as health policies.
              </p>
              <NavLink className="nav-link btn login" to="/services">
                View Services
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container">
          <Services></Services>
          <hr className="sec-hr" />
        </div>
        <Doctors></Doctors>
      </div>
    );
};

export default Home;