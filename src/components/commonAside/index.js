import React from 'react';
import MenuConfig from "../../config/index"
import *as Icon from '@ant-design/icons';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const iconToElement = (name) => React.createElement(Icon[name])
//处理菜单的数据

const items = MenuConfig.map(icon => {
    //没有子菜单
    const child = {
        key: icon.path,
        icon: iconToElement(icon.icon),
        label: icon.label,
    }
    //有子菜单
    if (icon.children) {
        child.children = icon.children.map(item => {
            return {
                key: item.path,
                label: item.label,
            }
        })
    }
    return child
})

//动态获取icon

const CommonAside = ({ collapsed }) => {
    console.log(collapsed, "commonAside")
    return (
        <Sider trigger={null} collapsed={collapsed}>
            <h3 className='app-name' style={{ margin: 0 }}>{collapsed ? "后台管理" : "通用后台管理系统"}</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{
                    height: '100%',
                }}
                items={items}
            />
        </Sider>
    )
}

export default CommonAside;