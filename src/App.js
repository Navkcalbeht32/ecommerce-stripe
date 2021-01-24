import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Products, Navbar, Cart, Hero, Banner, HelpBar } from './components';
import './App.css';
import { Grid } from '@material-ui/core';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productID, quanitity) => {
        const item = await commerce.cart.add(productID, quanitity);

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);



    return (
        <Router>
            <div className="app">
                <Grid container >
                    <Banner />
                    <Navbar totalItems={cart.total_items} />
                    <Switch>
                        <Route exact path='/'>
                            <Grid container direction='column'>
                                <Hero />
                                <Products products={products} onAddToCart={handleAddToCart} /> 
                                <HelpBar />
                            </Grid>  
                        </Route>
                        <Route exact path='/cart'>
                            <Cart cart={cart} />
                        </Route>
                    </Switch>
                    
                    
                </Grid>
                
                
               
            </div>
        </Router>
     
            
        
    )
}


export default App;
