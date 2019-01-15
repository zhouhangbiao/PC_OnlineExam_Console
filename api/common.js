const common = {
  /**
   * 获取秘钥
   * @param req
   * @param res
   * @param next
   */
  GetSecretKey: function (req, res, next) {
    res.send({
      ResultType: 1,
      Message: "",
      ReturnEntity: {
        "SecretKey": "EnohT5gQY9eBPrCqG1JvPnC8" //秘钥
      }
    });
  },
  /**
   * 登录
   * @param req
   * @param res
   * @param next
   */
  Login: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": {
        "LoginState": 1,//1成功 ，2.失败
        "UserTrueName": "管理员姓名",
        "ServerDateTime": '2018-09-13 12:24:30' //服务器时间
      }
    });
  },
  /**
   * 登出
   * @param req
   * @param res
   * @param next
   */
  LogOut: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1 //1.登出成功。 2.登出失败
    });
  },
  /**
   * 获取考生须知
   * @param req
   * @param res
   * @param next
   */
  GetNoticeToStudent: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": {
        "IsTimeout": 1,//0 ：超时，1：未超时。
        "AnnouncementContent": '<p>单项式﹣xy<sup>3</sup>的系数是{<span data-ph="1">__1__</span>}，次数是{<span data-ph="2">__2__</span>}．4y<sup>3</sup>﹣3y<sup>2</sup>+2y﹣1是单项式4y<sup>3</sup>、{<span data-ph="3">__3__</span>}的和．</p> ' // 考生须知内容
      }
    });
  },
  /**
   * 保存考生须知
   * @param req
   * @param res
   * @param next
   */
  SaveNoticeToStudent: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1//1保存成功，2 已超时（小于等于考试前一天）
    });
  },
  /**
   * 获取总控端的系统配置
   * @param req
   * @param res
   * @param next
   */
  GetSystemConfig: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "SystemName": "系统名称",//系统名称
        "SystemLogo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA0qTwHgTmwVza1ZlZy6KggxMHzzAiyLqOGhHqq1MpFt7EioBIsJN7c2U/+vZsOrNhNAxkZzRlUFcAAAISSURBVEjH7dbZjpswFAbgQ8AOJFBI2IZ9X7Mn9fu/Wo2blMxAmWgiVdUo/wXWOfg7trgCXnnlH8eR9ELLXehjBqUtqWha7cNuEUgXvbm1V6nXNeYMG4Y7atF8iw85wywqsIQLwmJTvLN4/m0cY7plkyGHXJN23bNyreZw9ru1+OiE0KVYIp0W1uSWFgA08geLbJ11E0Onx7anVwgY5u+wTcfyQ7yuLM/ucUyb2hCTE2TkI1bZZeIec7T0R7AG1gAvoaBP7j1WR3AReSN49hi2KvJ1zPkP48VvvLrDswfxD+CewYv/FCsgv/BXcDmJ3Wn8NomjZ7DwDDbHcTyNOYZNN1HwAMfKEsS/4xnoDIeAXDOv9Tt8OO6FM8Dlc+wAi3vhr9hqEbAEn+JtJYotG9DyDCtRV4T5MVCn8S2xGrCTpBnx6KD1ruC79hSO6bl4kSh4Q8t5C2DjGWkALnF3I8myJG9LyHIcp1obsVJofExIDSfuIAGie6Vl4AINEoL0OI7Z68g0uwnrWiEpVPoRLHKQgSYyhYh9uTGsIjn1EwnzPF7YZQ4owJlR7P3kBJCXNod5D0uJn8pIHWKCPWypWiOLPzV/ziW1adRBXjeOWSXc3Nd2otxoqkV3kfdYJ4S3MwP1nbWxK+XQXJmhWO5O6/4FMjKbJ0TvO3ijGWO/GS64ewcGMbQN7qtsSKdjZPDKK985vwAxm+iuMKlJZQAAAABJRU5ErkJggg==",//系统logo,Base64编码。
        "SystemTerminalName": "系统终端名称",//系统终端名称
        "CopyrightInformation": "版权信息"//版权信息
      }
    });
  },

  /**
   * 获取考试模式
   * @param req
   * @param res
   * @param next
   */
  GetExamType: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": 1 //1.正式考试 2.模拟考试 3.所有
    });
  },
  /**
   * 地市列表
   * @param req
   * @param res
   * @param next
   */
  GetCityList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": [{
        "CityId": "1", //市Id
        "CityName": "南昌" //市名称
      }, {
        "CityId": "2", //市Id
        "CityName": "jiujiang" //市名称
      }]
    });
  },
  /**
   * 县区列表
   * @param req
   * @param res
   * @param next
   */
  GetZoneList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": [{
        "ZoneId": "1", //县区Id
        "ZoneName": "西湖" //县区名称
      }, {
        "ZoneId": "2", //县区Id
        "ZoneName": "东湖" //县区名称
      }]
    });
  },
  /**
   * 获取系统设置信息
   * @param req
   * @param res
   * @param next
   */
  GetInfo: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "IsTimeout": "0",
        "CommonConfigInfo": [{
          "ItemName": "MonitorLoginSetting",//教师机登录设置
          "ItemValue": "1" //1允许教师机登录，2禁止教师机登录  3允许时间段（和AllowMonitorLoginBeginTime、AllowMonitorLoginEndTime结合使用）
        },
        {
          "ItemName": "AllowMonitorLoginBeginTime",// 登录时间段设置 开始时间
          "ItemValue": "" //时间string
        },
        {
          "ItemName": "AllowMonitorLoginEndTime",// 登录时间段设置 结束时间
          "ItemValue": "" //时间string
        },
        {
          "ItemName": "ExamOpenModel",//考试开启设置 1手动启动（OpenExamTimeSetting配合使用）  2自动启动
          "ItemValue": "1" //考试开启设置 1手动启动   2.自动启动
        },
        {
          "ItemName": "OpenExamTimeSetting",// 开启考试时间设置 1始终允许， 2考前后XX秒方可开启（和AroundExamMinuteAllowOpen结合使用）
          "ItemValue": "1" //1始终允许， 2考前后XX秒方可开启（和AroundExamMinuteAllowOpen结合使用）
        },
        {
          "ItemName": "AroundExamMinuteAllowOpen",//考前后多少秒允许开启
          "ItemValue": "1800" //xx秒
        },
        {
          "ItemName": "ExamCloseModel",//考试关闭设置
          "ItemValue": "1" //1手动关闭  2自动关闭
        },
        {
          "ItemName": "IsAllowDelayExam",//延考设置 1允许 2不允许
          "ItemValue": "1" //1允许 2不允许
        },
        {
          "ItemName": "IsAllowReexamination",//重考设置 1允许(和IsReexaminationChangePaper结合使用) 2不允许
          "ItemValue": "1" // 1允许 2不允许
        },
        {
          "ItemName": "IsReexaminationChangePaper",//重考是否换卷 1.重考换卷 2.不换卷
          "ItemValue": "1" //
        },
        {
          "ItemName": "MissExamTimeLengthSetting",//缺考时长设置 1不限制 2开考后XX秒未开始则自动标记为缺考（和MissExamTimeThreshold结合使用）
          "ItemValue": "2" // 1不限制 2开考后XX秒未开始则自动标记为缺考（和MissExamTimeThreshold结合使用）
        },
        {
          "ItemName": "MissExamTimeThreshold",//开考后XX秒自动标记为缺考，单位分
          "ItemValue": "900" //xx秒
        },
        {
          "ItemName": "TransmissionDownloadSetting",//传输下载设置  1无限制  2限速 （和TransmissionDownloadLimit结合使用）
          "ItemValue": "2" // 1无限制  2限速
        },
        {
          "ItemName": "TransmissionDownloadLimit",//下载限速为XX KB/S
          "ItemValue": "1024" //单位KB/s
        },
        {
          "ItemName": "TransmissionUploadSetting",//传输上传设置  1无限制  2限速为XX KB/S(和下面TransmissionUploadLimit结合使用)
          "ItemValue": "2" // 1无限制  2限速
        },
        {
          "ItemName": "TransmissionUploadLimit",//上传限速为XX KB/S
          "ItemValue": "1024" //单位KB/s
        },
        {
          "ItemName": "DownloadThreadCountSetting",//下载线程设置 1无限制 2设置最大线程数（和DownloadThreadCount结合使用）
          "ItemValue": "2" //1无限制 2设置最大线程数
        },
        {
          "ItemName": "DownloadThreadCount",//最大下载线程数
          "ItemValue": "1" //1允许教师机登录，2禁止教师机登录  3允许时间段（和AllowMonitorLoginBeginTime、AllowMonitorLoginEndTime结合使用）
        },
        {
          "ItemName": "MonitorRemindTimeSetting",//教师端是否倒计时提醒 1不提醒  2考试结束前XX秒提醒（和MonitorRemindTimeLength结合使用）
          "ItemValue": "2" // 1不提醒  2考试结束前XX秒提醒
        },
        {
          "ItemName": "MonitorRemindTimeLength",//教师端考试结束前XX秒提醒
          "ItemValue": "0" // 教师端考试结束前XX秒提醒
        },
        {
          "ItemName": "GeneratePaperSetting",//组卷方式设置 1.提前组卷 2.实时组卷
          "ItemValue": "2" // 1.提前组卷 2.实时组卷
        },
        {
          "ItemName": "IsMultiSectionSelLessScored",//多选题少选是否给分 1给分 0不给分
          "ItemValue": "1" // 1给分 0不给分
        },
        {
          "ItemName": "AnswerModel",//答题样式  1单题模式  2整卷模式
          "ItemValue": "1" // 1单题模式  2整卷模式
        },
        {
          "ItemName": "IsChangeSwitch",//答题卡中题目是否可切换，1允许切换，0禁止切换（和下面的IsQuestionCountDown结合使用）
          "ItemValue": "1" //1允许切换，0禁止切换
        },
        {
          "ItemName": "IsQuestionCountDown",//是否开启题目倒计时  1开启单题倒计时  2关闭单题倒计时
          "ItemValue": "1" //  1开启单题倒计时  2关闭单题倒计时
        },
        {
          "ItemName": "StudentRemindTimeSetting",//学生端是否倒计时提醒 1不提醒  2考试结束前XX秒提醒（和StudentRemindTimeLength结合使用）
          "ItemValue": "2" //  1不提醒  2考试结束前XX秒提醒
        },
        {
          "ItemName": "StudentRemindTimeLength",//教师端考试结束前前XX秒提醒
          "ItemValue": "0" //教师端考试结束前前XX秒提醒
        },
        {
          "ItemName": "IsSeatingPlanEnabled",//是否启用座位号 1：启用 0：禁用
          "ItemValue": "1" //是否启用座位号 1：启用 0：禁用
        },
        {
          "ItemName": "AllowExamineSystemLoginBeginTime",// 考试机系统当天开放时间 开始时间
          "ItemValue": "07:00" //时间string
        },
        {
          "ItemName": "AllowExamineSystemLoginEndTime",//  考试机系统当天开放时间  结束时间
          "ItemValue": "19:00" //时间string
        },
        {
          "ItemName": "AllowMonitorSystemLoginBeginTime",// 教师机系统当天开放时间 开始时间
          "ItemValue": "07:00" //时间string
        },
        {
          "ItemName": "AllowMonitorSystemLoginEndTime",//  教师机系统当天开放时间  结束时间
          "ItemValue": "19:00" //时间string
        }, {
          "ItemName": "IsAllowToUseKeyBoardWhenExaming",//  考试过程中是否允许使用键盘
          "ItemValue": "1" //1：启用键盘 0：禁用键盘
        },
        {
          "ItemName": "IsExamingNeedCoursesOrder",//  同场连考考试顺序限制
          "ItemValue": "1" //1：按顺序先后考试 0：可同时考试
        }]
      }
    });
  },
  /**
   * 保存系统设置信息
   * @param req
   * @param res
   * @param next
   */
  Save: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1 //1成功 ，2.失败
    });
  },
  /**
   * 获取考试学科
   * @param req
   * @param res
   * @param next
   */
  GetExamCourse: function (req, res, next) {
    res.send({
      "ResultType": 1,
      "Message": "",
      "ReturnEntity": [{
        "CourseId": "MNGbWBaYQkw%3d",//加密的学科id
        "CourseName": "初中语文"//学科名称
      }, {
        "CourseId": "MNGbWBaYQkw%3d1",//加密的学科id
        "CourseName": "初中数学"//学科名称
      }]
    });
  },
  /**
   * 获取学科题型列表
   * @param req
   * @param res
   * @param next
   */
  GetCourseCategory: function (req, res, next) {
    res.send({
      "ResultType": 1,
      "Message": "",
      "ReturnEntity": [{
        "QuestionCategoryId": "MNGbWBaYQkw%3d",//加密的题型id
        "QuestionCategoryName": "单选题"//题型名称
      }, {
        "QuestionCategoryId": "MNGbWBaYQkw%3d1",//加密的题型id
        "QuestionCategoryName": "多选题"//题型名称
      }]
    });
  },
  /**
   * 获取考试场次列表-无统计数据
   * @param req
   * @param res
   * @param next
   */
  GetExamSceneTimeInfo: function (req, res, next) {
    res.send({
      "ResultType": 1,
      "Message": "",
      "ReturnEntity": [{
        "ExamSceneTimeId": "lSVNDHXslUs%3d",//加密的场次时间id
        "ExamDate": "/Date(1536076800000)/",
        "ExamSceneIndex": 1,//场次顺序
        "ExamSceneTimeName": "2018年09月05日第一场",//场次名称
        "UploadedExamRoomTotal": null,
        "ExamRoomTotal": null
      }, {
        "ExamSceneTimeId": "lSVNDHXslUs%3d1",//加密的场次时间id
        "ExamDate": "/Date(1536076800000)/",
        "ExamSceneIndex": 1,//场次顺序
        "ExamSceneTimeName": "2018年09月05日第二场",//场次名称
        "UploadedExamRoomTotal": null,
        "ExamRoomTotal": null
      }]
    });
  },
  /**
   * 获取登陆第三方系统的token
   * @param req
   * @param res
   * @param next
   */
  GetLoginToken: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "LoginUrl": "http://localhost:8081/Content/onlineExamControl/authorize.html?loginToken=0f9de62fce790f9a0"//登陆用的Token
      }
    });
  },
  /**
   * 获取系统当前时间
   * @param req
   * @param res
   * @param next
   */
  GetSystemDateTime: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": "2018-10:31 11:11:11" //服务端系统当前时间
    });
  }
};

module.exports = common;
