import React from 'react';
import { Carousel } from 'react-bootstrap';

// import image1 from '../../../assets/slidingimages/1.jpg';
// import image2 from '../../../assets/slidingimages/2.jpg';
// import image3 from '../../../assets/slidingimages/3.jpg';
// import image4 from '../../../assets/slidingimages/4.jpg';
// import image5 from '../../../assets/slidingimages/5.jpg';

const Slider = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <video className="slidevideo" id="slidevideo" autoPlay muted loop>
			<source src="video1.mp4" type="video/mp4"/>
			</video>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <video className="slidevideo" id="slidevideo" autoPlay muted loop>
			<source src="video2.mp4" type="video/mp4"/>
			</video>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;