import { createSlice } from "@reduxjs/toolkit";

const tapSlice = createSlice({
    name: "tap",
    initialState: {
        isCollapse: false,
        tabList: [
            {
                path: "/",
                name: "Home",
                label: "首页"
            },
        ],
        currentMenu: null
    },
    reducers: {
        collapseMenu: state => {
            state.isCollapse = !state.isCollapse;
        },
        selectMenuList: (state, { payload: val }) => {  // 修正拼写错误
            if (val.name !== "Home") {
                state.currentMenu = val;
                const index = state.tabList.findIndex(item => item.name === val.name);
                if (index === -1) {
                    state.tabList.push(val);
                }
            }
        },
        closeTab: (state, { payload: val }) => {
            const res = state.tabList.findIndex(item => item.name === val.name);
            if (res !== -1) {
                state.tabList.splice(res, 1);
            }
        }
    }
});

export const { collapseMenu, selectMenuList, closeTab } = tapSlice.actions;  // 修正拼写错误
export default tapSlice.reducer;
