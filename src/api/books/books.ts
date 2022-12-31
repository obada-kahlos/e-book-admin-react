import { apiSlice } from '../api-slice'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashbordInfo: builder.query({
      query: () => ({
        url : '/api/AdminBooks/GetCounts',
        method : 'GET'
      }),
      providesTags: ['Author'],
    })
  }),
})

export const { useGetDashbordInfoQuery } = extendedApi