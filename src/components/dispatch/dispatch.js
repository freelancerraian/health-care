import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./dispatch.css";

const Dispatch = () => {

  const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td.key === key);

  return (
    <div>
      <div className="container">
          <h1 className="mt-5">Full Details</h1>
        <div className="row">
          <div className="col-12 dispatch cart mt-2 mb-5">
            <div className="cart-img">
              <img
                className="img-thumbnail"
                src={ExactIteam[0]?.image}
                alt=""
              />
            </div>
            <h1>{ExactIteam[0]?.title}</h1>
            <h2>Details</h2>
            <hr className="detail-hr mt-3 mb-3" />
            <h5>{ExactIteam[0]?.description}</h5>
            <h2>Symptoms</h2>
            <hr className="detail-hr mt-3 mb-3" />
            <h5>
              {ExactIteam[0]?.symptoms}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dispatch;