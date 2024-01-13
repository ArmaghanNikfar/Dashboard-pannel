import axios from "axios";

//base url shoul be in an env file
// axios.interceptors.request.use(
//     config => {
//         config.baseURL = '/api';
//         //  config.headers = {}
//         return config
//     }
// )

const axiosInstance = axios.create({
  baseURL: "https://cts.rasana.ir:446",
});

// axiosInstance.interceptors.response.use(
//     (res) => {
//         // Add configurations here
//         if (res.status === 201) {
//             //do somthig here
//             if (res.status === 201) {
//                 localStorageService.setToken(res.data)
//                 axios.defaults.headers.common['Authorization'] =
//                   'Bearer ' + localStorageService.getAccessToken()
//                 return axios(originalRequest)
//               }
//         }
//         if (res.status === 401) {
//             //redirect to login
//         }
//         if (res.status === 403) {
//             //show some notification for authorization
//         }
//         return res;
//     },
//     (err) => {
//         // return Promise.reject(err);
//         //this is for showing a notification error here
//     }
// )

export async function getRest() {
  const restTable = await axiosInstance.get("/api/restgroups");
  return restTable;
}
export async function changeRestTime(values) {
  const restTable = await axiosInstance.post("/api/restgroups" ,values);
  return restTable;
}
