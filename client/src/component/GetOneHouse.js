import React, {useEstate, useEffect, useState} from 'react'

export default function GetOneHouse({id}) {
    const [oneHouse, setOneHouse] = useState([])
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
            helloooeo
        </div>
    )
}
