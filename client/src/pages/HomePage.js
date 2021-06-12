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
import SelectDropdown from "../component/SelectDropdown";

export default function HomePage() {
  const { allHouses } = useContext(GetAllHouses);
//Range filter function
const [priceRange, setPriceRange] = useState(20000);
 let rangeFilter = allHouses.filter((house) => house.house_price <= priceRange);
 //select dropdown
 const [select, setSelect] = useState("Select All");

 //push to getOneHouse funtion 
 let history = useHistory();
  const handleGetone = (e, id) => {
    e.stopPropagation();
    history.push(`getonehouse/${id}`);
  };

  //Search input Input filter function
  const [searchInput, setSearchInput] = useState("");
  const filterHouse = rangeFilter.filter((item) =>
    searchInput.length > 0
    ? item.house_type.toLowerCase().includes(searchInput)
      : select !== "Select All" && item.house_purpose !== null
      ? item.house_purpose.includes(select)
      : item
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
              filterHouse={filterHouse}
              allHouses={allHouses}
            />
            <RangeInput
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              filterHouse={filterHouse}
              allHouses={allHouses}
            />
            <SelectDropdown
              setSelect={setSelect}
              filterHouse={filterHouse}
              allHouses={allHouses}
            />
          </div>
          <div className="all-houses">
            {filterHouse.length > 0
              ? filterHouse.map(
                  ({
                    house_id,
                    house_type,
                    average_rating,
                    house_price,
                    house_image,
                    house_purpose,
                  }) => {
                    {
                      console.log(
                        house_purpose === "for sale"
                          ? "per night"
                          : "Selling Price"
                      );
                    }
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
                            <h6>
                              {house_purpose === "for sale"
                                ? house_price
                                : (house_price* 0.15).toFixed(2)}
                            </h6>
                            <p>
                              {house_purpose === "for sale"
                                ? "Selling Price"
                                :(house_price* 0.15).toFixed(2) < 300 ? "Per Month":  "Per Three Month"}
                            </p>
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
