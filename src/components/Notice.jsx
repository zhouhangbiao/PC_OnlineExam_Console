import React from "React";
import {Button, Col, LocaleProvider, Pagination, Row, Table} from "antd";
import style from "./Notice.less";
import zhCN from "antd/lib/locale-provider/zh_CN";
import * as noticeServices from "../services/noticeServices";
import UrlHelper from "js-url-helper";
import NoticeContent from "./NoticeContent.jsx";
import NoticeReader from "./NoticeReader.jsx";
import PushNotice from "./PushNotice.jsx";
import DeleteNotice from "./DeleteNotice.jsx";
import nullImg from "../assets/images/data-null.png";

const urlHelper = new UrlHelper(location);
const columns = [{
  title: '标题',
  dataIndex: 'AnnouncementTitle',
}, {
  title: '发布时间',
  dataIndex: 'PublishTime',
  width: 200
}, {
  title: '阅读情况',
  dataIndex: 'read',
  width: 200
}, {
  title: '状态 ',
  dataIndex: 'Status',
  width: 200
}, {
  title: '操作',
  dataIndex: 'bar',
  width: 200
}];

class Notice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isRead: 1,
      visible: false,
      deleteVisible: false,
      contentVisible: false,
      releaseVisible: false,
      pushVisible: false,
      Id: '',
      examSceneId: 0,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      tableBodyH: '100%',
      dataSource: [],
      data: null
    };
    this.getList();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setTableHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setTableHeight)
  }

  /**
   * 获取公告列表
   */
  getList = () => {
    let loading = layer.msg('加载中...', {
      icon: 16,
      shade: 0.3,
      time: 0
    });
    noticeServices.GetList({
      payload: {
        "PageIndex": this.state.pageIndex,
        "PageSize": this.state.pageSize
      }
    }).then(data => {
      layer.close(loading);
      if (data.ReturnEntity.AnnouncementInfo && data.ReturnEntity.AnnouncementInfo.length) {
        this.setState({
          data: data.ReturnEntity.AnnouncementInfo,
          total: data.ReturnEntity.AnnouncementTotal
        }, () => {
          this.exchangeData()
        })
      } else {
        this.setPageIndex(this.state.pageIndex, data);
      }
    })
  };

  /**
   * 不为1时空数据时跳转第一页
   * @param pageIndex 当前页码
   * @param data 数据
   */
  setPageIndex = (pageIndex, data) => {
    if (pageIndex !== 1) {
      this.setState({
        pageIndex: 1,
      }, () => {
        this.getList()
      })
    } else {
      this.setState({
        total: data.ReturnEntity.AnnouncementTotal,
        data: []
      })
    }
  };

  /**
   * 重置表格数据
   */
  exchangeData = () => {
    const {data} = this.state;
    let subData = [];

    data.map(item => {
      subData.push({
        key: item.AnnouncementId,
        AnnouncementTitle: this.titleFun(item.AnnouncementTitle, item.AnnouncementId),
        PublishTime: this.publishTimeFun(item.PublishTime, item.IsPublished),
        read: this.redaFun(item.ExamRoomRead, item.ExamRoomTotal, item.AnnouncementId, item.IsPublished),
        Status: item.IsPublished === 1 ? '已发布' : '暂存',
        bar: this.barFun(item.IsPublished, item.AnnouncementId)
      })
    });
    this.setState({
      dataSource: subData
    }, () => {
      this.setTableHeight();
    })
  };

  /**
   * 渲染时间Dom
   * @param PublishTime
   * @return {XML}
   */
  publishTimeFun = (PublishTime, status) => {
    return (
      status === 1 ? (<div className={style.time}>{ PublishTime }</div>) : ''
    )
  };

  /**
   * 公告标题
   * @param announcementTitle 标题
   * @param announcementId 公告ID
   * @return {XML}
   */
  titleFun = (announcementTitle, announcementId) => {
    return (
      <span className={style.announcementTitle} key={announcementId} onClick={() => {
        this.openModal('readerContent', announcementId)
      }}>{announcementTitle}</span>
    )
  };


  /**
   * 阅读情况渲染DOM
   * @param examRoomRead 已阅读数量
   * @param examRoomTotal 公告总数量
   * @return {XML}
   */
  redaFun = (examRoomRead, examRoomTotal, announcementId, status) => {
    return (
      status === 1 ? (
        <div className={style.examRead} onClick={() => {
          this.openModal('readerList', announcementId)
        }}>
          <span className="font-primary">{examRoomRead}</span>
          <span>/{examRoomTotal}</span>
        </div>
      ) : ('')
    )
  };

  /**
   * 设置各个弹框visible的值
   * @param tpl 类型
   * @param flg Boolean
   */
  setVisible = (tpl, flg) => {
    const visibleTpl = {
      readerList: 'visible',
      readerContent: 'contentVisible',
      readerDelete: 'deleteVisible',
      readerPush: 'pushVisible'
    };
    switch (tpl) {
      case 'readerList':
        this.setState({
          visible: flg
        });
        break;
      case 'readerContent':
        this.setState({
          contentVisible: flg
        });
        break;
      case 'readerDelete':
        this.setState({
          deleteVisible: flg
        });
        break;
      case 'readerPush':
        this.setState({
          pushVisible: flg
        });
        break;
      default:
        break;
    }
  };

  /**
   * 查看阅读情况弹框
   */
  openModal = (tpl, announcementId) => {
    this.setState({
      Id: announcementId
    }, () => {
      this.setVisible(tpl, true);
    });
  };

  renderGetData = () => {
    this.setState({
      dataSource: [],
      data: null
    }, () => {
      this.getList();
    });
  };

  /**
   * 操作栏渲染DOM
   * @param status 公告状态
   * @return {XML}
   */
  barFun = (status, id) => {
    if (status === 0) {
      return (
        <div className={style.listBar}>
          <a className="font-primary" onClick={() => {
            this.props.dom.openDialog(id)
          }}>修改</a>
          <a className="font-primary" onClick={() => {
            this.openModal('readerPush', id)
          }}>发布</a>
          <a className="font-wrong" onClick={() => {
            this.openModal('readerDelete', id)
          }}>删除</a>
        </div>
      )
    }
  };


  /**
   * 修改第几页回调
   * @param e pageIndex
   */
  pageOnChange = (e) => {
    this.setState({
      pageIndex: e
    }, () => {
      this.getList();
    });
  };

  /**
   * 修改每页显示数量回调
   * @param current pageIndex
   * @param size pageSize
   */
  pageOnShowSizeChange = (current, size) => {
    this.setState({
      pageSize: size
    }, () => {
      this.getList();
    });
  };

  /**
   * 关闭按钮弹框
   * @param tpl 类
   * @param flg Boolean
   */
  onChange = (tpl, flg) => {
    this.setVisible(tpl, flg);
  };
  /**
   * 设置表格的高度
   */
  setTableHeight = () => {
    if (this.state.dataSource.length) {
      let bodyH = document.body.offsetHeight;
      let heH = document.querySelector('#header').offsetHeight;
      let fotterH = document.querySelector('#footer').offsetHeight;
      let tabHeder = document.querySelector('.ant-table-header').offsetHeight;
      let tabHed = 75;
      let speacH = 10;
      let PageH = 37;
      let tabBodyH = bodyH - heH - fotterH - tabHeder - speacH * 2 - PageH - tabHed - 46;
      this.setState({
        tableBodyH: tabBodyH + 'px'
      })
    }
  };

  render() {
    return (
      <div className={style.noticeBox}>
        <Row className={style.noticeHeader}>
          <Col span={12}>公告</Col>
          <Col span={12} className="text-r"><Button type={"primary"} onClick={() => {
            this.props.dom.openDialog()
          }}>新增</Button></Col>
        </Row>
        <Row className={style.noticeList}>
          <Col span={24}>
            {
              this.state.data !== null ? (
                <div>
                  <Table dataSource={this.state.dataSource}
                         columns={columns}
                         scroll={{x: 864, y: this.state.tableBodyH}}
                         pagination={false}
                         locale={{
                           emptyText: (
                             <div style={{"padding": "80px 0"}}>
                               <img src={nullImg}/>
                               <p>{"暂无数据"}</p>
                             </div>)
                         }}
                  />
                  <LocaleProvider locale={zhCN}>
                    <Pagination
                      current={this.state.pageIndex}
                      defaultCurrent={this.state.pageIndex}
                      pageSize={this.state.pageSize}
                      showQuickJumper={true}
                      showSizeChanger={true}
                      hideOnSinglePage={false}
                      onShowSizeChange={this.pageOnShowSizeChange}
                      total={this.state.total}
                      onChange={this.pageOnChange}
                      showTotal={(total, range) => `${"显示  " + range[0]}-${range[1]}, 共  ${total} 记录`}
                      pageSizeOptions={['10', '20', '50', '100']}
                    />
                  </LocaleProvider>
                </div>
              ) : ('')
            }

            <NoticeReader visible={this.state.visible} Id={this.state.Id} onChange={this.onChange}/>
            <NoticeContent visible={this.state.contentVisible} Id={this.state.Id} onChange={this.onChange}/>
            <PushNotice visible={this.state.pushVisible}
                        Id={this.state.Id}
                        onChange={this.onChange}
                        renderGetData={this.renderGetData}/>
            <DeleteNotice visible={this.state.deleteVisible}
                          Id={this.state.Id}
                          onChange={this.onChange}
                          renderGetData={this.renderGetData}/>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Notice;
