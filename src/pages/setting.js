/* vue import */
import Vue from 'vue';


import './index.css';

/* react import */
import React from "React";
import ReactDOM from "ReactDOM";
import HeaderInfo from "../components/layout/Header.jsx";
import SilderNav from "../components/layout/SilderNav.jsx"
import FooterInfo from "../components/layout/Footer.jsx"
import * as commonService from '../services/commonServices';
/* 避免在同一页面，模块调用 Element，antd 相同名字的组件 */
// import { DatePicker } from "antd";

import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.use(Loading.directive);


let app2 = new Vue({
  el: '#vue_app',
  data() {
    return {
      activeName: "first",
      IsTimeout: "0",
      form1: {
        MonitorLoginSetting: "",
        AllowMonitorLoginTime: "",
        AllowMonitorLoginBeginTime: "",
        AllowMonitorLoginEndTime: "",
        ExamOpenModel: "",
        OpenExamTimeSetting: "",
        AroundExamMinuteAllowOpen: "",
        ExamCloseModel: "",
        IsAllowDelayExam: "",
        IsAllowReexamination: "",
        IsReexaminationChangePaper: "",
        MissExamTimeLengthSetting: "",
        MissExamTimeThreshold: "",
        TransmissionDownloadSetting: "",
        TransmissionDownloadLimit: "",
        TransmissionUploadSetting: "",
        TransmissionUploadLimit: "",
        DownloadThreadCountSetting: "",
        DownloadThreadCount: "",
        MonitorRemindTimeSetting: "",
        MonitorRemindTimeLength: "",
        GeneratePaperSetting: "",
        IsMultiSectionSelLessScored: "",
        AllowMonitorSystemLoginTime: "",
        AllowMonitorSystemLoginBeginTime: "",
        AllowMonitorSystemLoginEndTime: "",



        AnswerModel: "",
        IsChangeSwitch: "",
        IsQuestionCountDown: "",
        StudentRemindTimeSetting: "",
        StudentRemindTimeLength: "",
        IsSeatingPlanEnabled: "",
        AllowExamineSystemLoginTime: "",
        AllowExamineSystemLoginBeginTime: "",
        AllowExamineSystemLoginEndTime: "",
        IsAllowToUseKeyBoardWhenExaming: "",
        IsExamingNeedCoursesOrder: ""
      },
      error: {
        e1: "",
        e2: "",
        e3: "",
        e4: "",
        e5: "",
        e6: "",
        e7: "",
        e8: "",
        e9: "",
        e10: ""
      }
    };
  },
  methods: {
    setData() { },
    handleAroundExamMinuteAllowOpenChange(val) {
      this.form1.AroundExamMinuteAllowOpen = val.replace(/\D/g, '');
    },
    handleMissExamTimeThresholdChange(val) {
      this.form1.MissExamTimeThreshold = val.replace(/\D/g, '');
    },
    handleTransmissionDownloadLimitChange(val) {
      this.form1.TransmissionDownloadLimit = val.replace(/\D/g, '');
    },
    handleTransmissionUploadLimitChange(val) {
      this.form1.TransmissionUploadLimit = val.replace(/\D/g, '');
    },
    handleDownloadThreadCountChange(val) {
      this.form1.DownloadThreadCount = val.replace(/\D/g, '');
    },
    handleMonitorRemindTimeLengthChange(val) {
      this.form1.MonitorRemindTimeLength = val.replace(/\D/g, '');
    },
    handleStudentRemindTimeLengthChange(val) {
      this.form1.StudentRemindTimeLength = val.replace(/\D/g, '');
    },
    validForm1() {
      var count = 0;
      // if (this.form1.MonitorLoginSetting == 3
      //   && (this.form1.AllowMonitorLoginBeginTime == "" || this.form1.AllowMonitorLoginEndTime == "")) {
      //   this.error.e1 = "请填写完整时间段";
      //   count++;
      // } else {
      //   this.error.e1 = "";
      // }
      if (this.form1.MonitorLoginSetting == 3
        && (this.form1.AllowMonitorLoginTime == "" || this.form1.AllowMonitorLoginTime == null)) {
        this.error.e1 = "请填写完整时间段";
        count++;
      } else {
        this.error.e1 = "";
      }

      if (this.form1.ExamOpenModel == 1
        && this.form1.OpenExamTimeSetting == 2
        && this.form1.AroundExamMinuteAllowOpen == "") {
        this.error.e2 = "请填写分钟数";
        count++;
      } else {
        this.error.e2 = "";
      }

      if (this.form1.MissExamTimeLengthSetting == 2 && this.form1.MissExamTimeThreshold.toString() == "") {
        this.error.e3 = "请填写分钟数";
        count++;
      } else {
        this.error.e3 = "";
      }
      //代码不能删除以后要用
      // if (this.form1.TransmissionDownloadSetting == 2 && this.form1.TransmissionDownloadLimit.toString() == "") {
      //   this.error.e4 = "请填写传输数值";
      //   count++;
      // } else {
      //   this.error.e4 = "";
      // }

      // if (this.form1.TransmissionUploadSetting == 2 && this.form1.TransmissionUploadLimit.toString() == "") {
      //   this.error.e5 = "请填写传输数值";
      //   count++;
      // } else {
      //   this.error.e5 = "";
      // }

      if (this.form1.DownloadThreadCountSetting == 2 && this.form1.DownloadThreadCount.toString() == "") {
        this.error.e6 = "请填写线程数";
        count++;
      } else {
        this.error.e6 = "";
      }

      if (this.form1.MonitorRemindTimeSetting == 2 && this.form1.MonitorRemindTimeLength.toString() == "") {
        this.error.e7 = "请填写分钟数";
        count++;
      } else {
        this.error.e7 = "";
      }
      if (!this.form1.AllowMonitorSystemLoginTime) {
        this.error.e9 = "请填写完整时间段";
        count++;
      } else {
        this.error.e9 = "";
      }
      return count == 0;
    },
    validForm2() {
      var count = 0;
      if (this.form1.StudentRemindTimeSetting == 2 && this.form1.StudentRemindTimeLength.toString() == "") {
        this.error.e8 = "请填写分钟数";
        count++;
      } else {
        this.error.e8 = "";
      }
      if (!this.form1.AllowExamineSystemLoginTime) {
        this.error.e10 = "请填写完整时间段";
        count++;
      } else {
        this.error.e10 = "";
      }
      return count == 0;
    },
    dateFormat(date, format) { //author: meizz
      date = new Date(date);
      var o = {
        'M+': date.getMonth() + 1, //month
        'd+': date.getDate(), //day
        'H+': date.getHours(), //hour+8小时
        'm+': date.getMinutes(), //minute
        's+': date.getSeconds(), //second
        'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
        'S': date.getMilliseconds() //millisecond
      };
      if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

      for (var k in o)
        if (new RegExp('(' + k + ')').test(format))
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));

      return format;

    },
    submitForm() {
      if (this.activeName == "first") {
        if (this.validForm1()) {

          let loading = layer.msg('加载中...', {
            icon: 16,
            shade: 0.3,
            time: 0
          });

          var beginTime = "";
          var endTime = "";
          // if (this.form1.AllowMonitorLoginBeginTime != "") {
          //   beginTime = this.dateFormat(new Date(this.form1.AllowMonitorLoginBeginTime), "yyyy-MM-dd HH:mm:ss");
          // }
          // if (this.form1.AllowMonitorLoginEndTime != "") {
          //   endTime = this.dateFormat(new Date(this.form1.AllowMonitorLoginEndTime), "yyyy-MM-dd HH:mm:ss");
          // }
          if (this.form1.AllowMonitorLoginTime) {
            beginTime = this.dateFormat(this.form1.AllowMonitorLoginTime[0], "yyyy-MM-dd HH:mm:ss");
            endTime = this.dateFormat(this.form1.AllowMonitorLoginTime[1], "yyyy-MM-dd HH:mm:ss");
          }
          commonService.Save({
            payload: [{
              "ItemName": "MonitorLoginSetting",//教师机登录设置
              "ItemValue": this.form1.MonitorLoginSetting//1允许教师机登录，2禁止教师机登录  3允许时间段（和AllowMonitorLoginBeginTime、AllowMonitorLoginEndTime结合使用）
            }, {
              "ItemName": "AllowMonitorLoginBeginTime",// 登录时间段设置 开始时间
              "ItemValue": beginTime//时间string
            }, {
              "ItemName": "AllowMonitorLoginEndTime",// 登录时间段设置 结束时间
              "ItemValue": endTime //时间string
            }, {
              "ItemName": "ExamOpenModel",//考试开启设置
              "ItemValue": this.form1.ExamOpenModel  //1.考试开启设置 1手动启动  2考前XX秒后自动启动（和下面BeforeExamMinuteAutoStart结合使用）
            }, {
              "ItemName": "OpenExamTimeSetting",// 开启考试时间设置 1始终允许， 2考前后XX秒方可开启（和AroundExamMinuteAllowOpen结合使用）
              "ItemValue": this.form1.OpenExamTimeSetting//1始终允许， 2考前后XX秒方可开启（和AroundExamMinuteAllowOpen结合使用）
            }, {
              "ItemName": "AroundExamMinuteAllowOpen",//考前XX秒自动启动
              "ItemValue": parseInt(this.form1.AroundExamMinuteAllowOpen * 60)//xx秒
            }, {
              "ItemName": "ExamCloseModel",//考试关闭设置
              "ItemValue": this.form1.ExamCloseModel  //1手动关闭  2自动关闭
            }, {
              "ItemName": "IsAllowDelayExam",//延考设置 1允许 2不允许
              "ItemValue": this.form1.IsAllowDelayExam  //1允许 2不允许
            }, {
              "ItemName": "IsAllowReexamination",//重考设置 1允许(和IsReexaminationChangePaper结合使用) 2不允许
              "ItemValue": this.form1.IsAllowReexamination // 1允许 2不允许
            }, {
              "ItemName": "IsReexaminationChangePaper",//重考是否换卷 1.重考换卷 2.不换卷
              "ItemValue": this.form1.IsReexaminationChangePaper //
            }, {
              "ItemName": "MissExamTimeLengthSetting",//缺考时长设置 1不限制 2开考后XX秒未开始则自动标记为缺考（和MissExamTimeThreshold结合使用）
              "ItemValue": this.form1.MissExamTimeLengthSetting  // 1不限制 2开考后XX秒未开始则自动标记为缺考（和MissExamTimeThreshold结合使用）
            }, {
              "ItemName": "MissExamTimeThreshold",//开考后XX秒自动标记为缺考，单位分
              "ItemValue": parseInt(this.form1.MissExamTimeThreshold * 60)  //xx秒
            }, {
              "ItemName": "TransmissionDownloadSetting",//传输下载设置  1无限制  2限速 （和TransmissionDownloadLimit结合使用）
              "ItemValue": this.form1.TransmissionDownloadSetting // 1无限制  2限速
            }, {
              "ItemName": "TransmissionDownloadLimit",//下载限速为XX KB/S
              "ItemValue": this.form1.TransmissionDownloadLimit  //单位KB/s
            }, {
              "ItemName": "TransmissionUploadSetting",//传输上传设置  1无限制  2限速为XX KB/S(和下面TransmissionUploadLimit结合使用)
              "ItemValue": this.form1.TransmissionUploadSetting // 1无限制  2限速
            }, {
              "ItemName": "TransmissionUploadLimit",//上传限速为XX KB/S
              "ItemValue": this.form1.TransmissionUploadLimit  //单位KB/s
            }, {
              "ItemName": "DownloadThreadCountSetting",//下载线程设置 1无限制 2设置最大线程数（和DownloadThreadCount结合使用）
              "ItemValue": this.form1.DownloadThreadCountSetting //1无限制 2设置最大线程数
            }, {
              "ItemName": "DownloadThreadCount",//最大下载线程数
              "ItemValue": this.form1.DownloadThreadCount  //1允许教师机登录，2禁止教师机登录  3允许时间段（和AllowMonitorLoginBeginTime、AllowMonitorLoginEndTime结合使用）
            }, {
              "ItemName": "MonitorRemindTimeSetting",//教师端是否倒计时提醒 1不提醒  2考试结束前XX秒提醒（和MonitorRemindTimeLength结合使用）
              "ItemValue": this.form1.MonitorRemindTimeSetting // 1不提醒  2考试结束前XX秒提醒
            }, {
              "ItemName": "MonitorRemindTimeLength",//教师端考试结束前XX秒提醒
              "ItemValue": parseInt(this.form1.MonitorRemindTimeLength * 60)  // 教师端考试结束前XX秒提醒
            }, {
              "ItemName": "GeneratePaperSetting",//组卷方式设置 1.提前组卷 2.实时组卷
              "ItemValue": this.form1.GeneratePaperSetting // 1.提前组卷 2.实时组卷
            }, {
              "ItemName": "IsMultiSectionSelLessScored",//多选题少选是否给分 1给分 0不给分
              "ItemValue": this.form1.IsMultiSectionSelLessScored //  1给分 0不给分
            }, {
              "ItemName": "AllowMonitorSystemLoginBeginTime",// 教师机系统当天开放时间 开始时间
              "ItemValue": this.form1.AllowMonitorSystemLoginTime[0]  //时间string
            }, {
              "ItemName": "AllowMonitorSystemLoginEndTime",//  教师机系统当天开放时间  结束时间
              "ItemValue": this.form1.AllowMonitorSystemLoginTime[1]  //时间string
            }]
          }).then((data) => {
            if (data.ResultType != 1) {
              return;
            }
            layer.close(loading);
            if (data.ReturnEntity == 1) {
              layer.msg('保存成功', { icon: 1, time: 3000 });
            } else {
              layer.msg('保存失败', { icon: 2, time: 3000 });
            }
          });
        }
      }
      else {
        if (this.validForm2()) {

          let loading = layer.msg('加载中...', {
            icon: 16,
            shade: 0.3,
            time: 0
          });
          commonService.Save({
            payload: [{
              "ItemName": "AnswerModel",//答题样式  1单题模式  2整卷模式
              "ItemValue": this.form1.AnswerModel // 1单题模式  2整卷模式
            }, {
              "ItemName": "IsChangeSwitch",//答题卡中题目是否可切换，1允许切换，0禁止切换（和下面的IsQuestionCountDown结合使用）
              "ItemValue": this.form1.IsChangeSwitch //1允许切换，0禁止切换
            }, {
              "ItemName": "IsQuestionCountDown",//是否开启题目倒计时  1开启单题倒计时  2关闭单题倒计时
              "ItemValue": this.form1.IsQuestionCountDown //  1开启单题倒计时  2关闭单题倒计时
            }, {
              "ItemName": "StudentRemindTimeSetting",//学生端是否倒计时提醒 1不提醒  2考试结束前XX秒提醒（和StudentRemindTimeLength结合使用）
              "ItemValue": this.form1.StudentRemindTimeSetting//  1不提醒  2考试结束前XX秒提醒
            }, {
              "ItemName": "StudentRemindTimeLength",//教师端考试结束前前XX秒提醒
              "ItemValue": parseInt(this.form1.StudentRemindTimeLength * 60)   //教师端考试结束前前XX秒提醒
            }, {
              "ItemName": "IsSeatingPlanEnabled",//是否启用座位号
              "ItemValue": this.form1.IsSeatingPlanEnabled   //是否启用座位号
            }, {
              "ItemName": "AllowExamineSystemLoginBeginTime",//考试机系统当天开放时间 开始时间
              "ItemValue": this.form1.AllowExamineSystemLoginTime[0]
            }, {
              "ItemName": "AllowExamineSystemLoginEndTime",//考试机系统当天开放时间  结束时间
              "ItemValue": this.form1.AllowExamineSystemLoginTime[1]
            }, {
              "ItemName": "IsAllowToUseKeyBoardWhenExaming",//  考试过程中是否允许使用键盘
              "ItemValue": this.form1.IsAllowToUseKeyBoardWhenExaming //1：启用键盘 0：禁用键盘
            }, {
              "ItemName": "IsExamingNeedCoursesOrder",//  同场连考考试顺序限制
              "ItemValue": this.form1.IsExamingNeedCoursesOrder //1：按顺序先后考试 0：可同时考试
            }]
          }).then((data) => {
            if (data.ResultType != 1) {
              return;
            }
            layer.close(loading);
            if (data.ReturnEntity == 1) {
              layer.msg('保存成功', { icon: 1, time: 3000 });
            } else {
              layer.msg('当前时间段，不允许再修改设置。', { icon: 2, time: 3000 });
            }
          });
        }
      }
    },
    handleExamOpenModelChange(val) {
      if (val == 1) {
        this.form1.ExamCloseModel = "1";
      } else {
        this.form1.ExamCloseModel = "2";
      }
    }
  }, mounted() {
    var self = this;
    commonService.GetInfo({
      payload: {}
    }).then((data) => {
      if (data.ResultType != 1) {
        return;
      }
      self.IsTimeout = data.ReturnEntity.IsTimeout;
      if (data.ReturnEntity.CommonConfigInfo.length > 0) {
        $(data.ReturnEntity.CommonConfigInfo).each(function (i, e) {
          switch (e.ItemName) {
            case "AllowMonitorLoginBeginTime":
            case "AllowMonitorLoginEndTime":
              if (new Date(e.ItemValue) == "Invalid Date") {
                self.form1[e.ItemName] = "";
              } else {
                self.form1[e.ItemName] = e.ItemValue;
              }
              break;
            case "AroundExamMinuteAllowOpen":
            case "MissExamTimeThreshold":
            case "MonitorRemindTimeLength":
            case "StudentRemindTimeLength":
              self.form1[e.ItemName] = parseInt(e.ItemValue / 60);
              break;
            default:
              self.form1[e.ItemName] = e.ItemValue;
              break;
          }
        });
        if (self.form1["AllowMonitorLoginBeginTime"] && self.form1["AllowMonitorLoginEndTime"]) {
          self.form1["AllowMonitorLoginTime"] = [self.form1["AllowMonitorLoginBeginTime"], self.form1["AllowMonitorLoginEndTime"]];
        }
        if (self.form1["AllowExamineSystemLoginBeginTime"] && self.form1["AllowExamineSystemLoginEndTime"]) {
          self.form1["AllowExamineSystemLoginTime"] = [self.form1["AllowExamineSystemLoginBeginTime"], self.form1["AllowExamineSystemLoginEndTime"]];
        }
        if (self.form1["AllowMonitorSystemLoginBeginTime"] && self.form1["AllowMonitorSystemLoginEndTime"]) {
          self.form1["AllowMonitorSystemLoginTime"] = [self.form1["AllowMonitorSystemLoginBeginTime"], self.form1["AllowMonitorSystemLoginEndTime"]];
        }
      }
    });
  }
});





ReactDOM.render((
  <SilderNav navType={6} />
), document.getElementById('side-nav'));
ReactDOM.render((
  <HeaderInfo />
), document.getElementById('header'));
ReactDOM.render((
  <FooterInfo />
), document.getElementById('footer'));
