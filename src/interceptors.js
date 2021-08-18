import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token"),
    },
};

axios.interceptors.request.use((request) => {
    if (request.url.includes("bookstore_user/login")) {
        console.log("found login");
        request.headers["x-access-token"] = localStorage.getItem("token");
        return request;


    } else if (
        request.url.includes("bookstore_user/get/book") ||
        request.url.includes("bookstore_user/get_cart_items") ||
        request.url.includes("bookstore_user/get_wishlist_items") ||
        request.url.includes("bookstore_user/remove_cart_item") ||
        request.url.includes("bookstore_user/remove_wishlist_item") ||
        request.url.includes("bookstore_user/cart_item_quantity") ||
        request.url.includes("bookstore_user/edit_user") ||
        request.url.includes("bookstore_user/add_cart_item") ||
        request.url.includes("bookstore_user/add_wish_list") ||
        request.url.includes("bookstore_user/add/order")

    ) {
        console.log("getbooks", request);
        request.headers["x-access-token"] = localStorage.getItem("token");
        return request;
    } else {
        return request;
    }
});
axios.interceptors.response.use((response) => {
    console.log("response is", response);
    return response;
});
