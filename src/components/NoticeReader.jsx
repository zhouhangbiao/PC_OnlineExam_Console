import React from "React";
import {LocaleProvider, Modal, Pagination, Table, Tabs} from "antd";
import * as noticeServices from "../services/noticeServices";
import classnames from "classnames";
import UrlHelper from "js-url-helper";
import style from "./NoticeReader.less";
import zhCN from "antd/lib/locale-provider/zh_CN";
import nullImg from "../assets/images/data-null.png";

const TabPane = Tabs.TabPane;
const urlHelper = new UrlHelper(location);
const columns = [{
  title: '序号',
  dataIndex: 'AnnouncementIndex',
  width: 80
}, {
  title: '区域',
  dataIndex: 'CityName',
  width: 120
}, {
  title: '考点代码',
  dataIndex: 'SchoolCode',
  width: 120
}, {
  title: '考点名称 ',
  dataIndex: 'SchoolName',
}, {
  title: '机房名称',
  dataIndex: 'RoomName',
  width: 200
}];

class NoticeReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: '1',
      isRead: 1,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      tableBodyH: '100%',
      data: null,
      examRoomTotal: 0,
      examRoomRead: 0,
      dataSource: []

    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible && prevProps.visible !== this.props.visible) {
      this.getList()
    }
  }

  /**
   * 获取数据
   */
  getList = () => {
    let loading = layer.msg('获取中...', {
      icon: 16,
      shade: 0.3,
      time: 0
    });
    noticeServices.GetSchoolReadList({
      payload: {
        "AnnouncementId": this.props.Id,
        "IsRead": this.state.isRead,
        "PageIndex": this.state.pageIndex,
        "PageSize": this.state.pageSize
      }
    }).then(data => {
      layer.close(loading);
      this.setState({
        examRoomRead: data.ReturnEntity.ExamRoomRead,
        examRoomTotal: data.ReturnEntity.ExamRoomTotal
      });
      if (data.ReturnEntity.AnnouncementReadInfoList && data.ReturnEntity.AnnouncementReadInfoList.length) {
        this.exchangeData(data.ReturnEntity.AnnouncementReadInfoList);

        this.setState({
          data: data.ReturnEntity.AnnouncementReadInfoList,
          total: data.ReturnEntity.RecordTotal,
        })
      } else {
        this.setPageIndex(this.state.pageIndex, data)
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
        pageIndex: 1
      },()=>{this.getList()})
    } else {
      this.setState({
        total: data.ReturnEntity.RecordTotal
      })
    }
  };

  /**
   * 重置dataSource数据
   * @param data阅读情况数据-
   */
  exchangeData = (data) => {
    let subData = [];
    data.map(item => {
      subData.push({
        key: item.AnnouncementIndex,
        AnnouncementIndex: item.AnnouncementIndex,
        CityName: item.CityName,
        SchoolCode: item.SchoolCode,
        SchoolName: item.SchoolName,
        RoomName: item.RoomName
      })
    });
    this.setState({
      dataSource: subData
    })
  };

  /**
   *关闭弹框
   */
  handleCancel = () => {
    let _t = this;

    function fetch(callback) {
      return new Promise((resolve, reject) => {
        _t.props.onChange && _t.props.onChange('readerList', false);
      })
    }

    fetch().then(setTimeout(() => {
      _t.setState({
        activeKey: '1',
        isRead: 1,
        data: null,
        pageIndex: 1,
        pageSize: 10,
        dataSource: []
      })
    }, 500));
  };

  /**
   * 更改isRead值
   * @param e tab key
   */
  callback = (e) => {
    this.setState({
      isRead: e * 1,
      pageSize: 10,
      pageIndex: 1,
      activeKey: e,
      data: null,
      dataSource: []
    }, () => {
      this.getList()
    })
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
   * 空页面渲染
   * @return {*}
   */
  null = () => {
    return (
      <div style={{"padding": "80px 0"}}>
        <img src={nullImg}/>
        <p>{"暂无数据"}</p>
      </div>
    )
  };

  /**
   * 修改每页显示数量回调
   * @param current 第几页
   * @param size 没有显示数量
   */
  pageOnShowSizeChange = (current, size) => {
    this.setState({
      pageSize: size
    }, () => {
      this.getList();
    });
  };

  render() {
    return (
      <div>
        <Modal
          title="查看阅读情况"
          visible={this.props.visible}
          width={840}
          onCancel={this.handleCancel}
          footer={null}
          wrapClassName="notice-read-Modal"
        >
          <div className={classnames(style.exanRead, "font-title")}>阅读情况：<span
            className="font-wrong">{this.state.examRoomRead}</span>/{this.state.examRoomTotal}</div>
          <Tabs onChange={this.callback} type="card"
                activeKey={this.state.activeKey}>
            <TabPane tab="已读" key="1">
              <Table dataSource={this.state.dataSource}
                     columns={columns}
                     scroll={{x: 403, y: this.state.tableBodyH}}
                     pagination={false}
                     className={style.readeList}
                     locale={{
                       emptyText: (this.null)
                     }}
              />
            </TabPane>
            <TabPane tab="未读" key="2">
              <Table dataSource={this.state.dataSource}
                     columns={columns}
                     scroll={{x: 403, y: this.state.tableBodyH}}
                     pagination={false}
                     className={style.readeList}
                     locale={{
                       emptyText: (this.null)
                     }}
              />
            </TabPane>
          </Tabs>
          < LocaleProvider locale={zhCN}>
            < Pagination
              current={this.state.pageIndex}
              defaultCurrent={this.state.pageIndex}
              pageSize={this.state.pageSize}
              showQuickJumper={true}
              showSizeChanger={true}
              onShowSizeChange={this.pageOnShowSizeChange}
              total={this.state.total}
              onChange={this.pageOnChange}
              showTotal={(total, range) => `${"显示  " + range[0]}-${range[1]}, 共  ${total} 记录`}
              pageSizeOptions={['10', '20', '50', '100']}
            />
          </LocaleProvider>
        </Modal>
      </div>
    )
  }
}
export default NoticeReader;
