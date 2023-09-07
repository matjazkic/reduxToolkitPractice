import classes from "./CartItem.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const CartItem = (props) => {
 

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartState.items);
  const cartContents = useSelector((state) => state.cartState.cartContents);
  const currentPriceByAmount = cartContents.amount * cartItems.price;
  console.log(cartItems);
  console.log(cartContents);

  const addItemToCartHandler = () => {
    dispatch(cartActions.addToCart());
  };

  const removeItemToCartHandler = () => {
    dispatch(cartActions.removeFromCart());
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{cartItems.name}</h3>
        <div className={classes.price}>
          ${currentPriceByAmount.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${cartItems.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{cartContents.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemToCartHandler}>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
