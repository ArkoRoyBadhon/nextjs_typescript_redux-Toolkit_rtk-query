import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { slideImgModal, slideImgModalDataBase } from '../modals/sliderImg,model';


export const slideApi = createApi({
    reducerPath: "slideApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    tagTypes: ['slideImgModal'],
    endpoints: (builder) => ({
        sliderImgget: builder.query<slideImgModal[], void>({
            query: () => '/images',
            providesTags: ['slideImgModal']
        }),
        updateImage: builder.mutation<void, slideImgModal>({
            query: ({_id, ...rest}) => ({
                url: `/images/${_id}`,
                method: "PATCH",
                body: rest
            })
        })
    })
})


export const {useSliderImggetQuery, useUpdateImageMutation} = slideApi