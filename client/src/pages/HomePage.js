import React, { useContext } from "react";
import {  useHistory } from "react-router-dom";
import Header from "../component/Header";
import { GetAllHouses } from "../component/Context/GetAllHouses";
import "./HomePage.css";


export default function HomePage() {
  const { allHouses } = useContext(GetAllHouses);
  let history = useHistory();
const handleGetone = (e, id)=>{
    e.stopPropagation();
    history.push(`getonehouse/${id}`);
}
  return (
    <div>
        <Header home="Home" />
      <div className="all-houses">
        {allHouses.map(
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
              <article className="room" key={house_id}>
                <div className="img-container">
                  <img
                    src={
                      house_image
                        ? house_image
                        : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/primrose-hill-house-1576670230.png?crop=1xw:1xh;center,top&resize=480:*"
                    }
                    alt="single-room"
                  />
                  <div className="price-top">
                    <h6>{house_price}</h6>
                    <p>per night</p>
                  </div>
                  <button
                    onClick={(e) => handleGetone(e, house_id)}
                    className="btn btn-success room-link"
                  >
                    Features
                  </button>
                </div>
                <p className="room-info">Nice {house_type}</p>
              </article>
            );
          }
        )}
      </div>
    </div>
  );
}
