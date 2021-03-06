import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "e7a7208d5amshf966fba00cc3630p1c4ad5jsn504fd8cc7d37",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: headers });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (param) => {
        if (param === "globalStats") {
          return createRequest(`/coins`);
        } else if (param === "coinsHome") {
          return createRequest(`/coins?limit=${10}`);
        } else if (param === "coinsScreen") {
          return createRequest(`/coins`);
        }
      },
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
