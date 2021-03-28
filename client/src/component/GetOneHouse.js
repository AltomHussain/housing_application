import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from "react-router-dom";
import "./GetOneHouse.css"
export default function GetOneHouse() {
    const [oneHouse, setOneHouse] = useState([])
    const {id} = useParams()
    const GetOneHouseDetail = ()=>{
        fetch(`/api/house/${id}`)
        .then((res)=> res.json())
        .then((data)=>setOneHouse(data))
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
    GetOneHouseDetail()
}, [])

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
              <div className="onehouse-container">
                <div className="house-image">
                  <img src={house_image} alt="house-image" />
                     <div className="middle-div"> 
                      <h3>Comfortable room</h3> 
                      <a href="#" className="go-home" >
                          <button className="btn btn-success my-color">Back To Home</button>
                      </a>
                     </div>
 
                </div>
              </div>
            );
          }
        )}
      </div>
    );
}
