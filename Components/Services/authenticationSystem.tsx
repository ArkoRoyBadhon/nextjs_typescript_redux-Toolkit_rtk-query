import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AuthModal } from '../modals/contact.model';


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://server-arkoroybadhon.vercel.app/" }),
    tagTypes: ['AuthModal'],
    endpoints: (builder) => ({
        authUser: builder.query<AuthModal[], void>({
            query: () => '/mens',
            providesTags: ['AuthModal']
        }),
        addUser: builder.mutation<void, AuthModal>({
            query: user => ({
                url: "/mens",
                method: "POST",
                body: user
            })
        })
    })
})


export const { useAuthUserQuery, useAddUserMutation } = authApi