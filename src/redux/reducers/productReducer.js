import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    /*  return {
        data: action.payload,
      }; */

    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
