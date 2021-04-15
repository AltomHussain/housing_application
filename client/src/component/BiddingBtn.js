import React, { useEffect, useState } from 'react'
import "./BiddingBtn.css"
export default function BiddingBtn({id}) {
    const [Biddings, setBidding] = useState([1]);
    const getBidding = () =>{
        fetch(`/api/bidding/${id}`)
          .then((res) => res.json())
          .then((data) =>setBidding(data))
          .catch((error) => console.log(error));
    }
    useEffect(()=>{
getBidding()
    }, [id])


  const updateBidding = (bid)=>{
      fetch(`/api/bidding/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bid: bid,
        }),
      })
        .then((res) => {
            if(res.ok){
                getBidding();
            }
          return  res.json()
        })
        .then((data) => console.log(data))
      
        .catch((error) => console.log(error));
  }

  
    return (
      <div className="test">
        <h3>Biddings:</h3>
        <h6>
          Bid This House:
          <button
            className={
              Biddings[0].bid === null ? "btn  bid " : "btn unbid"
            }
            onClick={() =>
              Biddings[0].bid === null ? updateBidding(1) : updateBidding(null)
            }
          >
            {Biddings[0].bid === null ? "bid a place" : "cancel bid"}
          </button>
        </h6>
      </div>
    );
}

