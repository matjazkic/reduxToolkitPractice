import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../store/showCart";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartContents = useSelector((state) => state.cartState.cartContents);

  const cartShowHandler = () => {
    dispatch(showCartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartContents.amount}</span>
    </button>
  );
};

export default CartButton;
