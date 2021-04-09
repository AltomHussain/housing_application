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
            <h3>Looking for a house ?</h3>
            <p>You can bid one!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carosuel-image"
            src="https://architecturebeast.com/wp-content/uploads/2016/02/Best_Houses_in_the_World_Amazing_Kloof_Road_House_featured_on_architecture_beast_01-38.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Selling a house ?</h3>
            <p>Add your house from the top!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carosuel-image"
            src="https://www.realestate.com.au/blog/images/1024x576-fit,progressive/2018/11/02140037/capi_b36147142016a1fb8955eaf3912770f4_7a84986150b7717c877032594424fc5e.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Rating my website please !</h3>
            <p>You can add review to add houses as well !</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
