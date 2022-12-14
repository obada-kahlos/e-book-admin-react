import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const apiSlice = createApi({
  tagTypes: ['Author' , 'Login' , 'Book'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7146/' }),
  endpoints: () => ({}),
})