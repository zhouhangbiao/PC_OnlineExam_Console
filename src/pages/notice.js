/* vue import */
import Vue from "vue";


import "./index.css";
/* react import */
import React from "React";
import ReactDOM from "ReactDOM";
import HeaderInfo from "../components/layout/Header.jsx";
import SilderNav from "../components/layout/SilderNav.jsx";
import FooterInfo from "../components/layout/Footer.jsx";
import Notice from "../components/Notice.jsx";

import * as service from "../services/noticeServices";
import {
  Alert,
  Aside,
  Autocomplete,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  ColorPicker,
  Container,
  DatePicker,
  Dialog,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Footer,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  InputNumber,
  Loading,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Option,
  OptionGroup,
  Pagination,
  Popover,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Rate,
  Row,
  Select,
  Slider,
  Step,
  Steps,
  Submenu,
  Switch,
  Table,
  TableColumn,
  TabPane,
  Tabs,
  Tag,
  TimePicker,
  TimeSelect,
  Tooltip,
  Tree,
  Upload
} from "element-ui";
/* 避免在同一页面，模块调用 Element，antd 相同名字的组件 */
// import { DatePicker } from "antd";

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

let myRef = React.createRef();
var editor;
let app2 = new Vue({
  el: '#vue_app',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        AnnouncementTitle: "",
        AnnouncementContent: "",
        AnnouncementId: "",
        OperationType: "1" //1：新增  2：修改
      },
      rules: {
        AnnouncementTitle: [
          { required: true, whitespace: true, message: '请填写公告标题', trigger: 'change' },
        ],
        AnnouncementContent: [
          { required: true, message: '请填写公告内容', trigger: 'change' }
        ]
      }
    }
  },
  mounted() {
  },
  methods: {
    openDialog(id) {
      var self = this;
      self.resetForm();
      self.dialogFormVisible = true;

      if (!id) {
        self.form.OperationType = "1";
        setTimeout(() => {
          CKEDITOR.replace("editor", { height: "300px", width: "100%", toolbar: "Full" });
          editor = CKEDITOR.instances.editor
          editor.setData("");
        }, 0);
      } else {
        service.Read({
          payload: { "AnnouncementId": id }
        }).then((data) => {
          if (data.ResultType != 1) {
            return;
          }
          self.form.AnnouncementContent = data.ReturnEntity.AnnouncementContent;
          self.form.AnnouncementTitle = data.ReturnEntity.AnnouncementTitle;
          self.form.AnnouncementId = data.ReturnEntity.AnnouncementId;
          self.form.OperationType = "2";
          setTimeout(() => {
            CKEDITOR.replace("editor", { height: "300px", width: "100%", toolbar: "Full" });
            editor = CKEDITOR.instances.editor
            editor.setData(data.ReturnEntity.AnnouncementContent);
          }, 0);
        });
      }
    },
    resetForm() {
      if (this.$refs["ruleForm"]) {
        this.$refs["ruleForm"].resetFields();
      }
      this.form.AnnouncementContent = "";
      this.form.AnnouncementTitle = "";
      this.form.AnnouncementId = "";
      this.form.OperationType = "1";
    },
    handleSaveBtn(formName, isPublish) {
      var self = this;
      self.form.AnnouncementContent = editor.getData()

      self.$refs[formName].validate((valid) => {
        if (valid) {
          let loading = layer.msg('加载中...', {
            icon: 16,
            shade: 0.3,
            time: 0
          });
          service.Save({
            payload: {
              "AnnouncementId": self.form.AnnouncementId,
              "AnnouncementTitle": self.form.AnnouncementTitle.trim(),
              "AnnouncementContent": self.form.AnnouncementContent,
              "OperationType": self.form.OperationType
            }
          }).then((data) => {
            layer.close(loading);
            if (data.ResultType != 1) {
              return;
            }
            if (data.ReturnEntity.SaveState == 1) {
              layer.msg('保存成功', { icon: 1, time: 3000 });
              editor.destroy();
              self.dialogFormVisible = false;

              if (isPublish) {
                loading = layer.msg('加载中...', {
                  icon: 16,
                  shade: 0.3,
                  time: 0
                });

                service.Publish({
                  payload: {
                    "AnnouncementId": data.ReturnEntity.AnnouncementId
                  }
                }).then((data1) => {
                  layer.close(loading);
                  if (data.ResultType != 1) {
                    return;
                  }
                  if (data1.ReturnEntity == 1) {
                    layer.msg('发布成功', { icon: 1, time: 3000 }, () => {
                      myRef.current.getList()
                      self.handleCancleBtn();
                    });
                  } else {
                    layer.msg('发布失败', { icon: 2, time: 3000 });
                  }
                });
              } else {
                myRef.current.getList()
                self.handleCancleBtn();
              }
            }
            else {
              layer.msg('保存失败', { icon: 2, time: 3000 });
            }
          });
        }
      });
    },
    handleCancleBtn() {
      editor.destroy();
      this.dialogFormVisible = false;
    },
    beforeClose(done) {
      editor.destroy();
      done();
    }
  }
});


ReactDOM.render((
  <SilderNav navType={1} />
), document.getElementById('side-nav'));

ReactDOM.render((
  <HeaderInfo />
), document.getElementById('header'));

ReactDOM.render((
  <Notice dom={app2} ref={myRef} />
), document.getElementById('notice'));

ReactDOM.render((
  <FooterInfo />
), document.getElementById('footer'));
