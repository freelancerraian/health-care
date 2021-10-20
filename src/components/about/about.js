import React from 'react';
import './about.css';

const About = () => {

    return (
      <div className="container-fluid p-0">
        <div class="cover">
          <div class="content text-center">
            <h1>Something That Made Us Unique</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, sunt.
            </p>
          </div>
        </div>
        <div class="container-fluid text-center">
          <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
            <div class="rect">
              <h1>2345</h1>
              <p>Happy Patient</p>
            </div>
            <div class="rect">
              <h1>40</h1>
              <p>Doctors</p>
            </div>
            <div class="rect">
              <h1>1056</h1>
              <p>Tickets Submitted</p>
            </div>
            <div class="rect">
              <h1>100</h1>
              <p>Total Staf</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;