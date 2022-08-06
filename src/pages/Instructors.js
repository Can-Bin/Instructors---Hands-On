import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Instructors = () => {

  const navigate = useNavigate()
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    axios.get("https://api.github.com/users")
    .then((res) => setInstructors(res.data))
  }, [])
  
  
  return (
    <div className='text-center'>
      <h1>MEET OUR INSTRUCTORS</h1>
      <Container>
        <Row >
          {instructors.map((instructor, id) =>(
              <Col key={id}>
              <Card  style={{ width: '18rem', border: "3px solid", marginBottom:"15px" }}>
                <Card.Img variant="top" src={instructor.avatar_url} />
                <Card.Body>
                  <Card.Title>{instructor.login}</Card.Title>
                  <Button variant="success" onClick={() => navigate(`/instructors/${instructor.login}`)}>See Details</Button>
                </Card.Body>
              </Card>
            </Col>  
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default Instructors