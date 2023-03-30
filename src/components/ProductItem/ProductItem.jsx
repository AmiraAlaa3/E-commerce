import React from 'react'
// import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Styles from './ProductItem.module.css'
import card from "../../assets/empty_cart.png";

function ProductItem({product , handleAddToCard}) {
  const rating = (stars) => "★★★★★☆☆☆☆☆".slice(5 - stars, 10 - stars);
  return (
    <div className={Styles.card}>
    <div className={Styles.relative}>
      <Link to={`/products/${product.id}`}>
        <img
          className={Styles.width243}
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div
        className={Styles.bgGreen}
        onClick={() => handleAddToCard(product)}
      >
        <img
          className={Styles.cardIcon}
          src={card}
          alt={`Add ${product.name} to card`}
        />
      </div>
    </div>
    <div>
      <Link to={`/products/${product.id}`}>
        <h2 className={Styles.my}>{product.title}</h2>
      </Link>
      <p className={Styles.my}>${product.price}</p>
      <p className={Styles.my}>{rating(product?.rating.rate)}</p>
    </div>
  </div>
)
}
export default ProductItem;