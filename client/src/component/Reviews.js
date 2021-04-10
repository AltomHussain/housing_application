import React, { useState, useEffect } from 'react'
import {useParams} from "react-router-dom"
export default function Reviews() {
    const [allReviews, setAllReviews] = useState([])
    const {id} = useParams();

 const getReview = () =>{
       fetch(`/api/house/${id}`)
         .then((res) => res.json())
         .then((data) =>
           setAllReviews({
             review: data.data.reviews,
           })
         )
         .catch((error) => console.log(error));
 }
useEffect(() => {
   getReview()
}, [id])
console.log(allReviews? allReviews.review: "no");



    return (
        <div>
            heloo reviews
        </div>
    )
}
