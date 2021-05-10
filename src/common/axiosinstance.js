import axios from 'axios';


const axiosinstance = axios.create({
    baseURL : 'http://localhost:3001'
    // baseURL : 'https://formik-user-default-rtdb.firebaseio.com/'
})

axiosinstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosinstance.interceptors.request.use(requestConfig => {
    console.log("request ",requestConfig);
    //Edit request config
    return requestConfig;
}, error =>{
    alert(error.message)
    console.log("error ",error.message);
    return Promise.reject(error)
})



export default axiosinstance;
