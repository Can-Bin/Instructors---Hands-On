import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from "../img/about.jpeg";

const About = () => {
  return (
    <div>
    <Container >
      <Row className='d-flex align-item-center justify-content-center'>
        <Col className='mb-3'> 
            <img src={about} alt="" className='mw-100 h-100'/>
        </Col>
        <Col>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam alias harum esse velit, quia quam? Libero quae tempora accusamus ratione consectetur mollitia beatae excepturi nemo necessitatibus et veniam, fugiat iusto impedit odit iste error, vitae atque eligendi illum blanditiis rem facere quod. Quidem, harum itaque. Quas esse illo velit, minima reprehenderit expedita ipsam adipisci rem quos fuga vero corporis voluptatem voluptates quaerat ea cum asperiores. Quisquam beatae laboriosam nobis sequi, ad corporis doloremque molestias sed, mollitia, pariatur inventore saepe earum similique excepturi expedita sint libero? Atque asperiores maiores dicta expedita.</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default About