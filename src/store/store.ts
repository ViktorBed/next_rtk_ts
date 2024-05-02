'use client'

import { configureStore } from "@reduxjs/toolkit";

import { productApi } from "@/store/product/product.api";

export const storeMake = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(productApi.middleware),
});

