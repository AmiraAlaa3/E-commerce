import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Styles from "./CardOverlay.module.css";

function CardOverlay({
  totalQuantity,
  totalPrice,
  getTotalPrice,
  cardItems,
  incrementQuantity,
  decrementQuantity,
  completedProcess,
  displayCard,
  setDisplayCard,
}) {
  useEffect(() => {
    getTotalPrice();
  }, [cardItems]);

  return (
    <div className={Styles.container}>
      <h2 className={Styles.quantities}>
        <strong>my bag</strong>, {totalQuantity}{" "}
        {totalQuantity > 1 ? "items" : "item"}
      </h2>
      <Card
        cardItems={cardItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <div className={Styles.wrapper}>
        <div className={Styles.flex}>
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
        <div className={Styles.colTwo}>
          <div
            onClick={() => setDisplayCard(!displayCard)}
            className={Styles.actionButton}
          >
            <Link to={`/bag`}>
              <button>view bag</button>
            </Link>
          </div>
          <div
            onClick={() => completedProcess()}
            className={`${Styles.actionButton} ${Styles.bgGreen}`}
          >
            <button>check out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOverlay;
