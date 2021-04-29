import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../redux/actions/cartActions";
import { Badge, Table, Button } from 'reactstrap';
import alertify from 'alertifyjs';


const CartDetail = (props) => {

    const removeFromCart = (product) => {
        props.actions.removeFromCart(product);
        alertify.error(product.productName + " deleted. ")
    }
    
    return (
        <div>
             <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.cart.map(cartItem => (
                        <tr key={cartItem.product.id}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <Button color="danger" onClick={()=>removeFromCart(cartItem.product)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h1 style={{textAlign: 'right'}}>Total <Badge color="secondary">$ 50</Badge></h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
