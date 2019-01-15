/**
 * 删除公告
 */
import React from "React";
import {Modal} from "antd";
import * as noticeServices from "../services/noticeServices";

class DeleteNotice extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * 关闭弹框
   */
  handleCancel = () => {
    this.props.onChange && this.props.onChange('readerDelete', false);
  };

  /**
   * 打开弹框，删除公告事件
   * AnnouncementId：String 公告ID
   */
  handleOk = () => {
    let loading = layer.msg('删除中...', {
      icon: 16,
      shade: 0.3,
      time: 0
    });

    noticeServices.Delete({
      payload: {
        "AnnouncementId": this.props.Id
      }
    }).then(data => {
      layer.close(loading);
      this.props.onChange && this.props.onChange('readerDelete', false);

      if (data.ReturnEntity === 1) {
        layer.msg('删除成功', {icon: 1, time: 1000}, () => {
          this.props.renderGetData && this.props.renderGetData()
        });
      } else {
        layer.msg('删除失败', {icon: 2, time: 1000});
      }
    })
  };

  render() {
    return (
      <Modal
        title="提示"
        visible={this.props.visible}
        width={300}
        okText="确定"
        cancelText="取消"
        onCancel={this.handleCancel}
        onOk={this.handleOk}
      >
        <p className="text-c">确定要删除吗？</p>
      </Modal>
    )
  }
}
export default DeleteNotice;
