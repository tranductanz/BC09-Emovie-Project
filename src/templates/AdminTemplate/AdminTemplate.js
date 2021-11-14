
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
                    <NavLink to="/">
                        <img src={LogoBrand} />
                    </NavLink>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="sub1" icon={<FileOutlined />} title="Quan ly User">
                            <Menu.Item key="8" icon={<FileOutlined />}>
                                <NavLink to="/admin/users">Duyệt User</NavLink>
                            </Menu.Item>

                            <Menu.Item key="9" icon={<FileOutlined />}>
                                <NavLink to="/admin/users/addnew">Thêm User</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<FileOutlined />} title="Chức Năng Phim">
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to="/admin/films">Duyệt Film</NavLink>
                            </Menu.Item>

                            <Menu.Item key="11" icon={<FileOutlined />}>
                                <NavLink to="/admin/films/addnew">Thêm Mới</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}

export default AdminTemplate