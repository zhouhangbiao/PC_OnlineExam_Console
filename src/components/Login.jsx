import React from "React";
import * as commonServices from "../services/commonServices";
import {Button, Col, Form, Icon, Input, Row} from "antd";
import style from "./Login.less";
import UrlHelper from "js-url-helper";
import encrypt from "../utils/encrypt";
let secretKey = '';

const urlHelper = new UrlHelper(location);
const FormItem = Form.Item;
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      examSceneId: '',
      systemName: '',
      systemLogo: '',
      systemTerminalName: '',
      copyrightInformation: '',
    };
    this.getSystemConfig();
  }

  /**
   * 获取系统配置信息
   */
  getSystemConfig = () => {
    commonServices.GetSystemConfig({
      payload: {}
    }).then(data => {
      if (data.ReturnEntity) {
        this.setState({
          systemName: data.ReturnEntity.SystemName,
          systemLogo: data.ReturnEntity.SystemLogo,
          systemTerminalName: data.ReturnEntity.SystemTerminalName,
          copyrightInformation: data.ReturnEntity.CopyrightInformation
        })
      }
    })
  };

  /**
   * 设置cookie
   */
  setUserInfoStorage = (userTrueName, serverDateTime) => {
    const {systemName, systemLogo, systemTerminalName, copyrightInformation} = this.state;
    localStorage.setItem('ServerDateTime', serverDateTime);
    localStorage.setItem('SystemName', systemName);
    localStorage.setItem('SystemLogo', systemLogo);
    localStorage.setItem('SystemTerminalName', systemTerminalName);
    localStorage.setItem('CopyrightInformation', copyrightInformation);
    localStorage.setItem('UserTrueName', userTrueName);
  };

  /**
   * 获取考试模式
   */
  getExamType = () => {
    commonServices.GetExamType({
      payload: {}
    }).then(data => {
      localStorage.setItem('ExamSceneId', data.ReturnEntity);

    })
  };

  /**
   * 提交表单事件
   * @param e
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return false;
      } else {
        this.getSecretKey(values);
      }
    });
  };

  /**
   * 获取密匙
   * @param values form表单值 用户名 密码
   */
  getSecretKey = (values) => {
    commonServices.GetSecretKey({
      payload: {"userName": values.userName}
    }).then(data => {
      secretKey = data.ReturnEntity.SecretKey || secretKey;
      this.login(values,secretKey)
    })
  };

  /**
   * 登录接口
   * @param values
   */
  login = (values,secretKey) => {
    let loading = layer.msg('登录中...', {
      icon: 16,
      shade: 0.3,
      time: 0
    });

    commonServices.Login({
      payload: {
        "UserName": values.userName,
        "Password": encrypt.encryptByTripleDES(encrypt.encryptByMD5(values.password), secretKey)
      }
    }).then(data => {
      layer.close(loading);

      if (data.ReturnEntity && data.ReturnEntity.LoginState === 1) {
        layer.msg('登录成功', {icon: 1, time: 1000}, () => {
          this.getExamType();
          this.jumpLink();
        });
        this.setUserInfoStorage(data.ReturnEntity.UserTrueName, data.ReturnEntity.ServerDateTime)
      } else {
        layer.msg('用户名或密码错误', {icon: 2, time: 1000});
      }
    })
  };

  /**
   * 跳转公告页面
   */
  jumpLink = () => {
    urlHelper.jump({
      path: '/Content/home.html'
    });
  };

  /**
   * 渲染DOM
   */
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={style.loginWrap}>
        <Row className={style.headerBox} type="flex" justify="center" gutter={24}>
          <Col span={24}>
            <a className={style.logo}>
              <img src={this.state.systemLogo}/>
            </a>
            <h2>{this.state.systemName}</h2>
          </Col>
        </Row>
        <div className={style.loginBox}>
          <div className={style.login}>
            <h2>{this.state.systemTerminalName}登录</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: '请输入姓名'}],
                })(
                  <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                         maxLength={50}
                         placeholder="请输入姓名"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: '请输入密码'}],
                })(
                  <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                         type="password"
                         maxLength={50}
                         placeholder="请输入密码"/>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login);
