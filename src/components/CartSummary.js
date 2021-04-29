import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../redux/actions/cartActions"
import { Link } from "react-router-dom";
import alertify from 'alertifyjs';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavLink,
    NavItem,
    Badge
} from 'reactstrap';

const CartSummary = (props) => {

    const removeFromCart = (product) => {
        props.actions.removeFromCart(product);
        alertify.error(product.productName + " deleted. ")
    }

    const renderEmpty = () => {
        return (
            <NavItem>
                <NavLink>No item in cart</NavLink>
            </NavItem>
        )
    }

    const renderSummary = () => {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart {props.cart? <Badge color="info">{props.cart.length}</Badge>:''}
              </DropdownToggle>
                <DropdownMenu right>
                    {
                        props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge onClick={() =>removeFromCart(cartItem.product)} color="danger">X</Badge>
                                {cartItem.product.productName}
                                <Badge color="success">{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to={"/cart"}>
                        Go to Products
                        </Link>
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    return (
        <div>
            {
                props.cart.length > 0 ? renderSummary() : renderEmpty()
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
