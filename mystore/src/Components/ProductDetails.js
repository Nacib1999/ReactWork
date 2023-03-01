import { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../products.json";
import { Card, Row, Col, Container } from 'react-bootstrap';

const Products = () => {
  const [data] = useState(productsData);


  const { productName } = useParams();

  //recherhce du produit avec le nom
  const product = data.find((p) => p.name === productName);

  return <ProductDetails product={product} />;
};

function ProductDetails(props) {
  const product = props.product;

    return ( 
      
<Container style={{marginTop:"50px"}}><Card 
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
    <Row>
      <Col md={6}>

      </Col>
      <Col md={6}>

      </Col>
    </Row>
  </Card.Body>
</Card></Container>
     );
}

export default Products;
