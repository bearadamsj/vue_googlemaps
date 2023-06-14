import axios from 'axios';


const requests = axios.create({
    timeout: 5000
});

// requests.interceptors.request.use((config) => {

//     //add usertempID to config 
//     if(store.state.detail.user_token){
//         config.headers.userTempId = store.state.detail.user_token
//     }

//     if(store.state.user.token){
//         config.headers.token = store.state.user.token
//     }
//     return config
// })

// requests.interceptors.response.use((res) => {

//     return res.data
// }, (error) => {
//     return Promise.reject(new Error(String(error)))
// })

export default requests


