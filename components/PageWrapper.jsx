import React from 'react';
import PropTypes from 'prop-types';
import StickyTopNavbar from './StickyTopNavbar';
import Footer from './Footer';

const PageWrapper = ({ children, data }) => (
  <>
    <StickyTopNavbar store={data.store} navigation={data.navigation} />
    {children}
    <Footer links={data.footer} />
  </>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    store: PropTypes.shape({}).isRequired,
    navigation: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    footer: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
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