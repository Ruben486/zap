import Carousel from 'react-bootstrap/Carousel'

const Hero = () => {
  return (
    <div className="hero-container col-xxl-8 p-4 mt-4 mb-4 rounded-3" >
      <div className="row flex-lg-row-reverse justify-content-center align-items-center g-4 py-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
        <Carousel className="mb-2 mt-1 w-100 rounded-3">
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/shoes-g22c61450d_1280.jpg"
            alt="Primer slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/shoes-gfeeba745b_1280.jpg"
            alt="Segundo slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel-item"
            src="/img/jeans-g5a7885688_1280.jpg "
            alt="Tercer slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>
        <div className="col-lg-6">
          <h1 className="titulo-hero display-3 fw-bold lh-1 mb-2">
            Calzados deportivos para todas las actividades que realices
          </h1>
          <p className="lead">
            Te acompañan en todo momento, a toda hora a donde quieras que vayas. Ideales para hacer deportes, caminatas o simplemente para llevarte con comodidad.  
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;