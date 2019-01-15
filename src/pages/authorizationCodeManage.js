/* vue import */
import Vue from 'vue';


import './index.css';

/* react import */
import React from "React";
import ReactDOM from "ReactDOM";
import HeaderInfo from "../components/layout/Header.jsx";
import SilderNav from "../components/layout/SilderNav.jsx"
import FooterInfo from "../components/layout/Footer.jsx"

import DownloadFile from "../components/DownloadFile";
import * as service from '../services/authorizationCodeManageServices';
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

var returnEnum = {
  success: 1,
  error: 2
};

let app2 = new Vue({
  el: '#vue_app',
  data() {
    return {
      systemDate: "",
      beginTimePickerOptions: {
        disabledDate(time) {
          return time.getTime() > (Date.parse(app2.searchParam.EndTime) - 28800000)
        },
      },
      beginTimePickerOptions4Form: {
        disabledDate(time) {
          var nowDate = new Date(app2.systemDate);
          nowDate.setDate(nowDate.getDate() - 1);
          if (app2.form.EndTime == "") {
            return time.getTime() < nowDate;
          } else {
            return time.getTime() > (Date.parse(app2.form.EndTime) - 28800000)
              || time.getTime() < nowDate;
          }
        }
      },
      endTimePickerOptions: {
        disabledDate(time) {
          return time.getTime() < (Date.parse(app2.searchParam.BeginTime) - 28800000)
        },
      },
      endTimePickerOptions4Form: {
        disabledDate(time) {
          var nowDate = new Date(app2.systemDate);
          nowDate.setDate(nowDate.getDate() - 1);

          if (app2.form.BeginTime == "") {
            return time.getTime() < nowDate;
          } else {
            return time.getTime() < (Date.parse(app2.form.BeginTime) - 28800000)
              || time.getTime() < nowDate;
          }
        },
      },
      cityList: [],
      zoneList: [],
      operationTypeList: [
        { text: "请选择类型", value: "0" },
        { text: "脱机码", value: "1" },
        { text: "开考码", value: "2" },
        { text: "延考码", value: "3" },
        { text: "重考码", value: "4" },
        { text: "重开码", value: "5" },
        { text: "统开码", value: "6" }
      ],
      list: [],
      //分页参数
      pager: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      },
      //展示的查询参数
      searchParam: {
        CityId: "",
        ZoneId: "",
        OperationType: "",
        SchoolName: "",
        RoomNumber: "",
        DogCode: "",
        BeginTime: "",
        EndTime: ""
      },
      //点击查询时的记录的查询参数
      searchedParam: {
        CityId: "",
        ZoneId: "",
        OperationType: "",
        SchoolName: "",
        RoomNumber: "",
        DogCode: "",
        BeginTime: "",
        EndTime: ""
      },
      /**
       * 弹出窗口部分
       */
      dialogFormVisible: false,
      formOperationTypeList: [
        { text: "脱机码", value: "1" },
        { text: "开考码", value: "2" },
        { text: "延考码", value: "3" },
        { text: "重考码", value: "4" },
        { text: "重开码", value: "5" },
        { text: "统开码", value: "6" }
      ],
      formCityList: [],
      formZoneList: [],
      formSchoolList: [],
      formRoomList: [],
      form: {
        OperationType: "",
        RoomId: "",
        BeginTime: "",
        EndTime: "",
        LeftTimeLength: "",

        CityId: "",
        ZoneId: "",
        SchoolId: "",
        SchoolCode: "",
        DogCode: ""
      },
      rules: {
        OperationType: [
          { required: true, message: '请选择类型', trigger: 'change' },
        ],
        CityId: [
          { required: true, message: '请选择地市', trigger: 'change' }
        ],
        ZoneId: [
          { required: true, message: '请选择县区', trigger: 'change' }
        ],
        SchoolId: [
          { required: true, message: '请选择考点名称', trigger: 'change' }
        ],
        RoomId: [
          { required: true, message: '请选择机房编号', trigger: 'change' }
        ],
        BeginTime: [
          { required: true, message: '请选有效期', trigger: 'change' }
        ],
        EndTime: [
          { required: true, message: '请选有效期', trigger: 'change' }
        ],
        LeftTimeLength: [
          { required: true, message: '请填写1-10之间的整数', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    GetSystemDateTime() {
      var self = this;
      commonService.GetSystemDateTime({ payload: {} }).then((data) => {
        if (data.ResultType != 1) { return; }
        self.systemDate = data.ReturnEntity.toString().split(" ")[0];
      });
    },
    /**
     * 获取城市列表
     */
    getCityList: function () {
      var self = this;
      commonService.GetCityList({
        payload: {}
      }).then((data) => {
        if (data.ResultType != 1) { return; }

        self.cityList = data.ReturnEntity;
        self.cityList.unshift({
          CityId: "0",
          CityName: "请选择地市"
        });
      })
    },
    /**
     * 获取县区列表
     */
    getZoneList: function (cityId) {
      var self = this;
      commonService.GetZoneList({
        payload: { "CityId": cityId }
      }).then((data) => {
        if (data.ResultType != 1) { return; }

        if (data.ReturnEntity.length > 0) {
          data.ReturnEntity.unshift({
            ZoneId: "0",
            ZoneName: "请选择县区"
          });
          self.zoneList = data.ReturnEntity;
        }
      })
    },
    /**
     * 获取城市列表
     */
    getCityList4Form: function () {
      var self = this;
      commonService.GetCityList({
        payload: {}
      }).then((data) => {
        if (data.ResultType != 1) { return; }

        self.formCityList = data.ReturnEntity;
      })
    },
    /**
     * 为表单获取县区列表
     */
    getZoneList4Form: function (cityId) {
      var self = this;
      commonService.GetZoneList({
        payload: { "CityId": cityId }
      }).then((data) => {
        if (data.ResultType != 1) { return; }

        self.formZoneList = data.ReturnEntity;
      })
    },
    getList() {
      var self = this;
      var param = {
        "CityId": this.searchedParam.CityId,
        "ZoneId": this.searchedParam.ZoneId,
        "OperationType": this.searchedParam.OperationType,
        "SchoolName": this.searchedParam.SchoolName,
        "RoomNumber": this.searchedParam.RoomNumber,
        "DogCode": this.searchedParam.DogCode,
        "BeginTime": this.searchedParam.BeginTime,
        "EndTime": this.searchedParam.EndTime,
        "PageIndex": this.pager.currentPage,
        "PageSize": this.pager.pageSize
      };

      if (param.CityId == "") {
        param.CityId = "0"
      }
      if (param.ZoneId == "") {
        param.ZoneId = "0"
      }
      if (param.OperationType == "") {
        param.OperationType = "0"
      }
      param.SchoolName = param.SchoolName.trim();
      param.RoomNumber = param.RoomNumber.trim();
      param.DogCode = param.DogCode.trim();
      let loading = layer.msg('加载中...', {
        icon: 16,
        shade: 0.3,
        time: 0
      });
      service.GetList({
        payload: param
      }).then((data) => {
        layer.close(loading);
        if (data.ResultType != 1) { return; }

        self.list = data.ReturnEntity.AuthorizationCodeInfo;
        self.pager.total = Number(data.ReturnEntity.RecordTotal);
      })
    },
    getSchoolList(zoneId) {
      var self = this;
      service.GetSchoolList({
        payload: {
          "ZoneId": zoneId
        }
      }).then((data) => {
        if (data.ResultType != 1) { return; }

        self.formSchoolList = data.ReturnEntity;
      });
    },
    getExamRoomList(schoolId) {
      var self = this;
      service.GetExamRoomList({
        payload: {
          "SchoolId": schoolId
        }
      }).then((data) => {
        if (data.ResultType != 1) { return; }

        self.formRoomList = data.ReturnEntity;
      });
    },
    /**
     * 表单提交
     */
    submitForm(formName) {
      var self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let loading = layer.msg('加载中...', {
            icon: 16,
            shade: 0.3,
            time: 0
          });
          service.Add({
            payload: {
              "OperationType": self.form.OperationType,
              "RoomId": self.form.RoomId,
              "BeginTime": self.form.BeginTime,
              "EndTime": self.form.EndTime,
              "LeftTimeLength": self.form.OperationType == 5 ? self.form.LeftTimeLength * 60 : ""
            }
          }).then((data) => {
            layer.close(loading);
            if (data.ResultType != 1) { return; }

            if (data.ReturnEntity == returnEnum.success) {
              layer.msg('保存成功', { icon: 1, time: 3000 }, () => { self.getList() });
              self.dialogFormVisible = false;
            } else {
              layer.msg('保存失败', { icon: 2, time: 3000 });
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm() {
      if (this.$refs["ruleForm"]) {
        this.$refs["ruleForm"].resetFields();
      }
      this.form.BeginTime = this.systemDate;
      this.form.EndTime = this.systemDate;
      this.form.LeftTimeLength = "";
      this.clearFormZone();
      this.clearFormSchool();
      this.clearFormRoom();
    },
    /**
     * 地市下拉框改变触发
     */
    handleCityChange: function () {
      this.getZoneList(this.searchParam.CityId);
      this.zoneList = [];
      this.searchParam.ZoneId = "";
    },
    /**
     * 触发查询
     */
    handleSearchBtnClick: function () {
      this.searchedParam.CityId = this.searchParam.CityId;
      this.searchedParam.ZoneId = this.searchParam.ZoneId;
      this.searchedParam.OperationType = this.searchParam.OperationType;
      this.searchedParam.SchoolName = this.searchParam.SchoolName;
      this.searchedParam.RoomNumber = this.searchParam.RoomNumber;
      this.searchedParam.DogCode = this.searchParam.DogCode;
      this.searchedParam.BeginTime = this.searchParam.BeginTime;
      this.searchedParam.EndTime = this.searchParam.EndTime;
      this.pager.currentPage = 1;
      this.getList();
    },
    /**
      * 触发导出
      */
    handleAddBtnClick() {
      this.dialogFormVisible = true;
      this.resetForm();
    },
    /**
     * 触发导出
     */
    handleExportBtn: function (authorizationCodeRecordId) {
      service.Export({
        payload: {
          "AuthorizationCodeRecordId": authorizationCodeRecordId
        }
      }).then(DownloadFile)
    },
    handleSizeChange: function (val) {
      this.pager.pageSize = val;
      this.handleSearchBtnClick();
    },
    handleCurrentChange: function (val) {
      this.pager.currentPage = val;
      this.getList();
    },

    /**
     * 清除县区
     */
    clearFormZone() {
      this.formZoneList = [];
      this.form.ZoneId = "";
    },
    /**
     * 清除考点
     */
    clearFormSchool() {
      this.formSchoolList = [];
      this.form.SchoolId = "";
      this.form.SchoolCode = "";
    },
    /**
     * 清除机房
     */
    clearFormRoom() {
      this.formRoomList = [];
      this.form.RoomId = "";
      this.form.DogCode = "";
    },
    /**
     * 表单的地市下拉框改变触发
     */
    handleCityChange4Form: function () {
      this.getZoneList4Form(this.form.CityId);
      this.clearFormZone();
      this.clearFormSchool();
      this.clearFormRoom();
    },
    /**
     * 表单的地市下拉框改变触发
     */
    handleZoneChange4Form: function () {
      this.getSchoolList(this.form.ZoneId);
      this.clearFormSchool();
      this.clearFormRoom();
    },
    handleSchoolChange4Form(val) {
      var self = this;
      self.form.SchoolCode = "";
      $(self.formSchoolList).each(function (i, e) {
        if (e.SchoolId == val) {
          self.form.SchoolCode = e.SchoolCode;
        }
      });
      self.getExamRoomList(val);
      self.clearFormRoom();
    },
    handleRoomChange4Form(val) {
      var self = this;
      self.form.DogCode = "";
      $(self.formRoomList).each(function (i, e) {
        if (e.RoomId == val) {
          self.form.DogCode = e.DogCode;
        }
      });
    }
  },
  filters: {
    operationTypeFilter(value) {
      switch (value.toString()) {
        case "1": return "脱机码";
        case "2": return "开考码";
        case "3": return "延考码";
        case "4": return "重考码";
        case "5": return "重开码";
        case "6": return "统开码";
        default: return "";
      };
    }
  },
  mounted: function () {
    this.GetSystemDateTime();
    this.handleSearchBtnClick();
    this.getCityList();
    this.getCityList4Form();
  }
});

ReactDOM.render((
  <SilderNav navType={3} />
), document.getElementById('side-nav'));
ReactDOM.render((
  <HeaderInfo />
), document.getElementById('header'));
ReactDOM.render((
  <FooterInfo />
), document.getElementById('footer'));
