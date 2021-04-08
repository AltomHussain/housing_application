import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselPage.css"
export default function CarouselPage() {
  return (
    <div className="carosul-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block  carosuel-image"
            src="https://assets.newatlas.com/dims4/default/828148f/2147483647/strip/true/crop/1000x667+0+0/resize/1000x667!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F2017-best-houses-62.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carosuel-image"
            src="https://architecturebeast.com/wp-content/uploads/2016/02/Best_Houses_in_the_World_Amazing_Kloof_Road_House_featured_on_architecture_beast_01-38.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carosuel-image"
            src="https://www.digsdigs.com/photos/the-most-futuristic-house-554x3681.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
