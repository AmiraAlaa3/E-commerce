import { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import card from "../../assets/empty_cart.png";
import menuIcon from "../../assets/menu.png";
import closeIcon from "../../assets/close.png";
import Styles from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import CardOverlay from "../CardOverlay/CardOverlay";

function Header({ choseCategory,
  chosenCategory,
  totalQuantity,
  totalPrice,
  getTotalQuantity,
  getTotalPrice,
  cardItems,
  incrementQuantity,
  decrementQuantity,
  completedProcess}) {  

    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);
    const [displayCard, setDisplayCard] = useState(false);
  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then((data)=>setCategories(data))
      },[])

      useEffect(() => {
        getTotalQuantity();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [cardItems]);
    return (
        <header className={Styles.sticky}>
        <nav className={Styles.flexSpaceBetween}>
          <div onClick={() => setOpen(!open)} className={Styles.display}>
            {open ? (
              <img src={closeIcon} alt="close_icon" />
            ) : (
              <img src={menuIcon} alt="menu_icon" />
            )}
          </div>
          <ul className={`${Styles.flex} ${open && Styles.displayFlex}`}>
            {categories.map((category) => (
              <li key={category}>
                <NavLink
                  onClick={() => choseCategory(category)}
                  className={category === chosenCategory ? Styles.active : null}
                  to="/"
                >
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
          <img className={Styles.logo} src={logo} alt="Green Card" />
          <div className={Styles.itemsCenter}>
            <div className={Styles.relative}>
              <img
                onClick={() => setDisplayCard(!displayCard)}
                src={card}
                alt="Card"
                className={Styles.curserPointer}
              />
              <span className={Styles.span}>{totalQuantity}</span>
              {displayCard && (
                <CardOverlay
                  totalQuantity={totalQuantity}
                  totalPrice={totalPrice}
                  getTotalPrice={getTotalPrice}
                  cardItems={cardItems}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  completedProcess={completedProcess}
                  displayCard={displayCard}
                  setDisplayCard={setDisplayCard}
                />
              )}
            </div>
          </div>
        </nav>
        {displayCard && (
          <div
            onClick={() => setDisplayCard(!displayCard)}
            className={Styles.overlay}
          />
        )}
      </header>
    );
}  
export default Header
