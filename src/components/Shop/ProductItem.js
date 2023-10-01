import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { cartActions } from "../store/cart";
import { current } from "@reduxjs/toolkit";
import { useEffect } from "react";

const ProductItem = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartState.items);

  
  const addItemToCartHandler = (itemId) => {
    console.log(itemId);
    dispatch(cartActions.addToCart(itemId));
  };
  console.log(cartItems);

  const mapedMeals = cartItems?.map((cartItem) => {
    return (
      <li className={classes.item}>
        <Card>
          <header>
            <h3>{cartItem.name}</h3>
            <div className={classes.price}>${cartItem.price}</div>
          </header>
          <p>{cartItem.description}</p>
          <div className={classes.actions}>
            <button
              onClick={() => {
                addItemToCartHandler(cartItem.id);
              }}
            >
              Add to Cart
            </button>
          </div>
        </Card>
      </li>
    );
  });

  return <ul className={classes.item}>{mapedMeals}</ul>;
};

export default ProductItem;
