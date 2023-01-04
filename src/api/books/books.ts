import { apiSlice } from '../api-slice'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashbordInfo: builder.query({
      query: () => ({
        url : '/api/AdminBooks/GetCounts',
        method : 'GET'
      }),
      providesTags: ['Book'],
    }),
    getBooks: builder.query({
      query: () => ({
        url : '/api/AdminBooks/GetAllBook?PageNumber=1',
        method : 'GET'
      }),
      providesTags: ['Book'],
    }),
    addBooks: builder.mutation({
      query: (body) => ({
        url : '/api/AdminBooks/AddBook',
        method : 'POST',
        body : body
      }),
      invalidatesTags: ['Book'],
    }),
    deleteBooks: builder.mutation({
      query: (id) => ({
        url : `/api/AdminBooks/DeleteBook/${id}`,
        method : 'DELETE',
      }),
      invalidatesTags: ['Book'],
    }),
  }),
})

export const { useGetDashbordInfoQuery , useGetBooksQuery , useAddBooksMutation , useDeleteBooksMutation } = extendedApi