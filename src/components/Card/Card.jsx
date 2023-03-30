import React from "react";
import Styles from "./Card.module.css";

function Card({ cardItems, incrementQuantity, decrementQuantity, card }) {
  return (
    <div className={Styles.container}>
      {cardItems.length < 1 && (
        <div className={Styles.uppercase}>your card is empty</div>
      )}
      {cardItems.map((product) => (
        <div key={product.id}>
          <div className={Styles.product}>
            <div className={Styles.details}>
              <p className={Styles.colorDark}>{product.title}</p>
              <p className={Styles.price}>${product.price}</p>
            </div>
            <div className={Styles.buttons}>
              <button
                className={Styles.button}
                onClick={() => incrementQuantity(product.id)}
              >
                +
              </button>
              <p className={Styles.quantity}>{product.quantity}</p>
              <button
                className={Styles.button}
                onClick={() => decrementQuantity(product.id)}
              >
                -
              </button>
            </div>
            <img src={product.image} alt={product.title} />
          </div>
          {card && (
            <div
              className={`${Styles.horizontalLine} ${card && Styles.mt32}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
