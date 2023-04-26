<template>
  <div id="app" class="container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  import * as dd from 'dingtalk-jsapi';

  import resource from './api/resource.js'
  export default {
    created() {
      //获取浏览器用户信息(测试用，之后改为只从钉钉进入)
      // this.getUserInfo();
      //钉钉获取code
      this.getCode();
    },
    watch:{
      $route:function(n,o){
        if(n.path != '/performance_detail'){
          //设置标题栏文字
          this.setTabBarTitle(n.name)
        }
        
      }
    },
    methods: {
      //设置标题栏文字
      setTabBarTitle(title){
        dd.biz.navigation.setTitle({
          title : title,
          onSuccess : function(result) {
          },
          onFail : function(err) {}
        });
      },
      //获取用户信息（测试用）
      getUserInfo(){
        resource.login().then(res => {
          if(res.data.code == 1){
            let data = res.data.data;
            localStorage.setItem('login_token',data.login_token);
            localStorage.setItem('ding_user_id',data.ding_user_id);
            localStorage.setItem('secret_key',data.secret_key);
            this.$router.replace('/index');
          }else{
            this.$message.warning(res.data.msg);
          }
        })
      },
      //获取code
      getCode(){
        dd.ready(() => {
          dd.runtime.permission.requestAuthCode({
            corpId: "ding7828fff434921f5b",
            onSuccess: res =>{
              //获取钉钉用户信息
              let code = res.code;
              this.getDingUserInfo(code);
            },
            onFail : err => {
              alert('dd error: ' + JSON.stringify(err));
            }
          });
        });
      },
      //钉钉获取用户信息
      getDingUserInfo(code){
        resource.dingLogin({code:code}).then(res => {
          if(res.data.code == 1){
            let data = res.data.data;
            localStorage.setItem('login_token',data.login_token);
            localStorage.setItem('ding_user_id',data.ding_user_id);
            localStorage.setItem('secret_key',data.secret_key);
            this.$router.replace('/index');
          }else{
            this.$toast(res.data.msg);
          }
        })
      },

    }
  };
</script>

<style>

</style>
