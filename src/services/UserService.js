import Axios from './AxiosService'
const axios = new Axios();
const baseUrl = 'https://new-bookstore-backend.herokuapp.com/';
const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    }
};
class UserService {
    signup = (data) => {
        return axios.postMethod( `${baseUrl}bookstore_user/registration`, data, config);
    };
   login = (data) =>{
    return axios.postMethod(`${baseUrl}bookstore_user/login`, data, config);

   } 
}
export default UserService;