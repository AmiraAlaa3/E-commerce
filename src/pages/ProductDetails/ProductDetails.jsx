import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./ProductDetails.module.css";

function ProductDetails({ handleAddToCard }) {
  const [productDetails, setProductDetails] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rating = (stars) => "★★★★★☆☆☆☆☆".slice(5 - stars, 10 - stars);

  return (
    <div className={Styles.container}>
      <div className={Styles.textCenter}>
        <img src={productDetails?.image} alt={productDetails?.title} />
      </div>
      <div className={Styles.productDetails}>
        <p className={Styles.colorDark}>{productDetails?.title}</p>
        <p className={Styles.colorDark}>
          {rating(productDetails?.rating.rate)}
        </p>
        <div>
          <p className={Styles.mb}>Price:</p>
          <p className={Styles.price}>${productDetails?.price}</p>
        </div>
        <button
          onClick={() => handleAddToCard(productDetails)}
          className={Styles.btn}
        >
          add to cart
        </button>
        <div className={Styles.description}>
          <div className={Styles.mb}>{productDetails?.description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
