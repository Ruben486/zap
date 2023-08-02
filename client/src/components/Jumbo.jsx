import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

const Jumbo = () => {
  console.log("render");
  return (
        <Carousel className="mb-3 mt-3 w-100 rounded-3 jumbo">
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/pexels-александр-романов-12089103.jpg"
            alt="Primer slide"
            
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/pexels-sneep-crew-8424407.jpg "
            alt="Segundo slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/pexels-selina-ballard-15326694.jpg "
            alt="Tercer slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
  );
};

export default Jumbo;
