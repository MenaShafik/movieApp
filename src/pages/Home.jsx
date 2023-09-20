import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Home() {
  return (
    <div className="alert alert-dark text-center">
      <h1>home page</h1>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            style={{ width: "27rem",height:"27rem" }}
            src="../src/images/7.jpg"
            text=""
          />
          <Carousel.Caption>
            <h3>The Lord of the Rings | |</h3>
            <p>go to movies section to know more</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            style={{ width: "27rem",height:"27rem" }}
            src="../src/images/8.jpg"
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Pulp Fiction</h3>
            <p>go to movies section to know more</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "27rem",height:"27rem" }}
            src="../src/images/9.jpg"
            text="Third slide"
          />
          <Carousel.Caption>
            <h3>Fight Club</h3>
            <p>go to movies section to know more</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
