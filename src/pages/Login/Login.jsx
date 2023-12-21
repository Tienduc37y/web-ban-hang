import { Form, Button, Input,notification, Space } from "antd"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './style.css'
export default function Login(){
    const navigate = useNavigate()
    const [api, contextHolder] = notification.useNotification();
    const NotifySuccess = (placement,type) => {
        api[type]({
        message: `Đăng nhập thành công`,
        description:
            'Chúc bạn 1 ngày mới tốt lành',
        placement,
        });
    };
    const NotifyError = (placement,type) => {
        api[type]({
        message: `Đăng nhập không thành công`,
        description:
            'Vui lòng thử lại',
        placement,
        });
    };
    function onFinish(values){
        axios({
            url: 'https://backoffice.nodemy.vn/api/auth/local',
            method: 'POST',
            data:values,
            headers: { 
                'Content-Type': 'application/json'
            },
        })
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.jwt)
            localStorage.setItem('user',res.data.user.username)
            NotifySuccess('top','success')
            setTimeout(()=>{
                navigate('../')
            },2000)
                
        })
        .catch((err)=>{
            NotifyError('top','error')
        })
    }
    return (
        <div className="login">
            <h1>Đăng Nhập</h1>
            <Form 
                name="Login"
                onFinish={onFinish}
                >
                <Form.Item name= "identifier" label= "Username">
                    <Input style={{width:300}}></Input>
                </Form.Item>
                <br />
                <Form.Item name= "password" label= "Password">
                    <Input.Password style={{width:300}}></Input.Password>
                </Form.Item>
                <br />
                <Space className="btn-login">
                    {contextHolder}
                    <Button type="primary" htmlType="submit" style={{border:"none" , outline:"none"}}>Đăng nhập</Button>
                    <Button type="primary">
                        <Link to="/register">Đăng ký</Link>    
                    </Button>
                </Space>
            </Form>
        </div>
    )
}