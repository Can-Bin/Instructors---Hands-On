import Carousel from 'react-bootstrap/Carousel';
import isa from "../img/isa.jpeg"
import about from "../img/about.jpeg"
import devops from "../img/devops.jpeg"
function Sliders() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isa}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={devops}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={about}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;