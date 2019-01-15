import React from "React";
import classnames from "classnames";
import { Icon, Menu } from "antd";
import style from "./SilderNav.less";
import UrlHelper from "js-url-helper";

const urlHelper = new UrlHelper(location);
const localStorage = window.localStorage;
const examSceneId = localStorage.ExamSceneId * 1;
const SubMenu = Menu.SubMenu;

/**
 * 跳转连接集合
 * @type {{
 *  0: 首页
 *  1: 公告,
 *  2: 考试数据包管理,
 *  3: 授权码管理,
 *  4: 下载数据监控,
 *  5: 上传数据监控,
 *  6: 统一设置
 *  7: 考生须知
 *  }}
 */
const links = {
  0: '/Content/home.html',
  1: '/Content/notice.html',
  2: '/Content/examPackageManage.html',
  3: '/Content/authorizationCodeManage.html',
  4: '/Content/downloadDataManage.html',
  5: '/Content/uploadDataManage.html',
  6: '/Content/setting.html',
  7: '/Content/notes.html',
  8: '/Content/wrongQuestion.html'
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      navType: this.props.navType + '' || '',
      subKey: this.subKeyFun(this.props.navType + '')
    };


  }

  /**
   * 设置初始展开的 SubMenu 菜单项 key 数组
   * @param navType 初始选中的菜单项 key 数组
   * @return {string} 菜单项 key 数组
   */
  subKeyFun = (navType) => {
    let subkey = '';
    switch (navType) {
      case '2':
        subkey = 'sub1';
        break;
      case '3':
      case '4':
      case '5':
      case '8':
        subkey = 'sub2';
        break;
      case '6':
      case '7':
        subkey = 'sub3';
        break;
      default:
        break;
    }
    return subkey;
  };

  /**
   * 导航展开收缩
   */
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  /**
   * 侧边导航跳转连接
   * @param e
   */
  jumpLick = (e) => {
    urlHelper.jump({
      path: links[e.key],
    });
  };

  render() {
    return (
      <div className={style.consleBox}>
        <div className={classnames(style.silderNaveIcon, "text-c")} onClick={this.toggleCollapsed}><Icon
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} /></div>
        <Menu
          defaultSelectedKeys={[this.state.navType]}
          defaultOpenKeys={[this.state.subKey]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          onClick={this.jumpLick}
        >
          <Menu.Item key="0">
            <span className="icon icon-home"></span>
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="1">
            <span className="icon icon-notice"></span>
            <span>公告</span>
          </Menu.Item>
          <SubMenu key="sub1" title={<div><span className="icon icon-data"></span><span>考试数据包管理</span></div>}>
            {examSceneId === 1 ? (<Menu.Item key="2" value="1">正式数据</Menu.Item>) : (
              <Menu.Item key="2" value="2">模拟数据</Menu.Item>)}
          </SubMenu>
          <SubMenu key="sub2" title={<div><span className="icon icon-monitor"></span><span>考试监控</span></div>}>
            <Menu.Item key="3">授权码管理</Menu.Item>
            <Menu.Item key="4">下载数据监控</Menu.Item>
            <Menu.Item key="5">上传数据监控</Menu.Item>
            <Menu.Item key="8">错题上报处理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<div><span className="icon icon-system"></span><span>系统设置</span></div>}>
            <Menu.Item key="6">统一设置</Menu.Item>
            <Menu.Item key="7">设置考生须知</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
export default Header;





