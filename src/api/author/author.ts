import { apiSlice } from "../api-slice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuter: builder.query({
      query: () => ({
        url: "/api/AdminAuthors/get-all-authors",
        method: "GET",
      }),
      transformResponse: (
        response: unknown | Array<{ id: string; name: string }> | any
      ) => {
        console.log("transform", response);
        const renamedArr = response?.map((obj: any) => {
          return {
            label: obj.name,
            value: obj.name,
            id: obj.id,
          };
        });
        return renamedArr;
      },
      providesTags: ["Author"],
    }),
    addAuthor: builder.mutation({
      query: (body) => ({
        url: `/api/AdminAuthors/add-author`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Author"],
    }),
    updateAuthor: builder.mutation({
      query: (body) => ({
        url: `/api/AdminAuthors/update-author/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Author"],
    }),
    deleteAuthor: builder.mutation({
      query: (id) => ({
        url: `/api/AdminAuthors/delete-author/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Author"],
    }),
  }),
});

export const {
  useGetAuterQuery,
  useAddAuthorMutation,
  useDeleteAuthorMutation,
  useUpdateAuthorMutation,
} = extendedApi;
