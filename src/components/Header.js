import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import indianFood from '../Assets/chiliChicken.jpg'
import spices from '../Assets/spices.jpg'
import secondSpices from '../Assets/spices2.jpg'

function Header() {
  return (
    <div>
      <h1 className="text-center">Bawarchi</h1>
      <Carousel setInterval={5000}>
   <Carousel.Item>
      <img className="d-block mx-auto" height="400px" width="1000px" src={indianFood} alt="First slide"/>
      </Carousel.Item> 
      <Carousel.Item>
      <img className="d-block mx-auto" height="400px" width="1000px" src={secondSpices} alt="First slide"/>
      </Carousel.Item> 
      <Carousel.Item>
      <img className="d-block mx-auto" height="400px" width="1000px" src={spices} alt="First slide"/>
      </Carousel.Item> 
</Carousel> 
    </div>
  )
}
export default Header
