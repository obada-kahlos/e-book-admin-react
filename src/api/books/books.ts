import { apiSlice } from '../api-slice'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url : 'api/Books/get-all-books?PageNumber=1',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
      }),
    }),
  }),
})

export const { useGetBooksQuery } = extendedApi