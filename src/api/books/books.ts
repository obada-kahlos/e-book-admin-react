import { apiSlice } from '../api-slice'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashbordInfo: builder.query({
      query: () => ({
        url : '/api/AdminBooks/GetCounts',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
    getAuter: builder.query({
      query: () => ({
        url : '/api/AdminAuthors/GetAllAuthors/get-all-authors',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
  }),
})

export const { useGetDashbordInfoQuery , useGetAuterQuery } = extendedApi