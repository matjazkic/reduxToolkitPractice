import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { cartActions } from "../store/cart";

const ProductItem = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartState.items);

  const addItemToCartHandler = () => {
    dispatch(cartActions.addToCart());
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{cartItems.name}</h3>
          <div className={classes.price}>${cartItems.price.toFixed(2)}</div>
        </header>
        <p>{cartItems.description}</p>
        <div className={classes.actions}>
          <button onClick={addItemToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
