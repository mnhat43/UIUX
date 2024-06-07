import React, { useState, useEffect } from 'react';
import './index.scss'
import {
    Modal, AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Layout
} from 'antd';
import logoLight from './logoLight.png'
import dl from './dl.png'
import { CopyrightOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    // textAlign: 'center',
    // color: '#fff',
    height: 50,
    // paddingInline: 48,
    // lineHeight: '64px',
    backgroundColor: 'white',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between"
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
    background: `linear-gradient(to left, #C5EBDD, #F2FAF7)`, // Sử dụng template string
    width: '100vw',
    height: 'calc(100vh - 105px)',
    padding: '0 100px'
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#009999',
    width: '100vw',
    height: 60,
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100vw',
    maxWidth: 'calc(50% - 8px)',
};
const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }
    const handleRegister = () => {
        navigate('/register');
    }
    return (
        <div className='landing-page'>
            {/* <Layout style={layoutStyle}> */}
            <Header style={headerStyle} >
                <div className="logo">
                    <img
                        loading="lazy"
                        src={logoLight}
                        alt="eTracking logo"
                        style={{ color: "white" }}
                    />
                    <div className="textLogo">eTracking</div>
                    <div className="textLogo2" style={{ color: "black" }}>HI10</div>
                </div>

                <div className='btn'>
                    <Button onClick={handleLogin} style={{ marginRight: "10px", backgroundColor: "#009999", color: "white" }}>Đăng nhập</Button>
                    <Button onClick={handleRegister} style={{ backgroundColor: "#009999", color: "white" }}>Đăng ký</Button>
                </div>

            </Header>
            <Content style={contentStyle} className='content'>
                <div className='left'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h2 style={{ marginBottom: "-15px" }}>HI10</h2>
                        <h1>ETRACKING</h1>
                    </div>
                    <p>eTracking - Nền tảng quản lí KPIs hiệu quả nhất mà bạn nên tin dùng !</p>
                    <div className='btn' onClick={handleLogin}>
                        Bắt đầu ngay
                    </div>
                </div>
                <div className='right'>
                    <img
                        loading="lazy"
                        src={dl}
                    />
                </div>
            </Content>
            <Footer style={footerStyle}>
                COPYRIGHT <CopyrightOutlined /> {new Date().getFullYear()} UIUX_HI10
            </Footer>
            {/* </Layout> */}
        </div>
    )
}

export default LandingPage;