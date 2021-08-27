import Axios from "axios";

const url = "https://fakestoreapi.com";

export default Axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
