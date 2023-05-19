import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                            ,prevViewId:1
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                            ,prevViewId:1

                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/user/signin",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    console.log('result', result)

                    localStorage.setItem(
                        "intervieAuth",
                        JSON.stringify({
                            accessToken: result.data.token,
                            user: result.data.user

                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.token,
                            user: result.data.user

                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: "users",
                method: "GET",
            }),
        }),
    
    }),
});

export const { useLoginMutation, useRegisterMutation ,useGetAllUsersQuery} = authApi;