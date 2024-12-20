import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Table } from 'antd';
import * as Icon from '@ant-design/icons';
import './home.css';
import MyEcharts from "../../components/Echarts/index";
import { getData } from '../../api';

const iconToElement = (name) => React.createElement(Icon[name]);

const columns = [
    { title: '课程', dataIndex: 'name' },
    { title: '今日购买', dataIndex: 'todayBuy' },
    { title: '本月购买', dataIndex: 'monthBuy' },
    { title: '总购买', dataIndex: 'totalBuy' }
];

const countData = [
    { name: "今日支付订单", value: 1234, icon: "CheckCircleOutlined", color: "#2ec7c9" },
    { name: "今日收藏订单", value: 3421, icon: "ClockCircleOutlined", color: "#ffb980" },
    { name: "今日未支付订单", value: 1234, icon: "CloseCircleOutlined", color: "#5ab1ef" },
    { name: "本月支付订单", value: 1234, icon: "CheckCircleOutlined", color: "#2ec7c9" },
    { name: "本月收藏订单", value: 3421, icon: "ClockCircleOutlined", color: "#ffb980" },
    { name: "本月未支付订单", value: 1234, icon: "CloseCircleOutlined", color: "#5ab1ef" }
];

const Home = () => {
    const userImg = require("../../assets/images/user.jpg");
    const [echartData, setEchartData] = useState({});
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        getData().then(({ data }) => {
            const { tableData, orderData, userData, videoData } = data.data;
            setTableData(tableData);
            const order = orderData;
            const xData = order.date;
            const keyArray = Object.keys(order.data[0]);
            const series = []
            keyArray.forEach(key => {
                series.push({
                    name: key,
                    data: order.data.map(item => item[key]),
                    type: 'line',
                })
            });

            setEchartData({
                order: { xData, series },
                user: {
                    xData: userData.map(item => item.date),
                    series: [{
                        name: '新增用户',
                        data: userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: '活跃用户',
                        data: userData.map(item => item.active),
                        type: 'bar'
                    }]
                },
                video: {
                    series: [{
                        data: videoData,
                        type: 'pie'
                    }],
                }
            });
        });
    }, []);

    return (
        <Row className='home'>
            <Col span={8}>
                <Card hoverable>
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
                    {countData.map((item, index) => (
                        <Card key={index}>
                            <div className='icon-box' style={{ backgroundColor: item.color }}>
                                {iconToElement(item.icon)}
                            </div>
                            <div className='detail'>
                                <p className='num'>￥{item.value}</p>
                                <p className='txt'>{item.name}</p>
                            </div>
                        </Card>
                    ))}
                </div>
                <div>
                    {/* 解释： 这里的MyEcharts组件是自己写的，在components/Echarts/index.js中，它接收一个chartData对象，里面包含xData和series两个属性，分别表示x轴数据和多个系列数据。 */}
                    {echartData.order && <MyEcharts chartData={echartData.order} style={{ height: '280px' }} />}
                    <div className='graph'>
                        {echartData.user && <MyEcharts chartData={echartData.user} style={{ height: '280px', width: '50%' }} />}
                        {echartData.video && <MyEcharts chartData={echartData.video} isAxisChart={false} style={{ height: '260px', width: '50%' }} />}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Home;
