
import React, { Fragment } from 'react'
import LogoBrand from '../../assets/image/Logo.png'
import { Route } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
    // tra ve path, exact, Component
    //HOC
    const { Component, ...restProps } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    }
    return <Route {...restProps} render={(propsRoute) => {
        //props.location,
        //props.history,
        //props.match,

        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <img src={LogoBrand} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <NavLink to="/admin/users">Users</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <NavLink to="/admin/films">Films</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<FileOutlined />}>
                            <NavLink to="/admin/showtime">Showtime</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}

export default AdminTemplate