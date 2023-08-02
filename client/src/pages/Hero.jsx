import Carousel from 'react-bootstrap/Carousel'
const Hero = () => {
  return (
    <div className="hero-container col-xxl-8 px-4 py-3 mt-3 mb-3 rounded-3" >
      <div className="row flex-lg-row-reverse justify-content-center align-items-center g-4 py-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <Carousel className="mb-3 mt-3 w-100 rounded-3 jumbo">
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/pexels-александр-романов-12089103.jpg"
            alt="Primer slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/pexels-sneep-crew-8424407.jpg "
            alt="Segundo slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/pexels-selina-ballard-15326694.jpg "
            alt="Tercer slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">
            Calzados deportivos para todas las actividades que realices.
          </h1>
          <p className="lead">
            Te acompañan en todo momento, a toda hora a donde quieras que vayas. Ideales para hacer deportes, caminatas o simplemente para llevarte con comodidad a donde quieras ir.  
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;