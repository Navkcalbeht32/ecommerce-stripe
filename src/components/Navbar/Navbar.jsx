import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/img/tech-logo.svg'
import useStyles from './styles';
import NavItem from './NavItem/NavItem';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.topNav}>
                        <Link to='/'>
                            <div className={classes.logo}>
                                <img src={logo} alt="Commerce.js" height="40px" className={classes.image} />
                            </div>
                        </Link>
                    </div>

                    <div className={classes.bottomNav}>
                        <Link to='/'><NavItem title="Home" /></Link>
                        <Link to='/'><NavItem title="3D Printers" /></Link>
                        <Link to='/'><NavItem title="Filament" /></Link>
                        <Link to='/'><NavItem title="Accessories" /></Link>
                        <Link to='/'><NavItem title="Safety" /></Link>
                        <Link to='/'><NavItem title="Find Files" /></Link>
                        {location.pathname === '/' && (                   
                            <div className={classes.button}>
                            <Link to='/cart'>
                                <IconButton aria-label="Show Cart Items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>
                                </IconButton>
                            </Link>
                        </div>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
