import { Card, Button, Col } from "react-bootstrap";

const CardProductos = ({ producto }) => {
  const { title, description, category } = producto;

  return (
    <Col xs={12} md={6}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div className="mb-2">{description}</div>
            <div className="fs-4">{category}</div>
          </Card.Text>
          <Button variant="primary">Ver </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProductos;
