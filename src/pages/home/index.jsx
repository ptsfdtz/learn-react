import React from 'react';
import { Col, Row, Card } from 'antd';
import './home.css'
const Home = () => {
    const userImg = require("../../assets/images/user.jpg")
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
            </Col>
            <Col span={16}></Col>
        </Row >
    )
}

export default Home;
