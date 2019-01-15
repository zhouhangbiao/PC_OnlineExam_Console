import request from '../utils/request';
let host = 'http://localhost:3000';

/**
 * 获取授权码列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetList(params) {
  return request({
    url: host + '/AuthorizeCode/GetList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 导出授权码
 * @param params
 * @return {Promise.<Object>}
 */
export async function Export(params) {
  return request({
    url: host + '/AuthorizeCode/Export',
    method: "POST",
    data: params.payload,
    responseType: "blob"
  });
}
/**
 * 新增授权码
 * @param params
 * @return {Promise.<Object>}
 */
export async function Add(params) {
  return request({
    url: host + '/AuthorizeCode/Add',
    method: "POST",
    data: params.payload
  });
}
/**
 * 根据县区获取考点列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSchoolList(params) {
  return request({
    url: host + '/CommonData/GetSchoolList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 根据考点获取机房
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamRoomList(params) {
  return request({
    url: host + '/CommonData/GetExamRoomList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取下载数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetDownLoadDataList(params) {
  return request({
    url: host + '/ExamMonitor/GetDownLoadDataList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 考试场次列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamSceneTime(params) {
  return request({
    url: host + '/CommonData/GetExamSceneTime',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取上传数据列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetUploadDataList(params) {
  return request({
    url: host + '/ExamMonitor/GetUploadDataList',
    method: "POST",
    data: params.payload
  });
}
