/* vue import */
import Vue from 'vue';


import './index.css';

/* react import */
import React from "React";
import ReactDOM from "ReactDOM";
import HeaderInfo from "../components/layout/Header.jsx";
import SilderNav from "../components/layout/SilderNav.jsx"
import FooterInfo from "../components/layout/Footer.jsx"

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


let app2 = new Vue({
  el: '#vue_app',
  data() {
    return {
      tableHeight: 0,
      tableWidth: 0,
      defaultProps: {
        children: 'children',
        label: 'ExamSceneTimeName'
      },
      beginTimePickerOptions: {
        disabledDate(time) {
          return time.getTime() > (Date.parse(app2.searchParam.UpdateDateTimeEnd) - 28800000)
        },
      },
      endTimePickerOptions: {
        disabledDate(time) {
          return time.getTime() < (Date.parse(app2.searchParam.UpdateDateTimeStart) - 28800000)
        },
      },
      ExamSceneTimeList: [],
      cityList: [],
      zoneList: [],
      uploadedStatusList: [
        { text: "请选择状态", value: "0" },
        { text: "未上传", value: "1" },
        { text: "已上传", value: "2" },
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
        ExamSceneTimeId: "",
        CityId: "",
        ZoneId: "",
        SchoolName: "",
        RoomNumber: "",
        Isuploaded: "",
        UpdateDateTimeStart: "",
        UpdateDateTimeEnd: ""
      },
      //点击查询时的记录的查询参数
      searchedParam: {
        ExamSceneTimeId: "",
        CityId: "",
        ZoneId: "",
        SchoolName: "",
        RoomNumber: "",
        Isuploaded: "",
        UpdateDateTimeStart: "",
        UpdateDateTimeEnd: ""
      },
      UploadedExamRoomTotal: "",
      ExamRoomTotal: ""
    }
  },
  methods: {
    /**
     * 获取城市列表
     */
    getCityList() {
      var self = this;
      commonService.GetCityList({
        payload: {}
      }).then((data) => {
        if (data.ResultType != 1) {
          return;
        }
        if (data.ReturnEntity.length > 0) {
          self.cityList = data.ReturnEntity;
          self.cityList.unshift({
            CityId: "0",
            CityName: "请选择地市"
          });
        }
        self.setTableHeight()
      })
    },
    /**
     * 获取县区列表
     */
    getZoneList(cityId) {
      var self = this;
      commonService.GetZoneList({
        payload: { "CityId": cityId }
      }).then((data) => {
        if (data.ResultType != 1) {
          return;
        }
        if (data.ReturnEntity.length > 0) {
          data.ReturnEntity.unshift({
            ZoneId: "0",
            ZoneName: "请选择县区"
          });
          self.zoneList = data.ReturnEntity;
        }
      })
    },
    GetUploadDataList() {
      var self = this;
      var param = {
        "ExamSceneTimeId": this.searchedParam.ExamSceneTimeId,
        "CityId": this.searchedParam.CityId,
        "ZoneId": this.searchedParam.ZoneId,
        "SchoolName": this.searchedParam.SchoolName,
        "RoomNumber": this.searchedParam.RoomNumber,
        "Isuploaded": this.searchedParam.Isuploaded,
        "UpdateDateTimeStart": this.searchedParam.UpdateDateTimeStart,
        "UpdateDateTimeEnd": this.searchedParam.UpdateDateTimeEnd,
        "PageIndex": this.pager.currentPage,
        "PageSize": this.pager.pageSize
      };

      if (param.CityId == "") {
        param.CityId = "0"
      }
      if (param.ZoneId == "") {
        param.ZoneId = "0"
      }
      if (param.Isuploaded == "") {
        param.Isuploaded = "0"
      }
      param.SchoolName = param.SchoolName.trim();
      param.RoomNumber = param.RoomNumber.trim();
      let loading = layer.msg('加载中...', {
        icon: 16,
        shade: 0.3,
        time: 0
      });
      service.GetUploadDataList({
        payload: param
      }).then((data) => {
        if (data.ResultType != 1) {
          return;
        }
        layer.close(loading);
        self.list = data.ReturnEntity.ExamSceneInfo;
        self.pager.total = Number(data.ReturnEntity.RecordTotal);
        self.UploadedExamRoomTotal = data.ReturnEntity.UploadedExamRoomTotal;
        self.ExamRoomTotal = data.ReturnEntity.ExamRoomTotal;
      })
    },
    GetExamSceneTime() {
      var self = this;
      service.GetExamSceneTime({ payload: {} }).then((data) => {
        if (data.ResultType != 1) {
          return;
        }
        self.ExamSceneTimeList = [{
          ExamSceneTimeName: "考试场次",
          isRoot: true,
          disabled: true,
          children: data.ReturnEntity
        }];

        self.searchedParam.ExamSceneTimeId = self.searchParam.ExamSceneTimeId = data.ReturnEntity[0].ExamSceneTimeId;

        setTimeout(() => {
          self.setCurrentKey(self.searchedParam.ExamSceneTimeId);
          self.handleSearchBtnClick();
        }, 0);
      });
    },
    setCurrentKey(id) {
      this.$refs.tree.setCurrentKey(null);
      this.$refs.tree.setCurrentKey(id);
      this.searchedParam.ExamSceneTimeId = this.searchParam.ExamSceneTimeId = id;
    },
    handleNodeClick(data) {
      if (data.isRoot) {
        this.setCurrentKey(this.searchParam.ExamSceneTimeId)
        return;
      }

      this.searchedParam.ExamSceneTimeId = this.searchParam.ExamSceneTimeId = data.ExamSceneTimeId;
      this.searchedParam.CityId = this.searchParam.CityId = "";
      this.searchedParam.ZoneId = this.searchParam.ZoneId = "";
      this.searchedParam.SchoolName = this.searchParam.SchoolName = "";
      this.searchedParam.RoomNumber = this.searchParam.RoomNumber = "";
      this.searchedParam.Isuploaded = this.searchParam.Isuploaded = "";
      this.searchedParam.UpdateDateTimeStart = this.searchParam.UpdateDateTimeStart = "";
      this.searchedParam.UpdateDateTimeEnd = this.searchParam.UpdateDateTimeEnd = "";
      this.pager.currentPage = 1;
      this.GetUploadDataList();
    },
    /**
     * 地市下拉框改变触发
     */
    handleCityChange() {
      this.getZoneList(this.searchParam.CityId);
      this.zoneList = [];
      this.searchParam.ZoneId = "";
    },
    /**
      * 触发查询
      */
    handleSearchBtnClick() {
      this.searchedParam.CityId = this.searchParam.CityId;
      this.searchedParam.ZoneId = this.searchParam.ZoneId;
      this.searchedParam.SchoolName = this.searchParam.SchoolName;
      this.searchedParam.RoomNumber = this.searchParam.RoomNumber;
      this.searchedParam.Isuploaded = this.searchParam.Isuploaded;
      this.searchedParam.UpdateDateTimeStart = this.searchParam.UpdateDateTimeStart;
      this.searchedParam.UpdateDateTimeEnd = this.searchParam.UpdateDateTimeEnd;
      this.pager.currentPage = 1;
      this.GetUploadDataList();
    },
    handleSizeChange(val) {
      this.pager.pageSize = val;
      this.handleSearchBtnClick();
    },
    handleCurrentChange(val) {
      this.pager.currentPage = val;
      this.GetUploadDataList();
    },
    setTableHeight() {
      let bodyH = document.body.offsetHeight;
      let heH = document.querySelector('#header').offsetHeight;
      let fotterH = document.querySelector('#footer').offsetHeight;
      let tabBodyH = bodyH - heH - fotterH;
      $(".main-left").height(tabBodyH)
      this.tableHeight = tabBodyH - 55 - document.querySelector('.search-container').offsetHeight - 42 - 64 - 2;
      console.log(tabBodyH)
      this.tableWidth = (document.body.offsetWidth - document.querySelector('#side-nav').offsetWidth - 280) + "px";
    }
  },
  mounted() {
    this.GetExamSceneTime();
    this.getCityList();
    this.setTableHeight()
  }
});

window.addEventListener('resize', app2.setTableHeight);

ReactDOM.render((
  <SilderNav navType={5} />
), document.getElementById('side-nav'));
ReactDOM.render((
  <HeaderInfo />
), document.getElementById('header'));
ReactDOM.render((
  <FooterInfo />
), document.getElementById('footer'));
