/* vue import */
import Vue from 'vue';


import './index.css';

/* react import */
import React from "React";
import ReactDOM from "ReactDOM";
import HeaderInfo from "../components/layout/Header.jsx";
import SilderNav from "../components/layout/SilderNav.jsx";
import FooterInfo from "../components/layout/Footer.jsx";
import * as service from '../services/wrongQuestionServices';
import * as commonService from '../services/commonServices';
import DownloadFile from "../components/DownloadFile";

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
      showFileBtn: true,
      errorMsg: "",
      beginTimePickerOptions: {
        disabledDate(time) {
          return time.getTime() > (Date.parse(app2.searchParam.EndDateTime) - 28800000)
        },
      },
      endTimePickerOptions: {
        disabledDate(time) {
          return time.getTime() < (Date.parse(app2.searchParam.BeginDateTime) - 28800000)
        },
      },
      ExamSceneList: [],
      CourseList: [],
      QuestionCategoryList: [],
      StatusList: [
        { text: "全部", value: "0" },
        { text: "待确认", value: "1" },
        { text: "已确认", value: "2" },
        { text: "不做处理", value: "3" }
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
        ExamSceneId: "",
        CourseId: "",
        QuestionCategoryId: "",
        Status: "",
        BeginDateTime: "",
        EndDateTime: "",
      },
      //点击查询时的记录的查询参数
      searchedParam: {
        ExamSceneId: "",
        CourseId: "",
        QuestionCategoryId: "",
        Status: "",
        BeginDateTime: "",
        EndDateTime: "",
      },
      dialogFormVisible: false,
      form: {
        "isReadonly": false,
        "WrongQuestionId": "",//错题id，加密
        "Content": "",//题干图片的base64
        "GroupContent": "",//小题图片的base64
        "ReportingTypeName": "",//错题类型名称
        "ReportComment": "",//错题上报描述
        "ProcessType": "",//处理意见类型
        "ProcessComment": "",//处理意见描述
      },
      rules: {
        ProcessType: [
          { required: true, message: '请选择处理意见', trigger: 'change' },
        ]
      },
      dialogFormVisible1: false,
      fileList: [],
      form1: {
      },
      rules1: {
        file: [
          { required: true, message: '请导入txt格式的文件，且不超过10M', trigger: 'change' },
        ]
      }
    }
  },
  mounted() {
    this.handleSearchBtnClick();
    this.GetExamSceneTimeInfo();
    this.GetExamCourse();
  },
  methods: {
    GetExamSceneTimeInfo() {
      var self = this;
      commonService.GetExamSceneTimeInfo({
        payload: {}
      }).then((data) => {
        if (data.ResultType == 1 && data.ReturnEntity.length > 0) {
          self.ExamSceneList = data.ReturnEntity;
          self.ExamSceneList.unshift({
            ExamSceneTimeId: "0",
            ExamSceneTimeName: "请选择考试场次"
          });
        }
      });
    },
    GetExamCourse() {
      var self = this;
      commonService.GetExamCourse({
        payload: {}
      }).then((data) => {
        if (data.ResultType == 1 && data.ReturnEntity.length > 0) {
          self.CourseList = data.ReturnEntity;
          self.CourseList.unshift({
            CourseId: "0",
            CourseName: "请选择学科"
          });
        }
      });
    },
    GetCourseCategory(courseId) {
      var self = this;
      commonService.GetCourseCategory({
        payload: { "CourseId": courseId }
      }).then((data) => {
        if (data.ResultType == 1 && data.ReturnEntity.length > 0) {
          self.QuestionCategoryList = data.ReturnEntity;
          self.QuestionCategoryList.unshift({
            QuestionCategoryId: "0",
            QuestionCategoryName: "请选择题型"
          });
        }
      });
    },

    GetQuestionList() {
      var self = this;
      var param = {
        "ExamSceneId": this.searchedParam.ExamSceneId,
        "CourseId": this.searchedParam.CourseId,
        "QuestionCategoryId": this.searchedParam.QuestionCategoryId,
        "Status": this.searchedParam.Status,
        "BeginDateTime": this.searchedParam.BeginDateTime,
        "EndDateTime": this.searchedParam.EndDateTime,
        "PageIndex": this.pager.currentPage,
        "PageSize": this.pager.pageSize
      };

      if (param.ExamSceneId == "") {
        param.ExamSceneId = "0"
      }
      if (param.CourseId == "") {
        param.CourseId = "0"
      }
      if (param.QuestionCategoryId == "") {
        param.QuestionCategoryId = "0"
      }
      if (param.Status == "") {
        param.Status = "0"
      }
      let loading = layer.msg('加载中...', {
        icon: 16,
        shade: 0.3,
        time: 0
      });
      service.GetQuestionList({
        payload: param
      }).then((data) => {
        if (data.ResultType == 1) {
          layer.close(loading);
          self.list = data.ReturnEntity.WrongQuestions;
          self.pager.total = Number(data.ReturnEntity.TotalCount);
        }
      });
    },
    GetQuestionDetail(wrongQuestionId) {
      var self = this;

      service.GetQuestionDetail({
        payload: {
          "WrongQuestionId": wrongQuestionId
        }
      }).then((data) => {
        if (data.ResultType == 1) {
          self.form.isReadonly = data.ReturnEntity.ProcessType == 1 ? false : true;
          self.form.WrongQuestionId = data.ReturnEntity.WrongQuestionId;
          self.form.Content = data.ReturnEntity.Content;
          self.form.GroupContent = data.ReturnEntity.GroupContent;
          self.form.ReportingTypeName = data.ReturnEntity.ReportingTypeName;
          self.form.ReportComment = data.ReturnEntity.ReportComment;
          self.form.ProcessType = data.ReturnEntity.ProcessType == 1 ? "" : data.ReturnEntity.ProcessType;
          self.form.ProcessComment = data.ReturnEntity.ProcessComment;
        }
      });
    },
    openDialog(id) {
      this.dialogFormVisible = true;
      this.GetQuestionDetail(id);
    },
    openDialog1() {
      this.errorMsg = "";
      this.dialogFormVisible1 = true;
    },
    submitForm(formName) {
      var self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let loading = layer.msg('加载中...', {
            icon: 16,
            shade: 0.3,
            time: 0
          });
          service.SubmitQuestionProcess({
            payload: {
              "WrongQuestionId": self.form.WrongQuestionId,//加密的错题id
              "ProcessType": self.form.ProcessType,//处理意见id，2确认有效，3不作处理
              "Comment": self.form.ProcessComment//说明
            }
          }).then((data) => {
            if (data.ResultType == 1) {
              layer.close(loading);
              self.GetQuestionList();
              self.dialogFormVisible = false;
            }
          });
        } else {
          return false;
        }
      });
    },
    submitUpload() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        layer.msg('请先选择文件', { icon: 2, time: 3000 });
      }
      this.$refs.upload.submit();
    },
    handleFileSuccess(response) {
      var self = this;
      if (response.ResultType != 1) {
        this.errorMsg = "提示：" + response.Message;
        return;
      }
      switch (response.ReturnEntity.toString()) {
        case "1":
          self.dialogFormVisible1 = false;
          layer.msg('上传成功', { icon: 1, time: 3000 }, () => {
            self.GetQuestionList();
          });
          break;
        case "2":
          this.errorMsg = "仅支持txt文件格式";
          // layer.msg('仅支持txt文件格式', { icon: 2, time: 3000 });
          break;
        case "3":
          this.errorMsg = "提示：导入文件无效，未找到相应的资源目录。";
          // layer.msg('导入文件无效，未找到相应的资源目录', { icon: 2, time: 3000 });
          break;
        case "4":
          this.errorMsg = "提示：只允许导入小于10M的文件";
          // layer.msg('只允许导入小于10M的文件', { icon: 2, time: 3000 });
          break;
        case "5":
          this.errorMsg = "未找到文件";
          // layer.msg('未找到文件', { icon: 2, time: 3000 });
          break;
      }
    },
    handleFileError() {
      layer.msg('上传失败', { icon: 2, time: 3000 });
      this.showFileBtn = true;
    },
    /**
     * 学科下拉框改变触发
     */
    handleQuestionCategoryChange: function () {
      this.GetCourseCategory(this.searchParam.CourseId);
      this.QuestionCategoryList = [];
      this.searchParam.QuestionCategoryId = "";
    },
    /**
     * 触发查询
     */
    handleSearchBtnClick: function () {
      this.searchedParam.ExamSceneId = this.searchParam.ExamSceneId;
      this.searchedParam.CourseId = this.searchParam.CourseId;
      this.searchedParam.QuestionCategoryId = this.searchParam.QuestionCategoryId;
      this.searchedParam.Status = this.searchParam.Status;
      this.searchedParam.BeginDateTime = this.searchParam.BeginDateTime;
      this.searchedParam.EndDateTime = this.searchParam.EndDateTime;
      this.pager.currentPage = 1;
      this.GetQuestionList();
    },
    handleExportBtn() {
      service.ExportWrongQuestion({
        payload: {}
      }).then(DownloadFile);
    },
    handleSizeChange: function (val) {
      this.pager.pageSize = val;
      this.handleSearchBtnClick();
    },
    handleCurrentChange: function (val) {
      this.pager.currentPage = val;
      this.GetQuestionList();
    },
    handleFileChange(file, fileList) {
      var temp = file.name.split(".");
      var extension;
      var valid = 0;
      if (temp.length == 0) {
        valid++;
      } else {
        extension = temp[temp.length - 1]
        if (extension.toLowerCase() != "txt") {
          valid++;
        }
        if (file.size > 1024 * 1024 * 10) {
          valid++;
        }
      }
      if (valid > 0) {
        this.$refs.upload.clearFiles();
        layer.msg('请导入txt格式的文件，且不超过10M', { icon: 2, time: 3000 });
      }

      if (this.$refs.upload.uploadFiles.length > 0) {
        this.showFileBtn = false;
      }
    },
    handleFileRemove() {
      this.showFileBtn = true;
      this.errorMsg = "";
    }
  },
  filters: {
    statusFilter(value) {
      switch (value.toString()) {
        case "1": return "待确认";
        case "2": return "已确认";
        case "3": return "不作处理";
        default: return "";
      };
    },
    processTypeFilter(value) {
      switch (value.toString()) {
        case "2": return "确认有效";
        case "3": return "无效,不作处理";
        default: return "";
      };
    }
  },
  watch: {
    dialogFormVisible(curVal) {
      if (curVal == false) {
        if (this.$refs["ruleForm"] && !this.form.isReadonly) {
          this.$refs["ruleForm"].resetFields();
        }
      }
    },
    dialogFormVisible1(curVal) {
      if (curVal == false) {
        if (this.$refs.upload) {
          this.$refs.upload.clearFiles();
          this.showFileBtn = true;
        }
      }
    }
  }
});




ReactDOM.render((
  <SilderNav navType={8} />
), document.getElementById('side-nav'));
ReactDOM.render((
  <HeaderInfo />
), document.getElementById('header'));
ReactDOM.render((
  <FooterInfo />
), document.getElementById('footer'));
