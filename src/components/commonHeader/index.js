import React from 'react';
import "./index.css"
import { Button, Layout, Avatar, Dropdown } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { collapseMenu } from '../../store/reducers/tap'

const { Header } = Layout;
const CommonHeader = ({ collapsed }) => {

    const logout = () => {
    }

    const items = [
        {
            key: '1',
            label: (
                <Button href="/user" target="_blank" rel="noopener noreferrer">
                    个人中心
                </Button>
            ),
        },
        {
            key: '2',
            label: (
                <Button onClick={() => logout} target="_blank" rel="noopener noreferrer">
                    退出登录
                </Button>
            ),
        }
    ]
    //闯将dispatch
    const dispatch = useDispatch()
    //点击展开收起按钮
    const setCollapsed = () => {
        dispatch(collapseMenu())
    };

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
                onClick={() => { setCollapsed() }}
            />
            <Dropdown menu={{ items }}>
                <Avatar size={36} src={<img alt="logo" src={require('../../assets/images/user.jpg')} />} />
            </Dropdown>
        </Header>
    )
}

export default CommonHeader;