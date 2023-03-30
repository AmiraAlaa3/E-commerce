import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem'
import Styles from './Products.module.css'

export default function Products({chosenCategory, handleAddToCard }) {

    const [products, setProducts] = useState([]);
   
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${chosenCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [chosenCategory]);
    
    
    if (!products) {
      <div>Loading...</div>;
    }
     
  return (
    <div className={Styles.productItems}>
    <p className={Styles.category}>{chosenCategory}</p>
    <div className={Styles.grid}>
       {products.map(product => <ProductItem product={product}  handleAddToCard={handleAddToCard} key={product.id}/> )}
    </div>
  </div>
      
  )
}
