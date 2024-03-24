import axios from "axios";

import { getWebApiUrl } from "@/utils/get-web-api-url";

const baseURL = getWebApiUrl();

const apiWeb = axios.create({
  baseURL: `${baseURL}/api`,
});

export default apiWeb;
