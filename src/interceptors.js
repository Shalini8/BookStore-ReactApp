import axios  from 'axios';


axios.interceptors.request.use((request) => {
    console.log("reQuest iss", request);
 return request;

})
axios.interceptors.response.use((response) => {
    console.log("response is", response)
    return response;
})