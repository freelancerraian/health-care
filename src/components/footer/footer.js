import React from 'react';
import './footer.css';

const Footer = () => {
    return (
      <div className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about-box">
                <h1>About Us</h1>
                <hr />
                <p>189, Bhandaria road,F1 456 Caron Twon. Office No 3005</p>
                <i class="fas fa-envelope">
                  <span>raian@gmail.com</span>
                </i>
                <br />
                <i class="fas fa-phone">
                  <span>Phone : 231-21423223313</span>
                </i>
                <div className="icons">
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-instagram-square"></i>
                  <i class="fab fa-twitter-square"></i>
                  <i class="fab fa-youtube"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="department-box">
                <h1>Our Departments</h1>
                <hr />
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>Medoz Intensive Care</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>Reception/enquiry</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>Waiting hall</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>Consulting rooms</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p> Signboards and layout plan</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>Bay for trolleys and wheelchairs</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="link-box">
                <h1>HelpFull Links</h1>
                <hr />
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>Answer: clinic.</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>outpatient. patient.</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>surgeon. nurse.</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>psychiatric hospital. surgery.</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>physician. infirmary.</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>sanatorium. intensive care unit</p>
                </div>
                <div className="d-flex cus-icon">
                  <i class="fas fa-arrow-circle-right"></i>
                  <p>medical. hospice</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="time-box">
                <h1>Opening Hours</h1>
                <hr />
                <li className="d-flex footer_Link justify-content-between">
                  <p>Monday-Tuesday</p>
                  <p>9.00-17-00</p>
                </li>
                <li className="d-flex footer_Link justify-content-between">
                  <p>Wednesday-Thursday</p>
                  <p>9.00-17-00</p>
                </li>
                <li className="d-flex footer_Link justify-content-between">
                  <p>Friday-Saturday</p>
                  <p className="text-danger">Close</p>
                </li>
                <li className="d-flex footer_Link justify-content-between">
                  <p>Sunday</p>
                  <p>9.00-17-00</p>
                </li>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type Your Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text telegram" id="basic-addon2">
                    <i class="fab fa-telegram-plane"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <p>© By "Kazi Raian"</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;