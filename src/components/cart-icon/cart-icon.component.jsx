import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import React from 'react'
import './cart-icon.styles.scss'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectcartItemsCount } from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count' >{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectcartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);