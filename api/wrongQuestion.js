const path = require('path');

const wrongQuestion = {
  /**
   * 导出错题包文件
   * @param req
   * @param res
   * @param next
   */
  ExportWrongQuestion: function (req, res, next) {
    res.header("Access-Control-Expose-Headers", "Content-Disposition");
    res.header("Content-Disposition", "attachment; filename=student.txt");
    res.status(200).download(path.resolve(__dirname, 'download/student.txt'));
  },
  /**
   * 获取错题列表
   * @param req
   * @param res
   * @param next
   */
  GetQuestionList: function (req, res, next) {
    res.send({
      "ResultType": 1,
      "Message": "",
      "ReturnEntity": {
        "TotalCount": 11,//总条数
        "WrongQuestions": [{
          "WrongQuestionId": "MNGbWBaYQkw%3d",//错题id，加密
          "SceneName": "20180907第一场考试",//场次名称
          "CourseName": "初中语文",//学科名称
          "SchoolName": "南昌四中",//学校名称
          "Dog": "343434",//狗编号
          "CategoryName": "单选题",//题型名称
          "QuestionId": 5,//题目id
          "ReportTime": "2018-09-07 14:19",//上报时间
          "Status": 2//处理状态
        }]
      }
    });
  },
  /**
   * 获取上报错题详情
   * @param req
   * @param res
   * @param next
   */
  GetQuestionDetail: function (req, res, next) {
    res.send({
      "ResultType": 1,
      "Message": "",
      "ReturnEntity": {
        "WrongQuestionId": "MNGbWBaYQkw%3d",//错题id，加密
        "Content": "base64",//题干图片的base64
        "GroupContent": "base64",//小题图片的base64
        "ReportingTypeName": "题干错误",//错题类型名称
        "ReportComment": "343434",//错题上报描述
        "ProcessType": 1,//处理意见类型
        "ProcessComment": "已确认是个问题",//处理意见描述
      }
    });
  },
  /**
   * 保存错题处理意见
   * @param req
   * @param res
   * @param next
   */
  SubmitQuestionProcess: function (req, res, next) {
    res.send({
      "ResultType": 1,
      "Message": "",
      "ReturnEntity": ""
    });
  },
  /**
   * 导入错题包
   * @param req
   * @param res
   * @param next
   */
  ImportQuestion: function (req, res, next) {
    res.send({
      "ResultType": 1,
      "Message": "",
      "ReturnEntity": 3//1成功，2文件格式错误，3文件内容错误，4文件太大，5未找到文件
    });
  },

};

module.exports = wrongQuestion;
