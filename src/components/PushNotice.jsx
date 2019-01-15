import React from "React";
import {Modal} from "antd"
import * as noticeServices from "../services/noticeServices";


class PushNotice extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  handleCancel=()=>{
    this.props.onChange&&this.props.onChange('readerPush',false);
  };

  /**
   * 点击发布
   */
  releaseHandleOk = () => {
    let loading = layer.msg('发布中...', {
      icon: 16,
      shade: 0.3,
      time: 0
    });
    noticeServices.Publish({
      payload: {
        "AnnouncementId": this.props.Id
      }
    }).then(data => {
      layer.close(loading);
      this.props.onChange && this.props.onChange('readerPush', false);

      if (data.ReturnEntity === 1) {
        layer.msg('发布成功', {icon: 1, time: 1000}, () => {
          this.props.renderGetData && this.props.renderGetData()
        });
      } else {
        layer.msg('发布失败', {icon: 2, time: 1000});
      }
    })
  };
  render(){
    return(
      <Modal
        title="提示"
        visible={this.props.visible}
        width={300}
        okText="确定"
        cancelText="取消"
        onCancel={this.handleCancel}
        onOk={this.releaseHandleOk}
      >
        <p className="text-c">确定要发布吗？</p>
      </Modal>
    )
  }
};
export default  PushNotice;
