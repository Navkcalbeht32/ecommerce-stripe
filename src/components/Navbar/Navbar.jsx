import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/img/tech-logo.svg'
import useStyles from './styles';
import NavItem from './NavItem/NavItem';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.topNav}>
                        <div className={classes.logo}>
                            <img src={logo} alt="Commerce.js" height="40px" className={classes.image} />
                        </div>
                        
                    </div>

                    <div className={classes.bottomNav}>
                        <NavItem title="Home" />
                        <NavItem title="3D Printers" />
                        <NavItem title="Filament" />
                        <NavItem title="Accessories" />
                        <NavItem title="Safety" />
                        <NavItem title="Find Files" />
                        <div className={classes.button}>
                            <IconButton aria-label="Show Cart Items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
