import React from 'react';
import MenuConfig from "../../config/index"
import *as Icon from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { useDispatch } from "react-redux"
import { selectMenuList } from '../../store/reducers/tap'

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
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //添加数据到store
    const setTabList = (val) => {
        dispatch(selectMenuList())
    }
    //点击菜单跳转页面
    const selectMenu = (e) => {
        navigate(e.key);

        let data;
        MenuConfig.some(item => {
            if (item.path === e.keyPath[e.keyPath.length - 1]) {
                data = item.children?.find(child => child.path === e.key);
                return true; // stop iteration once the item is found
            }
            return false;
        });

        if (data) {
            setTabList({
                path: data.path,
                name: data.name,
                label: data.label
            });
            navigate(e.key);
        } else {
            console.error("Data not found for the selected menu item");
        }
    };

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
                onClick={selectMenu}
                items={items}
            />
        </Sider>
    )
}

export default CommonAside;