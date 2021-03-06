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
  cartitemQuantity = (cartitem_id, data) => {
    return axios.putMethod(
      `${baseUrl}bookstore_user/cart_item_quantity/${cartitem_id}`,
      data,
      config
    );
  };
  customerDetails = (data) => {
    return axios.putMethod(`${baseUrl}bookstore_user/edit_user`, data, config);
  };
  removeFromCart = (book_id) => {
    return axios.deleteMethod(
      `${baseUrl}bookstore_user/remove_cart_item/${book_id}`,
      config
    );
  };

  removeFromWishlist = (book_id) => {
    return axios.deleteMethod(
      `${baseUrl}bookstore_user/remove_wishlist_item/${book_id}`,
      config
    );
  };
  addOrder = (data) => {
    return axios.postMethod(`${baseUrl}bookstore_user/add/order`, data, config);
  };
}
export default UserService;
