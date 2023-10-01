import classes from "./CartItem.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartState.items);
  const cartContents = useSelector((state) => state.cartState.cartContents);

  console.log(cartItems);
  console.log(cartContents);
  const blaBla = 15;

  const addItemToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const removeItemToCartHandler = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  // const currentPriceByAmount = cartContents.amount * cartContents.price;

  const mappedCartItems = cartContents?.map((cartItem) => {
    return (
      <li className={classes.item}>
        <header>
          <h3>{cartItem.name}</h3>
          <div className={classes.price}>
            ${cartItem.price * cartItem.amount}
            <span className={classes.itemprice}>(${cartItem.price}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{cartItem.amount}</span>
          </div>
          <div className={classes.actions}>
            <button
              onClick={() => {
                removeItemToCartHandler(cartItem.id);
              }}
            >
              -
            </button>
            <button
              onClick={() => {
                addItemToCartHandler(cartItem.id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </li>
    );
  });

  return <ul>{mappedCartItems}</ul>;
};

export default CartItem;
