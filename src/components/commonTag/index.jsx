import React from 'react';
import { Tag, Space } from "antd";
import './index.css';
import { useSelector } from "react-redux";

const CommonTag = () => {
    const tabsList = useSelector(state => state.tab?.tabsList || []);

    const handleClose = () => {
        console.log(tabsList);
    };

    return (
        <Space className='common-tag' size={[0, 8]} wrap>
            <Tag>首页</Tag>
            <Tag color='#55acee' closeIcon onClose={() => handleClose()}>
                用户列表
            </Tag>
        </Space>
    );
};

export default CommonTag;
