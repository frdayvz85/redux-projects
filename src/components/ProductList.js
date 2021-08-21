import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import useStyles from '../styles'
import { Link } from 'react-router-dom'


const ProductList = () => {
    const products = useSelector(state => state.allproducts.products)
    const classes = useStyles()
    return (
        <Grid container spacing={1} justifyContent="space-between">
            {
                products.map((item) => (
                    <Card key={item.id} className={classes.productList} xs={6} spacing={2}>
                        <Link to={`/product/${item.id}`}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.category}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions>
                            <Button size="small" color="primary">
                                ${item.price}
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </Grid>

    )
}

export default ProductList
