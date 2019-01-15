import axios from 'axios';

export default function request(options) {
  let errCode;
  let errMessage;
  let defaults = {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    validateStatus: function (status) {
      if (status >= 200 && status < 300) {
        return true
      } else {
        errCode = status;
        if (errCode === 401) {
          location.href = '/Content/login.html';
        }
        return false;
      }
    }
  };

  function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  /**
    * 检查接口返回状态（业务）
    * @param data
    */
  function checkResultType(response) {
    if (response.data && response.data.ResultType && response.data.ResultType != 1) {
      errMessage = response.data.Message;
      layer.msg(errMessage, { icon: 2, time: 2000 });
    } else {
      if (response.headers["xkmastercontrol_message"]) {
        var responseJson = JSON.parse(b64DecodeUnicode(response.headers["xkmastercontrol_message"].toString()));
        if (responseJson.ResultType == 1) {
          layer.msg(responseJson.ReturnEntity, { icon: 2, time: 2000 });
        } else {
          layer.msg(responseJson.Message, { icon: 2, time: 2000 });
        }
      }
    }
    // return data;
  }

  options = Object.assign(defaults, options);

  return axios.request(options)
    .then(response => {
      if (response.headers["content-disposition"] || response.headers["Content-Disposition"]) {
        return response;
      } else {
        checkResultType(response)
        return response.data;
      }
    })
    .catch(() => {
      console.log(errCode)
    });
}
