import { useParams } from "react-router-dom";

import { Card, Row, Col, Container } from 'react-bootstrap';
import { getallProducts } from '../services/api';
import React, { useEffect, useState } from 'react'

function ProductDetailsApi() {



  const { id } = useParams();

  const param = useParams();


  //faire l’appel d’un produit selon l’id.
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct();

  }, []);
  const getProduct = async () => {
    const response = await getallProducts(param.id);
    setProduct(response.data);
    console.log(response.data)
  };
  //fin appel produit 


  return (

    <Container style={{ marginTop: "50px" }}>
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
          <Card.Title >{product.name}</Card.Title>
          <Card.Subtitle>description : <br></br>{product.description}</Card.Subtitle>
          <Card.Text>Quantity: {product.quantity} </Card.Text>
          <Card.Text>Price : {product.price} $ </Card.Text>
          <Card.Text>Like : {product.like}</Card.Text>
          {product.id !== undefined ? <Row>
            <Col md={6}>

            </Col>
            <Col md={6}>

            </Col>
          </Row> : <h1> Product does not exist </h1>}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductDetailsApi;
