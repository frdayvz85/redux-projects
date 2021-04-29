import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Badge, Table, Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productActions from "../redux/actions/productActions"
import * as cartActions from "../redux/actions/cartActions"
import alertify from "alertifyjs";


const ProductList = (props) => {

    useEffect(() => {
        props.actions.getProducts()
    }, [])


    const addToCart = (product) => {
        props.actions.addToCart({quantity:1, product})
        alertify.success(product.productName + " added to cart. ")
    }
    
    return (
        <div>
            <h3>Products <Badge color="success">{props.currentCategory.categoryName}</Badge></h3>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Units in Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td>{product.unitsInStock}</td>
                            <td>
                                <Button color="success" onClick={()=>addToCart(product)}>
                                    Add
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
