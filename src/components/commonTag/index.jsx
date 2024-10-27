import React from 'react';
import { Tag, Space } from "antd";
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { closeTab, selectMenuList } from '../../store/reducers/tap'

const CommonTag = () => {
    const currentMenu = useSelector(state => state.tab.currentMenu || {});
    const tabList = useSelector(state => state.tab?.tabList || []);  // 使用正确的名称
    const dispatch = useDispatch();

    // 关闭tag
    const handleClose = (tag) => {
        dispatch(closeTab(tag));
    };

    // 点击tag，更新currentMenu
    const handleChange = (item) => {
        dispatch(selectMenuList(item));
    };

    // 处理tag显示的逻辑
    const setTag = (flag, item) => (
        <Tag
            color={flag ? '#55acee' : undefined}
            closable={flag}  // 使用 closable 而不是 closeIcon
            onClose={() => handleClose(item)}
            onClick={() => handleChange(item)}
            key={item.name}
        >
            {item.label}
        </Tag>
    );

    return (
        <Space className='common-tag' size={[0, 8]} wrap>
            {
                currentMenu?.path && tabList.map((item) => setTag(item.path === currentMenu.path, item))
            }
        </Space>
    );
};

export default CommonTag;
