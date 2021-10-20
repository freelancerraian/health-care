import React from 'react';
import './doctors.css';
import img1 from "../../img/head.jpg";
import img2 from "../../img/ceo.jpg";
import img3 from "../../img/officer.jpg";
import img4 from "../../img/doctor.jpg";

const Doctors = () => {
    return (
      <div>
        <section className="section-4">
          <div className="container text-center">
            <h1 className="text-dark">Our Administrators</h1>
            <p className="text-secondary">The Medical Hierarchy – Doctors</p>
          </div>
          <div className="team row ">
            <div className="col-md-6 col-lg-3 col-12 text-center col-sm-6 mt-4">
              <div className="card mr-2 d-inline-block shadow-lg">
                <div className="card-img-top">
                  <img
                    src={img1}
                    className="img-fluid border-radius p-4"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Blalock Jolene</h3>
                  <p className="card-text">
                    The first model, arguably the oldest, is generally described
                    as the Franco-German model.This model is physician-led, and
                    those personnel who serve emergencies from ambulances are
                    often place in minor, supporting roles.urgent health
                    problems ranging from fire and accident victims to a sudden
                    illness supervises fellows, residents, medical students, and
                    other.students, and other.
                  </p>
                  <a href="/" className="text-secondary text-decoration-none">
                    View Details
                  </a>
                  <p className="text-black-50">Medical director.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 text-center col-sm-6 mt-4">
              <div className="card mr-2 d-inline-block shadow-lg">
                <div className="card-img-top">
                  <img
                    src={img2}
                    className="img-fluid border-radius p-4"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Olivia Louis</h3>
                  <p className="card-text">
                    A hospital is a health care institution providing patient
                    treatment with specialized medical and nursing staff and
                    medical equipment.The best-known type of hospital is the
                    general hospital, which typically has an emergency
                    department to treat urgent health problems ranging from fire
                    and accident victims to a sudden illness supervises fellows,
                    residents, medical students, and other.
                  </p>
                  <a href="/" className="text-secondary text-decoration-none">
                    View Details
                  </a>
                  <p className="text-black-50">Head of the department</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 text-center col-sm-6 mt-4">
              <div className="card mr-2 d-inline-block shadow-lg">
                <div className="card-img-top">
                  <img
                    src={img3}
                    className="img-fluid border-radius p-4"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Charlotte</h3>
                  <p className="card-text">
                    In the United States and Canada, an attending physician
                    (also known as an attending, rendering doc, or staff
                    physician) is a physician (M.D. or D.O.) who has completed
                    residency and practices medicine in a clinic or hospital, in
                    the specialty learned during residency.An attending
                    physician typically supervises fellows, residents, medical
                    students, and other.
                  </p>
                  <a href="/" className="text-secondary text-decoration-none">
                    View Details
                  </a>
                  <p className="text-black-50">Attending physician</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 col-12 text-center col-sm-6 mt-4">
              <div className="card mr-2 d-inline-block shadow-lg">
                <div className="card-img-top">
                  <img
                    src={img4}
                    className="img-fluid border-radius p-4"
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Mr. David</h3>
                  <p className="card-text">
                    Residency or postgraduate training is specifically a stage
                    of graduate medical education. It refers to a qualified
                    physician (one who holds the degree of MD, DO, DPM, MBBS,
                    MBChB) who practices medicine, usually in a hospital or
                    clinic, under the direct or indirect supervision of a senior
                    medical clinician registered in that specialty such as an
                    attending physician or consultant.
                  </p>
                  <a href="/" className="text-secondary text-decoration-none">
                    View Details
                  </a>
                  <p className="text-black-50">Chief residen</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Doctors;