import { apiSlice } from "./apiSlice";
const USERS_URL = "/api/users";

export const usersApliSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({  
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query:()=>({
       url:`${USERS_URL}/logout`,
       method:'POST',
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url:`${USERS_URL}`,
        method:'POST',
        body: data
      })
    }),
    update: builder.mutation({
      query: (data) => ({
        method: "PUT",
        url:  `${USERS_URL}/profile`,
        body:data
      })
    }) 
  }),
});
export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateMutation} = usersApliSlice;