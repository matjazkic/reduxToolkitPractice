import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartActions } from "../store/showCart";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItemAmount = useSelector((state) => state.cartState.totalAmount);

  const cartShowHandler = () => {
    dispatch(showCartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemAmount}</span>
    </button>
  );
};

export default CartButton;
