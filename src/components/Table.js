import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Catering from '../Assets/catering.jpg'
import Menu from '../Assets/menu.jpg'
import Recipes from '../Assets/recipeBook.jpg'
import { Link } from "react-router-dom";

function Table() {
  return (
    <div>
        <Container>
  <Row className='rows p-5' card>
    <Col className='columns' >
        <img class="card-img-top" height="300px" width="300px" src={Menu} alt='image1'/>
        <div class="card-body">
        <Link to="/menu" class="card-link">Menu</Link>
    <p class="card-text">Click here to check out our Menu and place your order</p>
  </div>
    </Col>
    <Col className='columns' >
        <img class="card-img-top" height="300px" width="300px" src={Catering} alt='image2' />
        <div class="card-body">
        <Link to="/catering" class="card-link">Catering</Link>
    <p class="card-text">Chekout our catering service</p>
  </div>
    </Col>
    <Col className='columns' >
        <img class="card-img-top" height="300px" width="300px" src={Recipes} alt='image3'/>
        <div class="card-body">
        <Link to="/recipes" class="card-link">Recipes</Link>
    <p class="card-text">Explore our recipes</p>
  </div>
    </Col>
  </Row>
</Container>
    </div>
  )
}

export default Table