import { configureStore, } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import { authApi } from "../Services/authenticationSystem";
import { productApiK } from "../Services/products";
import { slideApi } from "../Services/slideApi";
import ProductSlice from "./productSlice";


export const store = configureStore({

    reducer: {
        showReducer: ProductSlice,
        [authApi.reducerPath]: authApi.reducer,
        [productApiK.reducerPath]: productApiK.reducer,
        [slideApi.reducerPath]: slideApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authApi.middleware, productApiK.middleware, slideApi.middleware])
    // [...getDefaultMiddleware(), authApi, productApi]
})

// setupListeners(store.dispatch)

