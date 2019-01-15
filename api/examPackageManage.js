const path = require('path');

const examPackageManage = {
  /**
   * 获取公用数据列表
   * @param req
   * @param res
   * @param next
   */
  GetCommonDataList: function (req, res, next) {
    res.send({
      "Message": "xxxxxxxx",
      "ResultType": 2, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": [{
        "DataName": "公共数据", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 1, //1.正式数据  2.备用数据
        "DataState": 1, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 4 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "备用数据", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 2, //1.正式数据  2.备用数据
        "DataState": 2, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 4 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "公共数据(生成中)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 1, //1.正式数据  2.备用数据
        "DataState": 1, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 1 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "备用数据(生成中)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 2, //1.正式数据  2.备用数据
        "DataState": 2, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 1 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "公共数据(生成成功)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 1, //1.正式数据  2.备用数据
        "DataState": 1, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 2 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "备用数据(生成成功)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 2, //1.正式数据  2.备用数据
        "DataState": 2, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 2 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "公共数据(生成失败)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 1, //1.正式数据  2.备用数据
        "DataState": 1, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 3 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "备用数据(生成失败)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 2, //1.正式数据  2.备用数据
        "DataState": 2, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 3 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "公共数据(生成成功)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 1, //1.正式数据  2.备用数据
        "DataState": 3, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 2 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      },
      {
        "DataName": "备用数据(生成成功)", //数据名称
        "DataSize": "1M", //数据大小
        "LastCreateDataTime": "2018-08-22 10:00", // 最新生成时间 格式2018-08-22 10:00
        "DataType": 2, //1.正式数据  2.备用数据
        "DataState": 1, //1.启用状态 2.待启用状态 3.失效状态
        "DataCreateStatus": 2 // 1.生成中、2.生成成功、3.生成失败、4.未生成
      }
      ]
    });
  },
  /**
   * 生成公用数据
   * @param req
   * @param res
   * @param next
   */
  GenerateCommonData: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1 //1成功 ，2.失败
    });
  },
  /**
   * 导出公用数据
   * @param req
   * @param res
   * @param next
   */
  ExportCommonData: function (req, res, next) {
    res.send({
      "Message": "xxxxxxxxxxxx",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1 //1成功 ，2.失败
    });
    // res.header("Access-Control-Expose-Headers", "Content-Disposition");
    // res.header("Content-Disposition", "attachment; filename=student.txt");
    // res.status(200).download(path.resolve(__dirname, 'download/student.txt'));
  },
  /**
   * 启用数据
   * @param req
   * @param res
   * @param next
   */
  EnableCommonData: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1 //1成功 ，2.失败
    });
  },
  /**
   * 获取考点数据列表
   * @param req
   * @param res
   * @param next
   */
  GetSchoolDataList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "CreatedSchoolTotal": 1, //已生成考点数据总数
        "SchoolTotal": 11, //考点总数
        "RecordTotal": 11, //查询总数
        "SchoolInfo": [{
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "1",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "2",
          "DataCreateStatus": 2 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "3",
          "DataCreateStatus": 3 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "4",
          "DataCreateStatus": 4 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "5",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "6",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "7",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "8",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "9",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "10",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }, {
          "CityName": "市名称", //市名称
          "ZoneName": "县区名称", //县区名称
          "SchoolCode": "考点代码", //考点代码
          "SchoolName": "考点名称", //考点名称
          "SchoolId": "考点Id", //考点Id
          "LastCreateTime": "2018-08-01 10:00", //最新生成时间 2018-08-01 10:00
          "OrderIndex": "11",
          "DataCreateStatus": 1 // 数据生成状态，1生成中，2已生成，3生成失败功，4生成失败
        }]
      }
    });
  },
  /**
   * 生成考点数据
   * @param req
   * @param res
   * @param next
   */
  GenerateSchoolData: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1, //1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1 //1成功 ，2.失败
    });
  },
  /**
   * 导出考点数据
   * @param req
   * @param res
   * @param next
   */
  ExportSchoolData: function (req, res, next) {
    res.header("Access-Control-Expose-Headers", "Content-Disposition");
    res.header("Content-Disposition", "attachment; filename=student.txt");
    res.status(200).download(path.resolve(__dirname, 'download/student.txt'));
  }
};

module.exports = examPackageManage;
