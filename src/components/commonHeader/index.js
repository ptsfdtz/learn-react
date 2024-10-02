import React from 'react';
import "./index.css"
import { Button, Layout, Avatar } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;


const CommonHeader = () => {
    return (
        <Header className='header-container'>
            <Button
                type="text"
                icon={<MenuFoldOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: "#fff"
                }}
            />
            <Avatar size={36} src={<img src={require('../../assets/images/user.jpg')} />} />
        </Header>
    )
}

export default CommonHeader;