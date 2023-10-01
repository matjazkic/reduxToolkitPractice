import { showCartActions } from "./showCart";
import { cartActions } from "./cart";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showCartActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reduxordersave-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    await sendRequest();
    try {
      await sendRequest();
      dispatch(
        showCartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data successfully sent!",
        })
      );
    } catch (error) {
      dispatch(
        showCartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = (cart) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reduxordersave-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartContents: cartData.cartContents || [],
          totalAmount: cartData.totalAmount,
          totalPrice: cartData.totalPrice,
        })
      );
    } catch (error) {
      dispatch(
        showCartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};
