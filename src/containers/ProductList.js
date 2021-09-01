import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Api from "../service/ApiService";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchDataProducts = async () => {
    /*  const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data)); */
    try {
      /*  const response = await Api.getProducts();
      dispatch(setProducts(response.data)); */
      //Uso de async action
      dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataProducts();
  }, []);

  console.log(products);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductList;
