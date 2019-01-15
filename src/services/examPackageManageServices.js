import request from '../utils/request';
let host = 'http://localhost:3000';

/**
 * 获取公用数据列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetCommonDataList(params) {
  return request({
    url: host + '/DataPackage/GetCommonDataList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 生成公用数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function GenerateCommonData(params) {
  return request({
    url: host + '/DataPackage/GenerateCommonData',
    method: "POST",
    data: params.payload
  });
}
/**
 * 导出公用数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExportCommonData(params) {
  return request({
    url: host + '/DataPackage/ExportCommonData',
    method: "POST",
    data: params.payload,
    responseType: "blob"
  });
}
/**
 * 启用数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function EnableCommonData(params) {
  return request({
    url: host + '/DataPackage/EnableCommonData',
    method: "POST",
    data: params.payload
  });
}
/**
 * 获取考点数据列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSchoolDataList(params) {
  return request({
    url: host + '/DataPackage/GetSchoolDataList',
    method: "POST",
    data: params.payload
  });
}
/**
 * 生成考点数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function GenerateSchoolData(params) {
  return request({
    url: host + '/DataPackage/GenerateSchoolData',
    method: "POST",
    data: params.payload
  });
}
/**
 * 导出考点数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExportSchoolData(params) {
  return request({
    url: host + '/DataPackage/ExportSchoolData',
    method: "POST",
    data: params.payload,
    responseType: "blob"
  });
}
