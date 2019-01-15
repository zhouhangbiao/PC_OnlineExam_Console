import React from "React";
import {Modal} from "antd";
import * as noticeServices from "../services/noticeServices";

class NoticeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      announcementId: '',
      announcementTitle: '',
      updateDateTime: '',
      announcementContent: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible && prevProps.visible !== this.props.visible) {
      this.getContent()
    }
  }

  /**
   * 获取公告内容
   */
  getContent = () => {
    let loading = layer.msg('获取中...', {
      icon: 16,
      shade: 0.3,
      time: 0
    });
    noticeServices.Read({
      payload: {
        "AnnouncementId": this.props.Id
      }
    }).then(data => {
      layer.close(loading);
      this.setState({
        announcementTitle: data.ReturnEntity.AnnouncementTitle,
        updateDateTime: data.ReturnEntity.UpdateDateTime,
        announcementContent: data.ReturnEntity.AnnouncementContent
      })
    })
  };


  handleCancel = () => {
    this.props.onChange && this.props.onChange('readerContent', false);
    this.setState({
      activeKey: '1',
      isRead: 1
    });
  };

  render() {
    return (
      <Modal
        title="查看公告"
        visible={this.props.visible}
        width={840}
        onCancel={this.handleCancel}
        footer={null}
        wrapClassName="notice-read-Modal"
      >
        <h3 className="text-c">{this.state.announcementTitle}</h3>
        <p className="text-c">
          <span>时间：</span>
          <span className="text-c" dangerouslySetInnerHTML={{__html: this.state.updateDateTime}}/>
        </p>

        <div style={{"max-height": "340px", "overflow": "auto"}}
             dangerouslySetInnerHTML={{__html: this.state.announcementContent}}/>
      </Modal>
    )
  }
}
export default NoticeContent;
