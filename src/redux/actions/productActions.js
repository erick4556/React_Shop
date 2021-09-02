import { ActionTypes } from "../contants/action-types";
import axios from "../../apis/storeApi";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("/products");
    console.log(response);
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchProductId = (id) => {
  return async (dispatch) => {
    const response = await axios.get("/products/" + id);
    console.log(response);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
  };
};

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
