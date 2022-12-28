import { apiSlice } from '../api-slice'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashbordInfo: builder.query({
      query: () => ({
        url : '/api/AdminBooks/GetCounts',
        method : 'GET'
      }),
      providesTags: ['Author'],
    }),
    getAuter: builder.query({
      query: () => ({
        url : '/api/AdminAuthors/GetAllAuthors/get-all-authors',
        method : 'GET'
      }),
      providesTags: ['Author'],
    }),
    addAuthor: builder.mutation({
      query: (body) => ({
        url: `/api/AdminAuthors/AddAuthor/add-author`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Author'],
    }),
  }),
})

export const { useGetDashbordInfoQuery , useGetAuterQuery , useAddAuthorMutation } = extendedApi