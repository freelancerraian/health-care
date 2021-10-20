import React from 'react';
import './wellcome.css';

const Wellcome = () => {
    return (
      <div className="wellcome">
        <div className="container">
          <div className="row main-well">
            <div className="col-6 "></div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <div className="well p-2">
                    <h2>WellCome</h2>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="texts p-2">
                    <h1 className="care">We Care About</h1>
                    <h3>Your Health</h3>
                    <p>
                      Health care (also health-care or healthcare) is the
                      maintenance or improvement of health via the prevention,
                      diagnosis, treatment, recovery, or cure of disease,
                      illness, injury, and other physical and mental impairments
                      in people. Health care is delivered by health
                      professionals and allied health fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Wellcome;