// productReducer.ts
import { Reducer } from "redux";
import { ProductActionTypes, ProductState } from "../../interface/product";
const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: null,
};

const productReducer: Reducer<ProductState, ProductActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "PRODUCT_LIST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "PRODUCT_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case "PRODUCT_LIST_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
