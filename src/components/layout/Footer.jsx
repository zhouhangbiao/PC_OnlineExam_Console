/**
 * Created by 粉红豹 on 2018/8/16.
 * 教师端尾部组件
 */

import React from "React";
import classnames from "classnames";

const copyrightInformation = '版权信息：'+ window.localStorage.CopyrightInformation || '版权信息：江西省南昌市考试院2018';
class Footer extends React.Component {
  render() {
    return (
      <div className={classnames( "text-c footer-box")}>{copyrightInformation}</div>
    )
  }
}

export default Footer
