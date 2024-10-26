import { createSlice } from "@reduxjs/toolkit";

const tapSlice = createSlice({
    name: "tap",
    initialState: {
        isCollapse: false,
        tabList: [
            {
                name: "Home",
                path: "/",
                label: "首页"
            },
        ]
    },
    reducers: {
        collapseMenu: state => {
            state.isCollapse = !state.isCollapse
        },
        seletMenuList: (state, { payload: val }) => {
            if (val.name !== "Home") {
                // 去除掉已经存在的tag
                const index = state.tabList.findIndex(item => item.name === val.name)
                if (index === -1) {
                    state.tabList.push(val)
                }

            }
        }
    }
});

export const { collapseMenu, seletMenuList } = tapSlice.actions
export default tapSlice.reducer