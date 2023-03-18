import { apiSlice } from "../api-slice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetProfileImage: builder.query({
      query: () => ({
        url: "/api/AdminProfile/get-profile-admin/fdd479c2-620d-4f96-a479-17fbfc4faf8c",
        method: "GET",
      }),
      providesTags: ["Login"],
    }),
    adminProfileImage: builder.mutation({
      query: (profilePhoto) => ({
        url: "/api/AdminProfile/upload-image/fdd479c2-620d-4f96-a479-17fbfc4faf8c",
        method: "POST",
        body: profilePhoto,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
}); 

export const { useAdminProfileImageMutation, useAdminGetProfileImageQuery } =
  extendedApi;
