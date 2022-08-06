import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fs1 from "../img/fs1.png"

const Devops = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col> <img src={fs1} alt="" /></Col>
          <Col>
            <h1>AWS - Devops</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut id cupiditate debitis adipisci nihil vero ut quam ea voluptatum nobis non cum quo enim ab amet repellat dolore minus, eius natus incidunt illo iure? Earum, voluptatibus. Repudiandae eaque ab exercitationem reiciendis quasi ullam quia totam quam sunt, maxime hic, ea, repellendus consectetur aliquam rerum vitae ex non dignissimos nesciunt officia quidem est excepturi minima quaerat. Ipsam fugiat rem culpa quod quibusdam magnam pariatur deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum sint odit iste ratione quaerat ea vitae iusto officiis asperiores.</p>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Devops