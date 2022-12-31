import { apiSlice } from "../api-slice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/api/Accounts/Login/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

export const {useLoginMutation} = extendedApi;
