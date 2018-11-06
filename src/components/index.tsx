import * as React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { withRouter } from 'utils/router';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ReactCanvasNest from 'react-canvas-nest';             

import Home from './Home/Hello';
import Login from './Login';

// const css = require('./index.scss');
export interface Props {
    history?: any;
}

@withRouter
export default class UIIndex extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="/" onClick={() => this.routerLink('/')}>首页</Menu.Item>
                        <Menu.Item key="/login" onClick={() => this.routerLink('/login')}>登录</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.routerLink('/err')}>重定向首页</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 30px' }}>
                    {/* <ReactCanvasNest className="nest" config={{ pointColor: ' 255, 255, 255 ' , pointOpacity: 0.5}} style={{ zIndex: 1, height: '1000px'}} /> */}
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 20, minHeight: 'calc(100vh - 190px)' }}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/login" exact={true} component={Login} />
                            <Redirect path="/" to={{ pathname: '/home' }} />
                            <Route render={(({ location }) => (<h3>404</h3>))} />
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                     ©2018 Created by dzk
                </Footer>
            </Layout>
        );
    }
    /**
     * 路由跳转
     */
    private routerLink = (path: string) => {
        this.props.history.push(path);
    }
}