import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import DeleteHouse from "./DeleteHouse";
import Header from "./Header"
import "./GetOneHouse.css";
import UpdateModal from "./UpdateModal";
import StarRating from "./StarRating"
export default function GetOneHouse() {
  const [oneHouse, setOneHouse] = useState([]);
const history = useHistory()
const handleReview = (id)=>{
history.push(`/review/${id}`)
}


  const { id } = useParams();
  const GetOneHouseDetail = () => {
    fetch(`/api/house/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setOneHouse({ result: data.data.result, review: data.data.reviews })
      )
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    GetOneHouseDetail();
  }, [id]);
console.log(oneHouse.result? oneHouse.result: "no" );
let home = <i className="fas fa-long-arrow-alt-left me-3 text-light"> Home</i>
  return (
    <div>
      <Header home={home} />
      <div>
        {oneHouse.result ? (
          oneHouse.result.map(
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
              average_rating,
              count,
            }) => {
              return (
                <div className="onehouse-container" key={house_id}>
                  <div className="house-image">
                    <img src={house_image} alt="house-image" />
                    <div className="middle-div">
                      <h3>Comfortable House</h3>
                      <a href="/home" className="go-home">
                        <button className="btn btn-warning">
                          Back To Home
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="des-info">
                    <article className="description">
                      <h3>Details:</h3>
                      <p>{house_description}</p>
                    </article>
                    <article className="info">
                      <h3>Info:</h3>
                      <h6>Price: £{house_price}</h6>
                      <h6>Pets: (allowed)</h6>
                      <h6>House Type: {house_type}</h6>
                      <h6>Is this house sold: {house_sold ? "Yes" : "No"}</h6>
                    </article>
                  </div>
                  <div className="address-bid">
                    <article className="address-house">
                      <h3>Address:</h3>
                      <h6>House Number: {house_number}</h6>
                      <h6>Street Name: {street_name}</h6>
                      <h6>Located In: {house_city}</h6>
                      <h6>Postcode: {house_postcode}</h6>
                    </article>
                    <article className="biddings">
                      <h3>Beddings:</h3>
                      <h6>
                        Bid This House:
                        <button className="btn btn-success btn-bid">Bid</button>
                      </h6>
                      <h6>
                        Update This House Details:
                        <UpdateModal
                          id={id}
                          houseType={house_type}
                          description={house_description}
                          houseSold={house_sold}
                          streetName={street_name}
                          postcode={house_postcode}
                          price={house_price}
                          city={house_city}
                          image={house_image}
                          houseNumber={house_number}
                          GetOneHouseDetail={GetOneHouseDetail}
                        />
                      </h6>
                      <h6>Delete House</h6>
                      <DeleteHouse id={id} />
                      <div>
                        <h4>Show : Rating/Reviews</h4>
                        <button
                          onClick={() => handleReview(house_id)}
                          className="btn btn-success"
                        >
                          <StarRating rating={average_rating} /> {`(${count})`}
                        </button>
                      </div>
                    </article>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <>
            Loading...
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="dark" />
          </>
        )}
      </div>
    </div>
  );
}
