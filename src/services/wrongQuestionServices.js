import request from "../utils/request";
let host = 'http://localhost:3000';

/**
 * 导出错题包文件
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExportWrongQuestion(params) {
  return request({
    url: host + '/WrongQuestion/ExportWrongQuestion',
    method: "POST",
    data: params.payload,
    responseType: "blob"
  });
}
/**
 * 获取错题列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetQuestionList(params) {
  return request({
    url: host + '/WrongQuestion/GetQuestionList',
    method: "POST",
    data: params.payload
  });
}

/**
 * 获取上报错题详情
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetQuestionDetail(params) {
  return request({
    url: host + '/WrongQuestion/GetQuestionDetail',
    method: "POST",
    data: params.payload
  });
}

/**
 * 保存错题处理意见
 * @param params
 * @return {Promise.<Object>}
 */
export async function SubmitQuestionProcess(params) {
  return request({
    url: host + '/WrongQuestion/SubmitQuestionProcess',
    method: "POST",
    data: params.payload
  });
}
/**
 * 导入错题包
 * @param params
 * @return {Promise.<Object>}
 */
export async function ImportQuestion(params) {
  return request({
    url: host + '/WrongQuestion/ImportQuestion',
    method: "POST",
    data: params.payload
  });
}
