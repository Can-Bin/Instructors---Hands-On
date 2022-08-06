
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Cards({datas}) {
  const navigate = useNavigate()
  return (
    <Container>
      <Row>
        {datas.map((data) => (
            <Col key={data.id}>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={data.img} />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.text}
                        </Card.Text>
                        <Button variant="primary" onClick={() => navigate(`/${data.link}`)}>Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        
      </Row>
    </Container>
    
  );
}

export default Cards;