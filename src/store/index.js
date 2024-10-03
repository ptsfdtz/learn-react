import { configureStore } from "@reduxjs/toolkit";
import TapReducer from "./reducers/tap";

const store = configureStore({
    reducer: {
        tap: TapReducer
    }
});

export default store;
