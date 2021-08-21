import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import ProductList from './ProductList'
import {setProducts} from '../redux/actions/productActions'
import { Container } from '@material-ui/core';

const Products = () => {
    const products = useSelector(state => state.allproducts)
    const dispatch = useDispatch()
    console.log(products)

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            dispatch(setProducts(response.data))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Container>
            <ProductList />
        </Container>
    )
}

export default Products
