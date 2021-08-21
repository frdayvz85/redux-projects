import React from 'react'
import {Link} from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from '../styles'

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/">Shopify</Link>
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit" className={classes.register}>Register</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
