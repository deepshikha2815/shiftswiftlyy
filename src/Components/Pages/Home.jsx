import React from 'react'
import { Carousel } from 'react-bootstrap'
import OurServices from '../Modules/OurServices';
import WorkingProcess from '../Modules/WorkingProcess';
import Footer from '../Modules/Footer';



const Home = () => {
  const imageStyle = {
    height: '500px', // Set the desired height
    width: '800px',  // Set the desired width
    objectFit: 'cover',
  };
  

  return (
   <>
   <Carousel>
      <Carousel.Item>
        <img
        style={imageStyle}
          className="d-block w-100"
          alt="First slide"
          src={process.env.PUBLIC_URL+'/slider1.jpg'}
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
         style={imageStyle}
          className="d-block w-100"
          src={process.env.PUBLIC_URL+'/slider2.jpg'}         
           alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
         style={imageStyle}
          className="d-block w-100"
          src={process.env.PUBLIC_URL+'/slider3.jpg'}         
           alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   <OurServices/>
   <WorkingProcess/>
  
   <Footer/>
   </>
     )
}

export default Home