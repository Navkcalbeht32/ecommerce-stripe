import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Link, Router } from "react-router-dom";
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
        const response = await commerce.cart.retrieve();
        setCart(await commerce.cart.retrieve());
    }

    const handleAddCart = async (productID, quanitity) => {
        const item = await commerce.cart.add(productID, quanitity);

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(products);



    return (
     
            <div className="app">
                <Grid container >
                    <Banner />
                    <Navbar totalItems={cart.total_items} />
                    <Hero />
                    <HelpBar />
                </Grid>

                <Products products={products} onAddToCart={handleAddCart} /> 
                <Cart cart={cart} />
            </div>
        
    )
}


export default App;
