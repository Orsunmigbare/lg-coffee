import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const handleUSDChange = (number) => {
  const string = JSON.stringify(number);
  const { length } = string;
  return JSON.parse(
    `${string.substring(0, length - 2)}.${string.substring(length - 2)}`,
  );
};

const ProductRowComponet = ({ heading, products }) => (
  <Container>
    <Row className="mt-5 mb-3">
      <h2 className="text-light">{heading}</h2>
    </Row>
    <Row className="mb-5 center_on_sm">
      {products.map((i) => (
        <Col
          key={i.sku}
          lg={{ span: 4, offset: 0 }}
          md={{ span: 4, offset: 0 }}
          sm={{ span: 8, offset: 2 }}
        >
          <Link href={`/${i.sku}`}>
            <div className="my-5">
              <div style={{ cursor: 'pointer' }}>
                <img
                  style={{ height: '300px', width: '300px' }}
                  src={i.images[0]}
                  alt={i.name}
                />
                <h5 className="text-light mt-3 mb-1">{i.name}</h5>
                <h6 className="text-muted">
                  $
                  {handleUSDChange(i.price)}
                  {' '}
                  USD
                </h6>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  </Container>
);

ProductRowComponet.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.arrayOf({
    images: PropTypes.arrayOf().isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductRowComponet;