import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../prebuilts/Navigation';
import Footer from './Footer';

const PageWrapper = ({ children, data, cart }) => (
  <div className="content">
    <Navigation data={data} cart={cart} />
    <main>{children}</main>
    <Footer contact={data.contact} />
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  cart: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    store: PropTypes.shape({}).isRequired,
    navigation: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    contact: PropTypes.string.isRequired,
  }).isRequired,
};

export async function getStaticProps() {
  const res = await fetch('/data');
  const json = await res.json();
  return {
    props: {
      res: json.data,
    },
  };
}

export default PageWrapper;