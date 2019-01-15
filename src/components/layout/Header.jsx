import React from "React";
import {Col, Icon, Modal, Row} from "antd";
import * as commonServices from "../../services/commonServices";
import classnames from "classnames";
import styele from "./Header.less";
import UrlHelper from "js-url-helper";

const urlHelper = new UrlHelper(location);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      iconType: 'down',
      systemLogo: localStorage.SystemLogo || '未设置',
      systemName: localStorage.SystemName || '未设置 ',
      terminalName: localStorage.TerminalName || '未设置',
      userTrueName: localStorage.UserTrueName || '未设置姓名',
    };
  }

  /**
   * 退出登录
   */
  logout = () => {
    this.setState({
      visible: true
    })
  };

  /**
   * 鼠标经过
   */
  onHover = () => {
    this.setState({
      iconType: 'up'
    })
  };

  /**
   * 鼠标移除
   */
  onOver = () => {
    this.setState({
      iconType: 'down'
    })
  };

  handleOk = () => {
    let loading = layer.msg('正在退出登录...', {
      icon: 16,
      shade: 0.3,
      time: 0
    });
    commonServices.LogOut({
      payload: {}
    }).then(data => {
      layer.close(loading);

      if (data.ReturnEntity === 1) {
        layer.msg('退出成功', {icon: 1, time: 1000}, () => {
          this.clearUserInfoStorage();
          this.jumpLink()
          this.setState({
            visible: false
          })
        });
      } else {
        layer.msg('退出失败', {icon: 2, time: 1000}, () => {
          this.setState({
            visible: false
          })
        })
      }
    });

  };

  handleCancel = () => {
    this.setState({
      visible: false
    })
  };
  jumpLink = () => {
    urlHelper.jump({
      path: '/Content/login.html'
    });
  };

  /**
   * 清除用户缓存
   */
  clearUserInfoStorage = () => {
    localStorage.removeItem('CopyrightInformation');
    localStorage.removeItem('ExamSceneId');
    localStorage.removeItem('SystemLogo');
    localStorage.removeItem('SystemName');
    localStorage.removeItem('SystemTerminalName');
    localStorage.removeItem('TerminalName');
    localStorage.removeItem('UserTrueName');
    localStorage.removeItem('ServerDateTime');
  };

  render() {
    return (
      <Row className={classnames(styele.HeaderBox, "header-box")} type="flex" justify="center">
        <Col span={12}>
          <img className={styele.logo} src={this.state.systemLogo}/>
          <span className="h4">{this.state.systemName}</span>
        </Col>
        <Col className="text-r" span={12}>
          <ul>
            <li className="consleQuit" onMouseOut={this.onOver} onMouseOver={this.onHover}>
              {this.state.userTrueName}<Icon type={this.state.iconType}/>
              <a className={classnames(styele.headerQuit, "text-c")}
                 onClick={this.logout}>退出</a>
            </li>
          </ul>
        </Col>
        <Modal
          title="提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
          okText="确定"
          cancelText="取消"
          width={300}
          wrapClassName="loginModal"
        >
          <p>是否退出当前登录</p>
        </Modal>
      </Row>
    )
  }
}

export default  Header
