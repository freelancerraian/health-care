import React from 'react';
import './contact.css';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
      <div>
        <div className="contactBg">
          <div className="container">
            <div className="row">
              <div className="my-5">
                <div className="col-lg-6 my-auto py-5">
                  <h1 className="c-green mt-5">Contact Us</h1>
                  <span className="fs-4">Get in touch</span>
                  <p className="t-gray pt-3 mb-5">
                    If you know who you are and your goal for your site, the
                    About Us page should come naturally. However, if you’re
                    looking for some inspiration, you can always check out the
                    following 25 awesome examples of About Us pages.
                  </p>
                </div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row my-5">
            {/* <div className="text-center my-4"></div> */}
            <div className="col-lg-6 my-auto">
              <div className="d-flex">
                <span>
                  <i className="fas fa-phone-alt p-3"></i>
                </span>
                <div>
                  <h5>Call Me</h5>
                  <p>999-777-666</p>
                </div>
              </div>
              <div className="d-flex">
                <span>
                  <i className="far fa-envelope p-3"></i>
                </span>
                <div>
                  <h5>Email</h5>
                  <p>freelencebayazid@email.com</p>
                </div>
              </div>
              <div className="d-flex">
                <span>
                  <i className="fas fa-map-marker-alt p-3"></i>
                </span>
                <div>
                  <h5>Location</h5>
                  <p>Bangladesh,Asia,Earth</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <div className="contactInfo mb-4">
                <div className="input-group mb-3 row">
                  <div className="form-floating  col-lg-6 mb-3">
                    <input
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    ></input>
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Name
                    </label>
                  </div>
                  <div className="form-floating col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    ></input>
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Email
                    </label>
                  </div>
                </div>
              </div>
              <div className="contactInfo me-4  w-fluid">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Subjects
                  </label>
                </div>
              </div>
              <div className="my-4">
                <div className="form-floating">
                  <textarea
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></textarea>
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Comments
                  </label>
                </div>
              </div>
              <Link to="/notfound">
                <button className="btn btn-b">
                  <i className="far fa-paper-plane"></i> Send Massage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;