import React from 'react';
import useStyles from './styles';

const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <div className={classes.bannerWrapper} >
                <h3 className={classes.bannerText}>Check out our low prices and limited time deals! <span className={classes.bannerHighlight}>Up to 20% off on select items</span></h3>
            </div>
            
        </div>
    )
}

export default Banner
