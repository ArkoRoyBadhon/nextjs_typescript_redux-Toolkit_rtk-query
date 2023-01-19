import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductModal } from '../modals/product.model'


export const productApiK = createApi({
    reducerPath: "productApiK",
    baseQuery: fetchBaseQuery({ baseUrl: "https://server-arkoroybadhon.vercel.app/" }),
    tagTypes: ['ProductModal'],
    endpoints: (builder) => ({
        productGet: builder.query<ProductModal[], void>({
            query: () => '/allproduct',
            providesTags: ['ProductModal']
        }),
        productGetById: builder.query<any, any>({
            query: (id) => `item/${id}`,
            // query: (category) => '/allproduct/:category',
            providesTags: ['ProductModal']
        }),
    })
})


export const { useProductGetQuery, useProductGetByIdQuery } = productApiK