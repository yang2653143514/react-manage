import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import LinkA from 'components/link-a'
export default class  extends Component {
  state = {  }
  params={
    href:'https://github.com/Yang2653143514/react-manage',
    target:'_black',
    text:'源码'
  }
  render() {
    return (
      <div style={{padding: '30px' }}>
        <Row gutter={24}>
          <Col span={6}>
          </Col>
          <Col span={12}>
            <Card title="React 后台管理系统"  hoverable={true} extra={<LinkA props={this.props} params={this.chatHref}/>}>
              <p> * 此项目为一个前后台分离的后台管理的 SPA, 包括前端 PC 应用和后端应用</p>
              <p> * 包括用户管理 / 商品分类管理 / 商品管理 / 权限管理等功能模块</p>
              <p> * 前端 : 使用 React 全家桶 + Antd + Axios + ES6 + Webpack 等技术</p>
              <p> * 后端 ：使用 Node + Express + Mongodb 等技术</p>
              <p> * 采用模块化、组件化、工程化的模式开发</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}