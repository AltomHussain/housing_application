import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../component/Header";
import { GetAllHouses } from "../component/Context/GetAllHouses";
import "./HomePage.css";
import CarouselPage from "../component/CarouselPage";
import SearchInputBar from "../component/SearchInputBar";
import StarRating from "../component/StarRating";
import RangeInput from "../component/RangeInput";
import {noMathes} from "../component/statics/NoMatchResult"

export default function HomePage() {
  const { allHouses } = useContext(GetAllHouses);
//Range filter function
const [priceRange, setPriceRange] = useState(20000);
 let rangeFilter = allHouses.filter((house) => house.house_price <= priceRange);
 //select dropdown
 const [select, setSelect] = useState()
 
 //push to getOneHouse funtion 
 let history = useHistory();
  const handleGetone = (e, id) => {
    e.stopPropagation();
    history.push(`getonehouse/${id}`);
  };

  //Search input Input filter function
  const [searchInput, setSearchInput] = useState("");
  const filterHouse = rangeFilter.filter((item) =>
    item.house_type.toLowerCase().includes(searchInput)
  );
  
  
  let addHouse =  <button className="btn btn-success">Add House</button>
  return (
    <div>
      <Header home="Home" addHouse={addHouse} logout="Logout" />
      <CarouselPage />
      <h3 className="text-center my-3">Search Houses</h3>
      <div className="all-search-container">
        <SearchInputBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <RangeInput priceRange={priceRange} setPriceRange={setPriceRange} />
      </div>
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
                    <p className="room-info">
                      {house_type} <StarRating rating={average_rating} />
                    </p>
                  </article>
                );
              }
            )
          : noMathes(filterHouse)}
      </div>
    </div>
  );
}
