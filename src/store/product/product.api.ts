'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {placeholder, Root} from "@/store/product/store.types";
import {listenGet, userGet} from "@/store/product/query/query";

export const productApi = createApi({
    reducerPath: 'specialtiesApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://ai-api.sellametrics.com/v1' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        // getSpecialties: builder.query<Root, void>({
        //     query: listenGet
        // }),
        getSpecialties: builder.query<placeholder, void>({
            query: userGet
        }),
    }),
});

export const { useGetSpecialtiesQuery } = productApi;