import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart }) => {
    
    
    const classes = useStyles();

    const EmptyCart = () => {
        <Typography variant="subtitle1"> You have no items in your shopping cart.</Typography>
    }

    const FilledCart = () => {
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: { cart.subtotal.formatted_with_symbol }</Typography>
                <div>
                <Button className={classes.emptyButton} size="large" type="button" varient="contained" color="secondary">Empty Cart</Button>
                <Button className={classes.checkoutButton} size="large" type="button" varient="contained" color="primary">Checkout</Button>
            </div>
            </div>
        </>
    };

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toobar} />
            
        </Container>
    )
}

export default Cart;
