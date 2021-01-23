import React from 'react';
import useStyles from './styles';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import HeroImage from '../../assets/img/printer-hero.png';

const Hero = () => {

    const classes = useStyles();

    return (
        <div className={classes.hero}>
            <img src={HeroImage} className={classes.image} alt=""/>
            <div className={classes.contentContainer}>
                <h1 className={classes.title}>NEW to Printing?</h1>
                <h4 className={classes.subtitle}>Check out our entry level products.</h4>
                <h5 className={classes.description}>All the tools you need can be found here to get started, making it easy for beginners to explore.</h5>
                <a href=""><div className={classes.btn}>Get Started</div></a>
            </div>
        </div>

    )
}

export default Hero;
