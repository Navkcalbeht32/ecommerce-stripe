import React from 'react';
import useStyles from './styles';

const HelpBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.helpBar}>
            <div className={classes.title}>Need Help?</div>
            <div className={classes.subtitle}>Check our FAQs or send us an email.</div>
        </div>
    )
}

export default HelpBar;
