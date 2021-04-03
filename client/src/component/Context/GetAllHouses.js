import React, {useState, useEffect, createContext} from "react"
export const GetAllHouses = createContext();
export const fetchAllHouse = (setAllHouses) => {
  fetch("/api/houses")
    .then((res) => res.json())
    .then((data) => setAllHouses(data));
};
export const HousesContextProvider = (props)=>{
    const [allHouses, setAllHouses] = useState([]);

useEffect(() => {
  fetchAllHouse(setAllHouses);
}, []);

    return (
      <GetAllHouses.Provider value={{ allHouses, setAllHouses }}>
        {props.children}
      </GetAllHouses.Provider>
    );
}