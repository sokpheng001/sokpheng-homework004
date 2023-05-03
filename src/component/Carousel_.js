import Carousel from 'react-bootstrap/Carousel';

function Carousel_() {
  return (
    <Carousel className='mt-1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gatewayplayhouse.com/content/Images/ShowPages/2021/DriveIn/Avengers_Slide.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome To Movie Box</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/marvel-avengers-first-10-years-igor-avdeev.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Movie, you wanted.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.squarespace-cdn.com/content/v1/5a893e67e9bfdf3698c203ef/1528765410006-T8O4RFQZ0IARCQ8QOJBL/avengersageofultron_header.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Movie, you saw.</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_;