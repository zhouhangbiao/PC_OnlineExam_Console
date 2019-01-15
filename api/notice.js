const notice = {
  /**
   * 公告列表
   * @param req
   * @param res
   * @param next
   */
  GetList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "AnnouncementInfo": [{
          "AnnouncementTitle": "策划                                           你感觉策划你感觉                                                              策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 0//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 0//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）1.暂存 2.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）1.暂存 2.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        },
        {
          "AnnouncementTitle": "公告标题",//公告标题
          "AnnouncementId": "789",//公告ID
          "PublishTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
          "ExamRoomTotal": 20,//考场总数
          "ExamRoomRead": 10,//已阅读考场数
          "IsPublished": 1//状态（枚举）0.暂存 1.发布
        }],
        "AnnouncementTotal": 20//公告总数
      }
    });
  },
  /**
   * 发布公告
   * @param req
   * @param res
   * @param next
   */
  Publish: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": 1 //1成功 ，2.失败
    });
  },

  /**
   * 删除公告
   * @param req
   * @param res
   * @param next
   */
  Delete: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": 1 //1成功 ，2.失败
    });
  },

  /**
   * 获取公告
   * @param req
   * @param res
   * @param next
   */
  Read: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "AnnouncementTitle": "策划                                           你感觉策划你感觉                                                              策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉策划你感觉",//公告标题
        "UpdateDateTime": "2018-4-23 10:00",//发布时间 2018-4-23 10:00
        "AnnouncementContent": "<p>公告内容</p>",//公告内容
        "AnnouncementId": "公告ID" //公告ID
      }
    });
  },

  /**
   * 查看公告阅读情况
   * @param req
   * @param res
   * @param next
   */
  GetSchoolReadList: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误,5权限验证
      "ReturnEntity": {
        "AnnouncementReadInfoList": [{
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }, {
          "AnnouncementIndex": 1,//公告序号
          "CityName": "南昌市",//市名称
          "ZoneName": "",//县区名称
          "SchoolCode": "0001",//考点代码
          "SchoolName": "南昌市第一中学",//考点名称
          "RoomName": "考点机房1"//机房名称
        }],
        "ExamRoomTotal": 1,//考场总数
        "ExamRoomRead": 1,//已阅读考场数
        "RecordTotal": 20//公告总数
      }
    });
  },

  /**
   * 保存公告
   * @param req
   * @param res
   * @param next
   */
  Save: function (req, res, next) {
    res.send({
      "Message": "",
      "ResultType": 1,//1成功,2验证失败,3错误，已知的错误,4错误，写在try catch中的错误
      "ReturnEntity": {
        "SaveState": 1,//1成功,2公告已经被发布,3公告已经被删除
        "AnnouncementId": 1//公告Id
      }
    });
  }
};

module.exports = notice;
