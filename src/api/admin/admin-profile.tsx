import { apiSlice } from "../api-slice";

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminGetProfile: builder.query({
      query: () => ({
        url: "/api/AdminProfile/get-profile-admin",
        method: "GET",
      }),
      providesTags: ["Login"],
    }),
    adminProfileImage: builder.mutation({
      query: (profilePhoto) => ({
        url: "/api/AdminProfile/upload-image",
        method: "POST",
        body: profilePhoto,
      }),
      invalidatesTags: ["Login"],
    }),
  }),
});

export const { useAdminProfileImageMutation, useAdminGetProfileQuery } =
  extendedApi;
