import React, {useState, useEffect, createContext} from "react"
export const GetAllHouses = createContext()
export const HousesContextProvider = (props)=>{
    const [allHouses, setAllHouses] = useState([]);

useEffect(()=>{
    fetch("/api/houses")
      .then((res) => res.json())
      .then((data) => setAllHouses(data));
}, [])

    return(
        <GetAllHouses.Provider value={{allHouses}}>
            {props.children}
        </GetAllHouses.Provider>
    )
}