import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  console.log(allReviews ? allReviews.review : "no");

  return (
    <div>
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
              return (
                <div>
                  <Card
                    bg="success"
                    key={id}
                    text="light"
                    style={{ width: "18rem" }}
                    className="mb-2"
                  >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                      <Card.Title> Card Title </Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
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
