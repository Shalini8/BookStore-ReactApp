import Axios from "./AxiosService";
const axios = new Axios();
const baseUrl = "https://new-bookstore-backend.herokuapp.com/";
const config = {
  headers: {
    "Content-Type": "application/json",
    "x-access-token": localStorage.getItem("token"),
  },
};
class UserService {
  signup = (data) => {
    return axios.postMethod(
      `${baseUrl}bookstore_user/registration`,
      data,
      config
    );
  };
  login = (data) => {
    return axios.postMethod(`${baseUrl}bookstore_user/login`, data, config);
  };
  getBooks = () => {
    return axios.getMethod(`${baseUrl}bookstore_user/get/book`);
  };
  addToCart = (product_id) => {
    return axios.postMethod(
      `${baseUrl}bookstore_user/add_cart_item/${product_id}`,
      null,
      config
    );
  };
  getFromCart = () => {
    return axios.getMethod(`${baseUrl}bookstore_user/get_cart_items`, config);
  };
  addToWishList = (product_id) => {
    return axios.postMethod(
      `${baseUrl}bookstore_user/add_wish_list/${product_id}`,
      null,
      config
    );
  };
  getFromWishList = () => {
    return axios.getMethod(
      `${baseUrl}bookstore_user/get_wishlist_items`,
      config
    );
  };
}
export default UserService;
