import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = (props) => {
  const { title, symptoms, image,key } = props.services;
  const symp = symptoms.slice(0, 150);

  return (
    <div className="col-lg-4 col-sm-12 col-md-6 cart-box mb-2">
      <div className="cart mt-5">
        <div className="cart-img">
          <img className="img-thumbnail" src={image} alt="" />
        </div>
        <h1>{title}</h1>
        <p>{symp}</p>
        <Link to={`/dispatch/${key}`}>
          <button className="btn btn-primary cart-button">All Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
