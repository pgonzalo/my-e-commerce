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
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-nativo-28c0a.appspot.com/o/999999999999999999999.jpg?alt=media&token=207fa48d-8094-4061-9c57-218f7038f12c"
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
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-nativo-28c0a.appspot.com/o/000000000000000000000000.jpg?alt=media&token=f0733b6f-945a-4487-a5b3-6d11ece4b80d"
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
