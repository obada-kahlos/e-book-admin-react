import { apiSlice } from "../api-slice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPublishers: builder.query({
      query: () => ({
        url: "/api/AdminPublishers/get-publishers",
        method: "GET",
      }),
      providesTags: ["Publisher"],
    }),
    addPublisher: builder.mutation({
      query: (body) => ({
        url: "/api/AdminPublishers/add-publisher",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Publisher"],
    }),
  }),
});

export const { useGetPublishersQuery, useAddPublisherMutation } = extendedApi;
