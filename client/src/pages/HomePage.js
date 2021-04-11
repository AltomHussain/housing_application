import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "../component/Header";
import { GetAllHouses } from "../component/Context/GetAllHouses";
import "./HomePage.css";

import CarouselPage from "../component/CarouselPage";


import SearchInputBar from "../component/SearchInputBar";
import StarRating from "../component/StarRating";


export default function HomePage() {
  const { allHouses } = useContext(GetAllHouses);

  let history = useHistory();
  const handleGetone = (e, id) => {
    e.stopPropagation();
    history.push(`getonehouse/${id}`);
  };
  const [searchInput, setSearchInput] = useState("");
  const filterHouse = allHouses.filter((item) =>
    item.house_type.toLowerCase().includes(searchInput)
  );
  console.log(filterHouse);
  const noMathes = () => {
    if (filterHouse.length === 0) {
      return (
        <div className="not-match">
          <Card
            bg="warning"
            text={"warning" === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2 "
          >
            <Card.Header className="text-center">No Maches</Card.Header>
            <Card.Body>
              <Card.Text>
                It does not look like there is any matches for your search
                <span style={{ fontSize: "80px" }} className="text-center">
                  &#128523;
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
  };
  console.log(filterHouse);
  return (
    <div>
      <Header home="Home" />
      <CarouselPage />
      <SearchInputBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="all-houses">
        {filterHouse.length > 0
          ? filterHouse.map(
              ({
                house_id,
                house_type,
                average_rating,
                 house_price,
                count,
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
                    <p className="room-info">{house_type} <StarRating rating={average_rating}/></p> 
                  </article>
                );
              }
            )
          : noMathes()}
      </div>
    </div>
  );
}
