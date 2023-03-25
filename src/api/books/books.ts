import { apiSlice } from "../api-slice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashbordInfo: builder.query({
      query: () => ({
        url: "/api/AdminBooks/get-webApp-info",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Book"],
    }),
    getBooks: builder.query({
      query: (page) => ({
        url: `/api/Books/get-all-books?PageNumber=${page}`,
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getPublishers: builder.query({
      query: () => ({
        url: "/api/AdminPublishers/get-publishers",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getLanguages: builder.query({
      query: () => ({
        url: "/api/AdminBooks/get-languages",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getGenres: builder.query({
      query: () => ({
        url: "/api/AdminBooks/get-genres",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    addBooks: builder.mutation({
      query: (body) => ({
        url: "/api/AdminBooks/add-book",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Book"],
    }),
    updateBooks: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/api/AdminBooks/update-book/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `/api/AdminBooks/delete-book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetDashbordInfoQuery,
  useGetBooksQuery,
  useAddBooksMutation,
  useUpdateBooksMutation,
  useDeleteBooksMutation,
  useGetGenresQuery,
  useGetLanguagesQuery,
  useGetPublishersQuery,
} = extendedApi;
