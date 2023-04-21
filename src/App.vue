<template>
  <div id="app" class="container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  // import * as dd from 'dingtalk-jsapi';

  import resource from './api/resource.js'
  export default {
    created() {
      //获取浏览器用户信息(测试用，之后改为只从钉钉进入)
      this.getUserInfo();
      // this.$router.replace('/index');
      // if(!this.$store.state.is_ding_talk){  //浏览器
      //   //获取浏览器用户信息()
      //   this.GetUserInfo();
      // }else{  //钉钉
      //   //获取code
      //   this.GetCode();
      // }
    },
    watch:{
      $route:function(n,o){
        //设置标题栏文字
        this.setTabBarTitle(n.name)
      }
    },
    methods: {
      //设置标题栏文字
      setTabBarTitle(title){
        // dd.biz.navigation.setTitle({
        //   title : title,//控制标题文本，空字符串表示显示默认文本
        //   onSuccess : function(result) {
        //   },
        //   onFail : function(err) {}
        // });
      },
      //获取用户信息（测试用）
      getUserInfo(){
        resource.login().then(res => {
          if(res.data.code == 1){
            let data = res.data.data;
            localStorage.setItem('login_token',data.login_token);
            localStorage.setItem('ding_user_id',data.ding_user_id);
            localStorage.setItem('secret_key',data.secret_key);
            this.$router.replace('/performance_analysis');
          }else{
            this.$message.warning(res.data.msg);
          }
        })
      }

    }
  };
</script>

<style>

</style>
