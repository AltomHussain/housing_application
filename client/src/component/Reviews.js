import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Reviews.css"
import {Card} from "react-bootstrap"
export default function Reviews() {
  const [allReviews, setAllReviews] = useState([]);
  const { id } = useParams();

  const getReview = () => {
    fetch(`/api/house/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setAllReviews({
          review: data.data.reviews,
        })
      )
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getReview();
  }, [id]);

  return (
    <div className="reviews-container">
      {allReviews.review
        ? allReviews.review.map(
            ({
              id,
              date_added,
              bid,
              reviewer_name,
              review_description,
              rating,
            }) => {
              console.log(rating);
              return (
                <div key={id} className="reviews">
                  <Card
                    bg="success"
                    text="light"
                    style={{ width: "18rem" }}
                    className="mb-2"
                  >
                    <Card.Header>
                      <h4>
                        {reviewer_name} rating:{rating}
                      </h4>{" "}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title> {date_added} </Card.Title>
                      <Card.Text>{review_description}.</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            }
          )
        : "not data yet"}
    </div>
  );
}
