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
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-nativo-28c0a.appspot.com/o/hamburguesa2.jpg?alt=media&token=e2e744e2-a0b3-48d7-a653-2ce6d7fdbd3d"
                alt="Hamburguesa presentada en mano del chef"
                style={{ height: "300px" }}
              />
              <Carousel.Caption>
                <h3>Quiebre</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-nativo-28c0a.appspot.com/o/WhatsApp%20Image%202021-12-21%20at%2017.36.11.jpeg?alt=media&token=4c21c46f-81c5-4f3a-b62e-ef25c0492ea6"
                alt="Hamburguesa vista de cerca con mucho queso"
                style={{ height: "300px" }}
              />

              <Carousel.Caption>
                <h3>Match point</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-nativo-28c0a.appspot.com/o/hamburguesa345345345345345.jpg?alt=media&token=cb2f10bd-1784-4f60-b726-2055f2a2b121"
                alt="Vista de Hamburguesa con papas"
                style={{ height: "300px" }}
              />

              <Carousel.Caption>
                <h3>Voy io </h3>
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
