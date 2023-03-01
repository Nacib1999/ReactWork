import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Product from './Product';
import products from '../products.json';

const Products = () => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const best = products.filter((product) => product.like > 5);
    setBestProducts(best);
  }, []);

  const buy = (product) => {
    product.quantity--;
    console.log(product.quantity);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <Container style={{ marginTop: '30px' }}>
      {visible && (
        <Alert variant='success'>
          <Alert.Heading>
            Hey, Welcome To Our Shop <strong> MyStore </strong>{' '}
          </Alert.Heading>
          <p>
            Thank you for choosing our store, we hope you enjoy your shopping
            experience!
          </p>
          <hr />
        </Alert>
      )}
      <Row>
        {products.map((product) => (
          <Col md={4}>
            <Product product={product} parentBuy={buy}></Product>
          </Col>
        ))}
      </Row>
      {show && (
        <Alert style={{ marginTop: '30px' }} variant='primary'>
          You bought an Item
        </Alert>
      )}
      {bestProducts.length > 0 && (
        <div className='d-flex flex-wrap justify-content-center mt-3'>
          {bestProducts.map((product) => (
            <Product product={product} parentBuy={buy} bestProduct={true} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Products;