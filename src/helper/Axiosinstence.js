import axios from "axios"

const Base_url = "http://localhost:5000/api/"

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = Base_url
axiosInstance.defaults.withCredentials = true

export default axiosInstance
