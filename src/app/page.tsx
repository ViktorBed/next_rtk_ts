'use client'
import React from "react";
import {Provider} from "react-redux";

import {storeMake} from "@/store/store";
import HomeContent from "@/app/storeProvider";

export default function Home() {
    return (
        <Provider store={storeMake}>
            <HomeContent/>
        </Provider>
    );
}

