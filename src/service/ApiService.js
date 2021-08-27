import axios from "./httpClient";

class ApiService {
  getProducts = async () => {
    return await axios.get("/products");
  };

  getProductDetails = async (id) => {
    return await axios.get(`https://fakestoreapi.com/products/${id}`);
  };
}

export default new ApiService();
