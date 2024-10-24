import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Table } from 'antd';
import *as Icon from '@ant-design/icons';
import './home.css'
import { getData } from '../../api';
const iconToElement = (name) => React.createElement(Icon[name])

const columns = [
    {
        title: '课程',
        dataIndex: 'name'
    },
    {
        title: '今日购买',
        dataIndex: 'todayBuy'
    },
    {
        title: '本月购买',
        dataIndex: 'monthBuy'
    },
    {
        title: '总购买',
        dataIndex: 'totalBuy'
    }
]

const countData = [
    {
        "name": "今日支付订单",
        "value": 1234,
        "icon": "CheckCircleOutlined",
        "color": "#2ec7c9"
    },
    {
        "name": "今日收藏订单",
        "value": 3421,
        "icon": "ClockCircleOutlined",
        "color": "#ffb980"
    },
    {
        "name": "今日未支付订单",
        "value": 1234,
        "icon": "CloseCircleOutlined",
        "color": "#5ab1ef"
    },
    {
        "name": "本月支付订单",
        "value": 1234,
        "icon": "CheckCircleOutlined",
        "color": "#2ec7c9"
    },
    {
        "name": "本月收藏订单",
        "value": 3421,
        "icon": "ClockCircleOutlined",
        "color": "#ffb980"
    },
    {
        "name": "本月未支付订单",
        "value": 1234,
        "icon": "CloseCircleOutlined",
        "color": "#5ab1ef"
    }
]

const Home = () => {
    const userImg = require("../../assets/images/user.jpg")
    useEffect(() => {
        getData().then(({ data }) => {
            const { tableData } = data.data
            setTableData(tableData)
        })
    }, [])

    const [tableData, setTableData] = useState([])

    return (
        <Row className='home'>
            <Col span={8}>
                <Card hoverable >
                    <div className='user'>
                        <img src={userImg} alt="userimg" />
                        <div className='user-info'>
                            <p className='user-name'>Admin</p>
                            <p className='user-account'>超级管理员</p>
                        </div>
                    </div>
                    <div className='login-info'>
                        <p>上次登录的时间：<span>2024-05-12</span></p>
                        <p>上次登录的地点：<span>南京</span></p>
                    </div>
                </Card>
                <Card>
                    <Table rowKey={"name"} columns={columns} dataSource={tableData} pagination={false} />
                </Card>
            </Col>
            <Col span={16}>
                <div className='num'>
                    {
                        countData.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <div className='icon-box' style={{ backgroundColor: item.color }}>
                                        {iconToElement(item.icon)}
                                    </div>
                                    <div className='detail'>
                                        <p className='num'>￥{item.value}</p>
                                        <p className='txt'>{item.name}</p>
                                    </div>
                                </Card>
                            )
                        })
                    }
                </div></Col>
        </Row >
    )
}

export default Home;
