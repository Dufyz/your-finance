import axios from "axios";

import { getWebApiUrl } from "@/utils/get-web-api-url";

const apiWeb = axios.create({
  baseURL: `${getWebApiUrl()}/api`,
});

// apiWeb.interceptors.request.use((config) => {
//   const sessionToken = localStorage.getItem("sessionToken");

//   if (sessionToken) {
//     config.headers
//       .Authorization = `Bearer ${sessionToken}`;
//   }
  
// })

export default apiWeb;
