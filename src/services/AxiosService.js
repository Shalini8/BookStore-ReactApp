import axios from "axios";

class AxiosService {
  postMethod = (url, data) => {
    return axios.post(url, data);
  };
  getMethod = (url ) => {
   return axios.get(url);
  };
  putMethod = (url, data) => {
    return axios.put(url, data);
  };
  deleteMethod = (url) => {
    return axios.delete(url);
  };
  
}

export default AxiosService;
