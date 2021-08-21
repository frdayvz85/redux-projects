import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectProduct, removeSelectedProduct } from '../redux/actions/productActions'
import { Container, CircularProgress, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import useStyles from '../styles'


const Products = () => {
    const { productId } = useParams();
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()

    const fetchSingleProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            dispatch(selectProduct(response.data))
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (productId && productId !== '') {
            fetchSingleProduct()
        }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    const classes = useStyles()
    return (
        <Container>
            {Object.keys(product).length === 0 ? (
                <div className={classes.loading}>
                    <CircularProgress color="secondary" />
                </div>
            ) : (
                <Card className={classes.productDetail}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.detailImage}
                            image={product.image}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {product.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                Category: {product.category}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {product.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="medium" color="secondary">
                            ${product.price}
                        </Button>
                        <Button size="small" color="primary">
                            Add to cart
                        </Button>
                    </CardActions>
                </Card>
            )}

        </Container>
    )
}

export default Products
