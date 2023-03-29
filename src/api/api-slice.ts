import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/index";
export const apiSlice = createApi({
  tagTypes: ["Author", "Login", "Book", "Publisher"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7146/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", token ? `Bearer ${token}` : "");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
