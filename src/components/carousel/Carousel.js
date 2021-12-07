import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel }  from "react-bootstrap";

const CarouselContainer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <Carousel fade>
            <Carousel.Item>
            
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dvptt7hw3/image/upload/v1638836132/Menu-1300X300-Draft1_qxotqn.jpg"
                alt="First slide"
                style={{ height: "300px" }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dvptt7hw3/image/upload/v1638836094/images_tub1a6.jpg"
                alt="Second slide"
                style={{ height: "300px" }}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dvptt7hw3/image/upload/v1638836091/bad-daddy_cdxgiz.jpg"
                alt="Third slide"
                style={{ height: "300px" }}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
export default CarouselContainer;
