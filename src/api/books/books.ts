import { apiSlice } from "../api-slice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashbordInfo: builder.query({
      query: () => ({
        url: "/api/AdminBooks/GetCounts",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getBooks: builder.query({
      query: (page) => ({
        url: `/api/AdminBooks/GetAllBook?PageNumber=${page}`,
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getPublishers: builder.query({
      query: () => ({
        url: "/api/AdminBooks/GetAllPublishers/get-publishers",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getLanguages: builder.query({
      query: () => ({
        url: "/api/AdminBooks/GetAllLanguages/get-languages",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getGenres: builder.query({
      query: () => ({
        url: "/api/AdminBooks/GetAllGenres/get-genres",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    addBooks: builder.mutation({
      query: (body) => ({
        url: "/api/AdminBooks/AddBook",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Book"],
    }),
    updateBooks: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/api/AdminBooks/UpdateBook/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Book"],
    }),
    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `/api/AdminBooks/DeleteBook/${id}`,
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
