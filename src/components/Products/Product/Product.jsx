import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { ReactComponent as ShopppingCartAdd } from '../../../assets/img/shopping-cart.svg';


import useStyles from './styles'

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <div className={classes.infoContainer}>
                <CardContent >
                    <div className={classes.cardContent}>
                        <div className={classes.productName}>
                            {product.name}
                        </div>
                        <div className={classes.productPrice}>
                            {product.price.formatted_with_symbol}
                        </div>

                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton className={classes.iconCircle} aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <ShopppingCartAdd className={classes.icon} />
                    </IconButton>
                </CardActions>
            </div> 
            
        </Card>
        
    );
}

export default Product;
