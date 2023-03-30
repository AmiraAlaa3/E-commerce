import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Styles from "./Bag.module.css";

function Bag({
  cardItems,
  incrementQuantity,
  decrementQuantity,
  totalQuantity,
  totalPrice,
  completedProcess,
  getTotalQuantity,
  getTotalPrice,
}) {
  const [totalTax, setTotalTax] = useState(0);

  useEffect(() => {
    getTotalTax();
    getTotalQuantity();
    getTotalPrice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cardItems]);

  const getTotalTax = () => {
    let sum = 0;
    setTotalTax(sum);
    cardItems?.forEach((product) => {
      sum += product.price * product.quantity * 0.21;
      setTotalTax(sum.toFixed(2));
    });
  };

  return (
    <div className={Styles.container}>
      <h1 className={Styles.uppercase}>card</h1>
      <div className={Styles.horizontalLine} />
      <Card
        cardItems={cardItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        card={true}
      />
      <div className={Styles.wrapper}>
        <p>tax 21%:</p>
        <p>${totalTax}</p>
      </div>
      <div className={Styles.wrapper}>
        <p>quantity:</p>
        <p>{totalQuantity}</p>
      </div>
      <div className={Styles.wrapper}>
        <p>
          <strong className={Styles.wight500}>total</strong>:
        </p>
        <p>${totalPrice}</p>
      </div>
      <button onClick={() => completedProcess()} className={Styles.button}>
        <p>order</p>
      </button>
    </div>
  );
}

export default Bag;
