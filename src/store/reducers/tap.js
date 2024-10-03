import { createSlice } from "@reduxjs/toolkit";

const tapSlice = createSlice({
    name: "tap",
    initialState: {
        isCollapse: false
    },
    reducers: {
        collapseMenu: state => {
            state.isCollapse = !state.isCollapse
        }
    }
});

export const { collapseMenu } = tapSlice.actions
export default tapSlice.reducer