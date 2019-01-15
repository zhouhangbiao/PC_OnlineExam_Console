const fs = require('fs');

const express = require('express'),
  timeout = require('connect-timeout'),
  app = express();

const API = {
  common: require('./api/common'),
  authorizationCodeManage: require('./api/authorizationCodeManage'),
  examPackageManage: require('./api/examPackageManage'),
  notice: require('./api/notice'),
  wrongQuestion: require('./api/wrongQuestion')
};

const PORT = '3000',
  TIME_OUT = 30 * 1e3;

app.set('port', PORT);

app.use(timeout(TIME_OUT));
app.use((req, res, next) => {
  if (!req.timedout) next();
});

// 设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
  next();
});

// 获取密匙
app.post('/Login/GetSecretKey', API.common.GetSecretKey);

// 登录
app.post('/Login/Login', API.common.Login);
// 登出
app.post('/Login/LogOut', API.common.LogOut);
// 获取考生须知
app.post('/Announcement/GetNoticeToStudent', API.common.GetNoticeToStudent);
// 保存考生须知
app.post('/Announcement/SaveNoticeToStudent', API.common.SaveNoticeToStudent);
//获取信息配置
app.post('/CommonConfig/GetInfo', API.common.GetInfo);
// 地市列表
app.post('/CommonData/GetCityList', API.common.GetCityList);
// 县区列表
app.post('/CommonData/GetZoneList', API.common.GetZoneList);
// 获取系统设置信息
app.post('/System/GetSystemConfig', API.common.GetSystemConfig);
// 获取考试模式
app.post('/System/GetExamType', API.common.GetExamType);
// 保存系统设置信息
app.post('/CommonConfig/Save', API.common.Save);
// 获取考试学科
app.post('/CommonData/GetExamCourse', API.common.GetExamCourse);
// 获取学科题型列表
app.post('/CommonData/GetCourseCategory', API.common.GetCourseCategory);
// 获取考试场次列表-无统计数据
app.post('/CommonData/GetExamSceneTimeInfo', API.common.GetExamSceneTimeInfo);
// 获取登陆第三方系统的token
app.post('/Login/GetLoginToken', API.common.GetLoginToken);
// 获取系统当前时间
app.post('/CommonData/GetSystemDateTime', API.common.GetSystemDateTime);


// 公告列表
app.post('/Announcement/GetList', API.notice.GetList);
// 发布公告
app.post('/Announcement/Publish', API.notice.Publish);
// 删除公告
app.post('/Announcement/Delete', API.notice.Delete);
// 获取公告
app.post('/Announcement/Read', API.notice.Read);
// 查看公告阅读情况
app.post('/Announcement/GetSchoolReadList', API.notice.GetSchoolReadList);
// 保存公告
app.post('/Announcement/Save', API.notice.Save);

// 获取公用数据列表
app.post('/DataPackage/GetCommonDataList', API.examPackageManage.GetCommonDataList);
// 生成公用数据
app.post('/DataPackage/GenerateCommonData', API.examPackageManage.GenerateCommonData);
// 导出公用数据
app.post('/DataPackage/ExportCommonData', API.examPackageManage.ExportCommonData);
// 启用数据
app.post('/DataPackage/EnableCommonData', API.examPackageManage.EnableCommonData);
// 获取考点数据列表
app.post('/DataPackage/GetSchoolDataList', API.examPackageManage.GetSchoolDataList);
// 生成考点数据
app.post('/DataPackage/GenerateSchoolData', API.examPackageManage.GenerateSchoolData);
// 导出考点数据
app.post('/DataPackage/ExportSchoolData', API.examPackageManage.ExportSchoolData);

// 获取授权码列表
app.post('/AuthorizeCode/GetList', API.authorizationCodeManage.GetList);
// 导出授权码
app.post('/AuthorizeCode/Export', API.authorizationCodeManage.Export);
// 新增授权码
app.post('/AuthorizeCode/Add', API.authorizationCodeManage.Add);
// 根据县区获取考点列表
app.post('/CommonData/GetSchoolList', API.authorizationCodeManage.GetSchoolList);
// 根据考点获取机房
app.post('/CommonData/GetExamRoomList', API.authorizationCodeManage.GetExamRoomList);
// 获取下载数据
app.post('/ExamMonitor/GetDownLoadDataList', API.authorizationCodeManage.GetDownLoadDataList);
// 考试场次列表
app.post('/CommonData/GetExamSceneTime', API.authorizationCodeManage.GetExamSceneTime);
// 获取上传数据列表
app.post('/ExamMonitor/GetUploadDataList', API.authorizationCodeManage.GetUploadDataList);


// 导出错题包文件
app.post('/WrongQuestion/ExportWrongQuestion', API.wrongQuestion.ExportWrongQuestion);
// 获取错题列表
app.post('/WrongQuestion/GetQuestionList', API.wrongQuestion.GetQuestionList);
// 获取上报错题详情
app.post('/WrongQuestion/GetQuestionDetail', API.wrongQuestion.GetQuestionDetail);
// 保存错题处理意见
app.post('/WrongQuestion/SubmitQuestionProcess', API.wrongQuestion.SubmitQuestionProcess);
// 导入错题包
app.post('/WrongQuestion/ImportQuestion', API.wrongQuestion.ImportQuestion);

app.listen(app.get('port'), () => {
  console.log(`server running @ ${app.get('port')} port`);
});
