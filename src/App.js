import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showCartActions } from "./components/store/showCart";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";
import { fetchCartData, sendCartData } from "./components/store/cart-actions";
import { cartActions } from "./components/store/cart";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.showCart.showCart);
  const currentCart = useSelector((state) => state.cartState);
  const notification = useSelector((state) => state.showCart.notification);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (currentCart.changed) {
      dispatch(sendCartData(currentCart));
    }
  }, [currentCart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
