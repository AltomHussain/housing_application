import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./GetOneHouse.css";
export default function GetOneHouse() {
  const [oneHouse, setOneHouse] = useState([]);
  const { id } = useParams();
  const GetOneHouseDetail = () => {
    fetch(`/api/house/${id}`)
      .then((res) => res.json())
      .then((data) => setOneHouse(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    GetOneHouseDetail();
  }, []);

  return (
    <div>
      {oneHouse.map(
        ({
          house_id,
          house_type,
          house_description,
          house_sold,
          street_name,
          house_postcode,
          house_price,
          house_city,
          house_image,
          house_number,
        }) => {
          return (
            <div className="onehouse-container" key={house_id}>
              <div className="house-image">
                <img src={house_image} alt="house-image" />
                <div className="middle-div">
                  <h3>Comfortable room</h3>
                  <a href="#" className="go-home">
                    <button className="btn btn-success my-color">
                      Back To Home
                    </button>
                  </a>
                </div>
              </div>
              <article className="description">
                <h3>Details:</h3>
                <p>{house_description}</p>
              </article>
              <article className="info">
                <h3>Info:</h3>
                <h6>Price: £{house_price}</h6>
                <h6>Pets: (allowed)</h6>
                <h6>House Type: {house_type}</h6>
                <h6>Is this house sold: {house_sold?"Yes": "No"}</h6>
              </article>
              <article className="address-house">
                  <h3>Address:</h3>
                  <h6>House Number: {house_number}</h6>
                  <h6>Street Name: {street_name}</h6>
                  <h6>Located In: {house_city}</h6>
                  <h6>Postcode: {house_postcode}</h6>
              </article>
            </div>
          );
        }
      )}
    </div>
  );
}
