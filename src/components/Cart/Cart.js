import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const Cart = (props) => {
  const totalPrice = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem />
      </ul>
      <div>
        Total price: {totalPrice.totalPrice} $
        <div>
          <button onClick={clearCartHandler}>Clear Cart</button>
        </div>
      </div>
    </Card>
  );
};

export default Cart;
