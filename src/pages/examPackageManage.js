/* vue import */import Vue from 'vue';
import DownloadFile from "../components/DownloadFile";
import HeaderInfo from "../components/layout/Header.jsx";
import SilderNav from "../components/layout/SilderNav.jsx"
import FooterInfo from "../components/layout/Footer.jsx"

import './index.css';
import * as service from '../services/examPackageManageServices';
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
      pageTitle: "正式数据",
      activeName: "first",
      commonDataList: [],
      schoolDataList: [],
      //分页参数
      schoolData: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      },
      //展示的查询参数
      schoolDataSearchParam: {
        CityId: "",
        ZoneId: "",
        SchoolCode: "",
        SchoolName: ""
      },
      //点击查询时的记录的查询参数
      schoolDataSearchedParam: {
        CityId: "",
        ZoneId: "",
        SchoolCode: "",
        SchoolName: ""
      },
      cityList: [],
      zoneList: [],
      SchoolTotal: "0",
      CreatedSchoolTotal: "0",
    }
  },
  methods: {
    generateCommonData: function (dataType) {
      var self = this;
      let loading = layer.msg('加载中...', {
        icon: 16,
        shade: 0.3,
        time: 0
      });
      service.GenerateCommonData({
        payload: {
          "DataType": dataType
        }
      }).then((data) => {
        layer.close(loading);
        if (data.ResultType != 1) { return; }
        if (data.ReturnEntity == 1) {
          self.getCommonDataList();
        }
      })
    },
    getCommonDataList: function () {
      var self = this;
      service.GetCommonDataList({
        payload: {}
      }).then((data) => {
        if (data.ResultType != 1) {
          return;
        }
        self.commonDataList = data.ReturnEntity
      })
    },
    /**
     * 启用数据
     */
    enableCommonData: function () {
      var self = this;
      MessageBox.confirm('确定要启用备用数据吗？ 启用后将替换掉原公共数据', '备用数据启用确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let loading = layer.msg('加载中...', {
          icon: 16,
          shade: 0.3,
          time: 0
        });
        service.EnableCommonData({
          payload: {}
        }).then((data) => {
          layer.close(loading);
          if (data.ResultType != 1) { return; }

          if (data.ReturnEntity == returnEnum.success) {
            layer.msg('启用成功', { icon: 1, time: 3000 }, () => {
              self.getCommonDataList();
            });

          } else {
            layer.msg('启用失败', { icon: 2, time: 3000 });
          }
        })
      }).catch(() => { });
    },
    handleExportCommonDataBtnClick: function (dataType) {
      this.exportCommonData(dataType);
    },
    //导出公共数据
    exportCommonData: function (dataType) {
      service.ExportCommonData({
        payload: { "DataType": dataType }
      }).then(DownloadFile);
    },
    ///////////////////////////////////////////////////
    /**
     * 获取城市列表
     */
    getCityList: function () {
      var self = this;
      commonService.GetCityList({
        payload: {}
      }).then((data) => {
        if (data.ResultType != 1) {
          return;
        }
        self.cityList = data.ReturnEntity;
        self.cityList.unshift({
          CityId: "0",
          CityName: "请选择地市"
        })
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
        if (data.ResultType != 1) {
          return;
        }
        if (data.ReturnEntity.length > 0) {
          self.zoneList = data.ReturnEntity;
          self.zoneList.unshift({
            ZoneId: "0",
            ZoneName: "请选择县区"
          })
        }
      })
    },
    /**
     * 地市下拉框改变触发
     */
    handleCityChange: function () {
      this.getZoneList(this.schoolDataSearchParam.CityId);
      this.zoneList = [];
      this.schoolDataSearchParam.ZoneId = "";
    },
    handleSearchBtnClick: function () {
      this.schoolDataSearchedParam.CityId = this.schoolDataSearchParam.CityId;
      this.schoolDataSearchedParam.ZoneId = this.schoolDataSearchParam.ZoneId;
      this.schoolDataSearchedParam.SchoolCode = this.schoolDataSearchParam.SchoolCode;
      this.schoolDataSearchedParam.SchoolName = this.schoolDataSearchParam.SchoolName;
      this.schoolData.currentPage = 1;
      this.getSchoolDataList();
    },
    /**
     * 获取考点列表
     */
    getSchoolDataList: function () {
      var self = this;
      var param = {
        "CityId": this.schoolDataSearchedParam.CityId,
        "ZoneId": this.schoolDataSearchedParam.ZoneId,
        "SchoolCode": this.schoolDataSearchedParam.SchoolCode,
        "SchoolName": this.schoolDataSearchedParam.SchoolName,
        "PageIndex": this.schoolData.currentPage,
        "PageSize": this.schoolData.pageSize
      };

      if (param.CityId == "") {
        param.CityId = "0"
      }
      if (param.ZoneId == "") {
        param.ZoneId = "0"
      }
      param.SchoolCode = param.SchoolCode.trim();
      param.SchoolName = param.SchoolName.trim();
      let loading = layer.msg('加载中...', {
        icon: 16,
        shade: 0.3,
        time: 0
      });
      service.GetSchoolDataList({
        payload: param
      }).then((data) => {
        layer.close(loading);
        if (data.ResultType != 1) {
          return;
        }
        self.schoolDataList = data.ReturnEntity.SchoolInfo;
        self.CreatedSchoolTotal = data.ReturnEntity.CreatedSchoolTotal;
        self.SchoolTotal = data.ReturnEntity.SchoolTotal;
        self.schoolData.total = Number(data.ReturnEntity.RecordTotal);
      })
    },
    /**
     * 生成全部按钮点击
     */
    handleGenerateAllBtnClick: function () {
      var self = this;
      MessageBox.confirm('确定要生成全部考点数据吗?', '考点数据批量生成提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let loading = layer.msg('加载中...', {
          icon: 16,
          shade: 0.3,
          time: 0
        });
        service.GenerateSchoolData({
          payload: { "SchoolId": "" }
        }).then((data) => {
          layer.close(loading);
          if (data.ResultType != 1) {
            return;
          }
          if (data.ReturnEntity == returnEnum.success) {
            self.getSchoolDataList()
          }
        });
      }).catch(() => { });
    },
    /**
     * 生成全部按钮点击
     */
    handleRowGenerateBtnClick: function (schoolId) {
      var self = this;
      let loading = layer.msg('加载中...', {
        icon: 16,
        shade: 0.3,
        time: 0
      });
      service.GenerateSchoolData({
        payload: { "SchoolId": schoolId }
      }).then((data) => {
        layer.close(loading);
        if (data.ResultType != 1) {
          return;
        }
        if (data.ReturnEntity == returnEnum.success) {
          self.getSchoolDataList();
        }
      });
    },
    handleSizeChange: function (val) {
      this.schoolData.pageSize = val;
      this.handleSearchBtnClick();
    },
    handleCurrentChange: function (val) {
      this.schoolData.currentPage = val;
      this.getSchoolDataList();
    },
    //触发批量导出考点数据
    handleExportAllSchoolDataBtnClick: function () {
      var self = this;
      MessageBox.confirm('确定要导出全部考点数据吗？', '考点数据批量导出提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        self.exportSchoolData("");
      }).catch(() => { });
    },
    //触发导出考点数据
    handleExportSchoolDataBtnClick: function (schoolId) {
      this.exportSchoolData(schoolId);
    },
    //导出考点数据
    exportSchoolData: function (schoolId) {
      service.ExportSchoolData({
        payload: {
          "SchoolId": schoolId
        }
      }).then(DownloadFile);
    }
  },
  mounted: function () {
    if (window.localStorage.ExamSceneId == 1) {
      this.pageTitle = "正式数据";
    } else if (window.localStorage.ExamSceneId == 2) {
      this.pageTitle = "模拟数据";
    }
    this.getCommonDataList();
    this.handleSearchBtnClick();
    this.getCityList();
  }
});

ReactDOM.render((
  <SilderNav navType={2} />
), document.getElementById('side-nav'));
ReactDOM.render((
  <HeaderInfo />
), document.getElementById('header'));
ReactDOM.render((
  <FooterInfo />
), document.getElementById('footer'));
