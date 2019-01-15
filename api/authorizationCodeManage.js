const path = require('path');

const authorizationCodeManage = {
  /**
   * 获取授权码列表
   * @param req
   * @param res
   * @param next
   */
  GetList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "RecordTotal": 4, //查询总数
        "AuthorizationCodeInfo": [{
          "OrderIndex": "1",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 1 //类型 1.脱机码 2.开考码 3.重考码 4.延考码
        }, {
          "OrderIndex": "2",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 2//类型 1.脱机码 2.开考码 3.重考码 4.延考码
        }, {
          "OrderIndex": "3",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 3 //类型 1.脱机码 2.开考码 3.重考码 4.延考码
        }, {
          "OrderIndex": "4",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 4//类型 1.脱机码 2.开考码 3.重考码 4.延考码
        }, {
          "OrderIndex": "5",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 5,//类型 1.脱机码 2.开考码 3.重考码 4.延考码
          "LeftTimeLength": ""
        }, {
          "OrderIndex": "6",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 5,//类型 1.脱机码 2.开考码 3.重考码 4.延考码
          "LeftTimeLength": "0"
        },
        {
          "OrderIndex": "7",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 5,//类型 1.脱机码 2.开考码 3.重考码 4.延考码
          "LeftTimeLength": "60"
        },
        {
          "OrderIndex": "8",//序号
          "AuthorizationCodeRecordId": "授权码Id",//授权码Id
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称",//县区名称
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "CreateDateTime": "2018-08-01 10:00",//生成时间 2018-08-01 10:00
          "BeginTime": "2018-08-01",//有效期开始时间 2018-08-01
          "EndTime": "2018-08-01",//有效期结束时间 2018-08-01
          "OperationType": 5,//类型 1.脱机码 2.开考码 3.重考码 4.延考码
          "LeftTimeLength": "62"
        }]
      }
    });
  },
  /**
   * 导出授权码
   * @param req
   * @param res
   * @param next
   */
  Export: function (req, res, next) {
    res.header("Access-Control-Expose-Headers", "Content-Disposition");
    res.header("Content-Disposition", "attachment; filename=student.txt");
    res.status(200).download(path.resolve(__dirname, 'download/student.txt'));
  },
  /**
   * 新增授权码
   * @param req
   * @param res
   * @param next
   */
  Add: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": 1 //1成功 ，2.失败
    });
  },
  /**
   * 根据县区获取考点列表
   * @param req
   * @param res
   * @param next
   */
  GetSchoolList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": [{
        "SchoolId": "1",//考点Id
        "SchoolName": "考点1",//考点名称
        "SchoolCode": "cd1"//考点代码
      }, {
        "SchoolId": "2",//考点Id
        "SchoolName": "考点2",//考点名称
        "SchoolCode": "cd2"//考点代码
      }]
    });
  },
  /**
   * 根据考点获取机房
   * @param req
   * @param res
   * @param next
   */
  GetExamRoomList: function (req, res, next) {
    res.send({
      "ResultType": 1, "Message": "", "ReturnEntity": [{
        "RoomId": 5, "RoomName": "计算机等级考试06考场",
        "SchoolID": 2, "SchoolName": null,
        "RoomNumber": "4", "ExamComputerCount": 100,
        "SpareComputerCount": 10,
        "CreateDateTime": "\/Date(-62135596800000)\/", "UpdateDateTime": null, "StatusFlag": 1, "DogId": 0, "DogCode": null, "UserId": 0
      }, {
        "RoomId": 6, "RoomName": "计算机等级考试07考场", "SchoolID": 2,
        "SchoolName": null, "RoomNumber": "4", "ExamComputerCount": 100,
        "SpareComputerCount": 10, "CreateDateTime": "\/Date(-62135596800000)\/",
        "UpdateDateTime": null, "StatusFlag": 1, "DogId": 0, "DogCode": null,
        "UserId": 0
      }, {
        "RoomId": 7, "RoomName": "计算机等级考试08考场", "SchoolID": 2,
        "SchoolName": null, "RoomNumber": "4", "ExamComputerCount": 100,
        "SpareComputerCount": 10, "CreateDateTime": "\/Date(-62135596800000)\/",
        "UpdateDateTime": null, "StatusFlag": 1, "DogId": 0, "DogCode": null,
        "UserId": 0
      }]
    });
  },
  /**
   * 获取下载数据
   * @param req
   * @param res
   * @param next
   */
  GetDownLoadDataList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "DownloadedExamRoomTotal": 10,//已下载考场数据总数
        "ExamRoomTotal": 100, //考场总数量
        "RecordTotal": 100, //查询总数
        "ExamRoomInfo": [{
          "OrderIndex": "1",//序号
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "DownloadTimes": 1,//下载次数
          "LastDownloadTime": "2018-08-01 10:00",//最近下载时间 2018-08-01 10:00
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称"//县区名称
        }]
      }
    });
  },
  /**
   * 考试场次列表
   * @param req
   * @param res
   * @param next
   */
  GetExamSceneTime: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": [{
        "ExamSceneTimeId": "1",//场次时间安排Id
        "ExamSceneTimeName": "场次时间安排名称1",//场次时间安排名称
        "UploadedExamRoomTotal": "1",//已下载的考场总数
        "ExamRoomTotal": "10" // 考场总数
      }, {
        "ExamSceneTimeId": "2",//场次时间安排Id
        "ExamSceneTimeName": "场次时间安排名称2",//场次时间安排名称
        "UploadedExamRoomTotal": "1",//已下载的考场总数
        "ExamRoomTotal": "10" // 考场总数
      }]
    });
  },
  /**
   * 获取上传数据列表
   * @param req
   * @param res
   * @param next
   */
  GetUploadDataList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "UploadedExamRoomTotal": 10,//已下载考场数据总数
        "ExamRoomTotal": 100, //考场总数量
        "RecordTotal": 100, //查询总数
        "ExamSceneInfo": [{
          "OrderIndex": "1",//序号
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "Isuploaded": 0,//是否已上传，1：已上传，0：未上传
          "LastUploadTime": "",//上传时间 2018-08-01 10:00
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称"//县区名称
        }, {
          "OrderIndex": "2",//序号
          "SchoolCode": "考点代码",//考点代码
          "SchoolName": "考点名称",//考点名称
          "RoomNumber": "机房编号",//机房编号
          "DogCode": "加密狗编号",//加密狗编号
          "Isuploaded": 1,//是否已上传，1：已上传，0：未上传
          "LastUploadTime": "2018-08-01 10:00",//上传时间 2018-08-01 10:00
          "CityName": "市名称",//市名称
          "ZoneName": "县区名称"//县区名称
        }]
      }
    });
  }
};

module.exports = authorizationCodeManage;
