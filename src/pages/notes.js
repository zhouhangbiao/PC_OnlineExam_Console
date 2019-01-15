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

var editor;
let app2 = new Vue({
  el: '#vue_app',
  data() {
    return {
      editable: false,
      content: "",
      isTimeout: 0
    }
  },
  methods: {
    handleEditBtn() {
      this.editable = true;
      CKEDITOR.replace("editor", {
        height: "300px", width: "100%", toolbar: "Full"
      });
      editor = CKEDITOR.instances.editor
    },
    handleCancelBtn() {
      this.editable = false;
      if (editor) {
        editor.destroy();
      }
      this.GetNoticeToStudent();
    },
    handleSaveBtn() {
      var self = this;
      let loading = layer.msg('加载中...', {
        icon: 16,
        shade: 0.3,
        time: 0
      });
      commonService.SaveNoticeToStudent({
        payload: {
          NoticeContent: editor.getData()
        }
      }).then((data) => {
        layer.close(loading);
        if (data.ResultType != 1) {
          return;
        }
        if (data.ReturnEntity == 1) {
          self.editable = false;
          if (editor) {
            editor.destroy();
          }
          layer.msg('保存成功', { icon: 1, time: 3000 }, () => {
            self.GetNoticeToStudent();
          });

        } else {
          layer.msg('保存失败', { icon: 2, time: 3000 });
        }

      });
    },
    GetNoticeToStudent() {
      var self = this;
      commonService.GetNoticeToStudent({
        payload: {}
      }).then((data) => {
        if (data.ResultType != 1) {
          return;
        }
        self.content = data.ReturnEntity.AnnouncementContent;
        $("#editor").html(self.content);
        self.isTimeout = data.ReturnEntity.IsTimeout
      });
    }
  },
  mounted() {
    this.GetNoticeToStudent();
  }
});





ReactDOM.render((
  <SilderNav navType={7} />
), document.getElementById('side-nav'));
ReactDOM.render((
  <HeaderInfo />
), document.getElementById('header'));
ReactDOM.render((
  <FooterInfo />
), document.getElementById('footer'));
