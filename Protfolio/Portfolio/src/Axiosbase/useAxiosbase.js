import axios from "axios";

const axiosPro = axios.create({
    baseURL: "https://prodevsite.vercel.app",
});

export default axiosPro;
