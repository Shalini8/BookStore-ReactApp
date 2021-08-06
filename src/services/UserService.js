import Axios from './AxiosService'
const axiosservice = new Axios();
const baseUrl = '';
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
};
class UserService {
    
}