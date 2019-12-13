import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHiddhen } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHiddhen }) => (
  <div className="cart-icon" onClick={toggleCartHiddhen}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHiddhen: () => dispatch(toggleCartHiddhen()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
