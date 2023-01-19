import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    count: 1,
    items: [
        
    ],
    imageLink: [
        {
            "id": 1,
            "link": "https://placeimg.com/800/200/arch"
        },
        {
            "id": 2,
            "link": "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "id": 3,
            "link": "https://images.pexels.com/photos/5186869/pexels-photo-5186869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ],
    loginStatus: false
}

export const ProductSlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        showData: (state) => {
            state
        },
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        itemAdd: (state, action) => {
            const { title, quantity, price } = action.payload;
            const isBookExist = state.items.filter((item: any) => item.title !== title)
            if (isBookExist) {
                return void(state.items.push(action.payload))
            }
        },
        sliderImage: (state) => {
            state.imageLink
        },
        loginUser: (state,action) => {
            state.loginStatus = action.payload
        },
        logOutUser: (state,action) => {
            state.loginStatus = action.payload
        },
    }
})


export const { showData, increment, decrement, itemAdd, sliderImage,loginUser, logOutUser } = ProductSlice.actions

export default ProductSlice.reducer;