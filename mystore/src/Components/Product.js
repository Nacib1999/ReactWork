import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = (props) => {
  const [product, setProduct] = useState(props.product);

  const addlike = (e) => {
    e.preventDefault();
    setProduct({...product, like: product.like + 1});
  };

  const addItem = (e) => {
    e.preventDefault();
    props.parentBuy(product);
    setProduct({...product, quantity: product.quantity - 1});
  };

  return (
    <Card 

    style={{ width: "18rem" }}
    border="secondary"
    className={product.like > 5 ? "bestProduct" : ""}
    >
      <Card.Header>
        <Card.Img
          variant="top"
          src={"../images/" + product.img}
          alt="Product Img"
          height={200}
        />
      </Card.Header>
      <Card.Body>
      <Card.Title >
        <Link to={`/products/${product.name}`}>
        {product.name}</Link></Card.Title>
        <Card.Text>Quantity: {product.quantity} </Card.Text>
        <Card.Text>Price : {product.price} $ </Card.Text>
        <Card.Text>Like : {product.like}</Card.Text>
        <Row>
          <Col md={6}>
            <Button variant="primary" onClick={addlike}>
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="info"
              onClick={addItem}
              disabled={product.quantity === 0}
            >
              Buy
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;

