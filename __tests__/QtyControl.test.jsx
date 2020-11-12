import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import QtyControl from '../components/QtyControl';

const sku = 'demo_sku';

const cart = {
  product: {
    productTitle: 'product',
    productDescription: 'this is an awesome product you should buy 2',
    productPrice: '$2.87',
    productSku: 'abc_123',
    productImages: [
      '/path_01.png',
      '/path_02.png',
      '/path_03.png',
    ],
    qty: 12,
  },
};

it('QtyControl component renders smoke test without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QtyControl sku={sku} cart={cart} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('QtyControl component renders unchanged', () => {
  const tree = renderer.create(<QtyControl sku={sku} cart={cart} />).toJSON();
  expect(tree).toMatchSnapshot();
});
