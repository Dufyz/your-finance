import axios from "axios";

import { getWebApiUrl } from "@/utils/get-web-api-url";

const baseURL = getWebApiUrl();

const apiWeb = axios.create({
  baseURL: `${baseURL}/api`,
});

// apiWeb.interceptors.request.use((config) => {
//   const sessionToken = localStorage.getItem("sessionToken");

//   if (sessionToken) {
//     config.headers
//       .Authorization = `Bearer ${sessionToken}`;
//   }
  
// })

export default apiWeb;
