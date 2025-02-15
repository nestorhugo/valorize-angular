import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "https://pbase.sv2.nestorhugo.com/api/collections";

interface ApiCallOptions {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
  query?: Record<string, any>;
  config?: AxiosRequestConfig;
}

export function apiCall<T>({
  path,
  method = "GET",
  data,
  query,
  config,
}: ApiCallOptions): Promise<T> {
  const queryString = query
    ? "?" + new URLSearchParams(query as Record<string, string>).toString()
    : "";

  return axios({
    url: `${BASE_URL}${path}${queryString}`,
    method,
    data,
    ...config,
  })
    .then((response: AxiosResponse<T>) => response.data)
    .catch((error) => {
      console.error("Erro na requisição:", error);
      throw error;
    });
}
