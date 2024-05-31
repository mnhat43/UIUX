import React, { useEffect, useState } from 'react';
import { BarChartOutlined, ProfileOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './siderbar.scss';
import useTheme from 'hooks/useTheme'

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const customerMenu = [
  getItem('Tổng quan', '/overview', <BarChartOutlined />),
  getItem('Quản lý công việc', '/manage-task', <ProfileOutlined />),
  getItem('Lịch', '/schedule', <ScheduleOutlined />),
];

const SiderRender = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { dark, setDark, handleDark } = useTheme();

  const handleLogout = () => {
    navigate('/');
  };


  return (
    <>
      <Sider
        width={200}
        className={`sider-wrapper ${dark === 'on' ? 'dark' : ''}`}
        theme={props.theme}
        // collapsible
        // collapsed={collapsed}
        style={{ position: 'fixed', marginTop: '50px', height: '100vh' }}
      >
        <ImageWrapper1 style={{ marginTop: '40px' }}>
          <Image1
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c632e7bddac508d0b64c394aa2e69509a7c3fabc491202f79cf8d3ee782be0d7?apiKey=10b1e221f97543f5b056ca1fc29636cb&"
            alt="Descriptive alt text for the image"
          />
        </ImageWrapper1>
        <Menu
          className="sider-wrapper__menu-item"
          theme={props.theme}
          selectedKeys={[location.pathname]}
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['service']}
        >
          {customerMenu.map((item) => (
            item.children ? (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((subItem) => (
                  <Menu.Item key={subItem.key}>
                    <Link to={subItem.key}>{subItem.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.key}>{item.label}</Link>
              </Menu.Item>
            )
          ))}
        </Menu>

        <div className='logout' onClick={handleLogout} >
          {/* <Image
            style={{ width: '30px' }}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/310d0caaf89ccec1abd120a7b94061ba74221f0aecbf4996774d141857d9c90b?apiKey=10b1e221f97543f5b056ca1fc29636cb&"
            alt="Descriptive alt text"
          /> */}
          <Button style={{ color: dark === "off" ? 'black' : "white", width: '150px', background: dark === "off" ? '#84e2d8' : "#58d1c9", }}>
            Đăng xuất
          </Button>
        </div>
      </Sider>
    </>

  );
};

export default SiderRender;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
`;

const ImageWrapper1 = styled.div`
  align-self: stretch;
`;

const Image1 = styled.img`
  aspect-ratio: 1.41;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;
