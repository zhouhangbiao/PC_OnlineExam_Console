<script>
  import * as commonService from '../services/commonServices';
  import UrlHelper from 'js-url-helper';

  const urlHelper = new UrlHelper(location);

  /**
   * 退出登录，供给第三方使用
   */
  export default{
     mounted() {
         let loading = layer.msg('正在退出登录...', {
         icon: 16,
         shade: 0.3,
         time: 0
       });
       commonService.LogOut({
         payload: {}
       }).then(data => {
         layer.close(loading);
         if (data.ReturnEntity === 1) {
           layer.msg('退出成功', { icon: 1, time: 1000 }, () => {
             this.clearUserInfoStorage();
             this.jumpLink();
           });
         } else {
           layer.msg('退出失败', { icon: 2, time: 1000 })
       }
     });
   },
   methods: {
     /**
      * 清楚特定的缓存
      */
     clearUserInfoStorage() {
       localStorage.removeItem('CopyrightInformation');
       localStorage.removeItem('ExamSceneId');
       localStorage.removeItem('SystemLogo');
       localStorage.removeItem('SystemName');
       localStorage.removeItem('SystemTerminalName');
       localStorage.removeItem('TerminalName');
       localStorage.removeItem('UserTrueName');
     },
     jumpLink() {
       urlHelper.jump({
         path: '/Content/login.html'
       });
     },
   },
  }
</script>
