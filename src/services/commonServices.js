import request from "../utils/request";
let host = 'http://localhost:3000';

/**
 * 获取秘钥
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSecretKey(params) {
  return request({
    url:host+'/Login/GetSecretKey',
    method: "POST",
    data: params.payload
  });
}

/**
 * 获取系统配置信息
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSystemConfig(params) {
  return request({
    url: host + '/System/GetSystemConfig',
    method: "POST",
    data: params.payload
  });
}
/**
 * 登录
 * @param params
 * @return {Promise.<Object>}
 */
export async function Login(params) {
  return request({
    url: host + '/Login/Login',
    method: "POST",
    data: params.payload
  });
}

/**
 * 登出
 * @param params
 * @return {Promise.<Object>}
 */
export async function LogOut(params) {
  return request({
    url: host + '/Login/LogOut',
    method: "POST",
    data: params.payload
  });
}

/**
 * 获取考生须知
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetNoticeToStudent(params) {
  return request({
    url: host + '/Announcement/GetNoticeToStudent',
    method: "POST",
    data: params.payload
  });
}
/**
 * 保存考生须知
 * @param params
 * @return {Promise.<Object>}
 */
export async function SaveNoticeToStudent(params) {
  return request({
    url: host + '/Announcement/SaveNoticeToStudent',
    method: "POST",
    data: params.payload
  });
}

/**
 * 获取考试模式(获取考试数据包管理)
 * @param params
 * @return {Promise.<Object>}
 */

export async function GetExamType(params) {
  return request({
    url: host + '/System/GetExamType',
    method: "POST",
    data: params.payload
  });
}
/**
 * 地市列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetCityList(params) {
  return request({
    url: host + '/CommonData/GetCityList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 县区列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetZoneList(params) {
  return request({
    url: host + '/CommonData/GetZoneList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取系统设置信息
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetInfo(params) {
  return request({
    url: host + '/CommonConfig/GetInfo',
    method: "POST",
    data: params.payload
  });
}
/**
 * 保存系统设置信息
 * @param params
 * @return {Promise.<Object>}
 */
export async function Save(params) {
  return request({
    url: host + '/CommonConfig/Save',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取考试学科
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamCourse(params) {
  return request({
    url: host + '/CommonData/GetExamCourse',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取学科题型列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetCourseCategory(params) {
  return request({
    url: host + '/CommonData/GetCourseCategory',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取考试场次列表-无统计数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamSceneTimeInfo(params) {
  return request({
    url: host + '/CommonData/GetExamSceneTimeInfo',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取登陆第三方系统的token
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetLoginToken(params) {
  return request({
    url: host + '/Login/GetLoginToken',
    method: "POST",
    data: params.payload
  });
}

/**
 * 获取系统当前时间
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSystemDateTime(params) {
  return request({
    url: host + '/CommonData/GetSystemDateTime',
    method: "POST",
    data: params.payload
  });
}
