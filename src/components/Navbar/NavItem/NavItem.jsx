import React from 'react';
import useStyles from './styles';
import { Link } from "react-router-dom";

const NavItem = ({title}) => {
    const classes = useStyles();

    return (
            <div className={classes.navItem}>
                <a href=""><h4 className={classes.navItemText}>{title}</h4></a>
            </div>
    )
}

export default NavItem;
