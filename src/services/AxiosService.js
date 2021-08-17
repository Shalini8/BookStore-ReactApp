import axios from "axios";

class AxiosService {
  postMethod = (url, data, isHeaderRequired) => {
    return axios.post(url, data, isHeaderRequired);
  };
  getMethod = (url ) => {
   return axios.get(url);
  };
  putMethod = (url, data, isHeaderRequired) => {
    return axios.put(url, data, isHeaderRequired);
  };
  deleteMethod = (url, isHeaderRequired) => {
    return axios.delete(url, isHeaderRequired);
  };
  
}

export default AxiosService;
