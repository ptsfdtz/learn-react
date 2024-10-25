import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Table, Popconfirm } from 'antd'
import './user.css'
import { getUser } from '../../api'

const User = () => {
    const [listData, setListData] = useState({
        name: ''
    })

    const [tableData, setTableData] = useState([])

    //新增
    const handclick = () => {
    }

    //提交
    const handleFinish = (e) => {
        setListData({
            name: e.name
        })
        console.log(e)
    }

    //删除
    const handleDelete = (rowData) => {
    }
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            render: (val) => {
                return val ? '女' : '男'
            }
        },
        {
            title: '出生日期',
            dataIndex: 'birth',
        },
        {
            title: '地址',
            dataIndex: 'addr',
        },
        {
            title: '操作',
            render: (rowData) => {
                return (
                    <div className='flex-box'>
                        <Button style={{ marginRight: '5px' }} onClick={() => handclick('edit', rowData)}>编辑</Button>
                        <Popconfirm title='提示' description='确认删除吗？' okText='确认' cancelText='取消' onConfirm={() => handleDelete(rowData)}>
                            <Button type='primary' danger>删除</Button>
                        </Popconfirm>
                    </div >
                )
            }
        }
    ]
    const getTableData = () => {
        getUser(listData).then(({ data }) => {
            setTableData(data.list)
        })
    }
    useEffect(() => {
        getTableData()
    }, [])
    return (
        <div className='user'>
            <div className='flex-box space-between'>
                <Button type='primary' onClick={() => handclick('add')}>+新增</Button>
                <Form layout='inline' onFinish={handleFinish}>
                    <Form.Item name='keyword'>
                        <Input placeholder='请输入用户名' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>搜索</Button>
                    </Form.Item>
                </Form>
            </div>
            <Table columns={columns} dataSource={tableData} rowKey={'id'}></Table>
        </div>
    )
}

export default User;
