import request from "../utils/request";
let host = 'http://localhost:3000';

/**
 * 公告列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetList(params) {
  return request({
    url: host + '/Announcement/GetList',
    method: "POST",
    data: params.payload
  });
}

/**
 * 发布公告
 * @param params
 * @return {Promise.<Object>}
 */
export async function Publish(params) {
  return request({
    url: host + '/Announcement/Publish',
    method: "POST",
    data: params.payload
  });
}

/**
 * 删除公告
 * @param params
 * @return {Promise.<Object>}
 */
export async function Delete(params) {
  return request({
    url: host + '/Announcement/Delete',
    method: "POST",
    data: params.payload
  });
}

/**
 * 获取公告
 * @param params
 * @return {Promise.<Object>}
 */
export async function Read(params) {
  return request({
    url: host + '/Announcement/Read',
    method: "POST",
    data: params.payload
  });
}

/**
 * 查看公告阅读情况
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSchoolReadList(params) {
  return request({
    url: host + '/Announcement/GetSchoolReadList',
    method: "POST",
    data: params.payload
  });
}

/**
 * 保存公告
 * @param params
 * @return {Promise.<Object>}
 */
export async function Save(params) {
  return request({
    url: host + '/Announcement/Save',
    method: "POST",
    data: params.payload
  });
}
