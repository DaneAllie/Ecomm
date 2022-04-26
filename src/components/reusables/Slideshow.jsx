import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slide() {
	return(<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>);
		
	
}

//  https://th.bing.com/th/id/OIP.UtJfNXje2JoaO1q7NFms5gAAAA?pid=ImgDet&w=212&h=163&c=7&dpr=1,25' alt='Second slide
// 'https://www.thespruce.com/thmb/CP4m9PtvgFdfNnPMPWudnfHYDJQ=/5459x3640/filters:fill(auto,1)/GettyImages-9439103601-5c65bad0c9e77c00017fb872.jpg'
