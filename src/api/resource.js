import http from "./request.js";
let path = {  
	login:'login',							                    //浏览器获取用户信息(测试用)
  dingLogin:'ding_login',                         //钉钉获取用户信息
  performanceReport:'PerformanceReport/index',    //业绩指标
} 
export default {
  //浏览器获取用户信息(测试用)
  login(params){
  	return http.get(path.login, params)
  },
  //钉钉获取用户信息
  dingLogin(params){
  	return http.get(path.dingLogin, params)
  },
  //业绩指标
  performanceReport(params){
    return http.get(path.performanceReport, params)
  },
};
