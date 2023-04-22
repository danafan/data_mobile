import http from "./request.js";
let path = {  
	login:'login',							                    //浏览器获取用户信息(测试用)
  dingLogin:'ding_login',                         //钉钉获取用户信息
  ajaxViewDept:'Common/ajaxViewDept',             //部门列表
  ajaxPlat:'common/ajaxPlat',                     //平台列表
  ajaxViewStore:'Common/ajaxViewShop',            //店铺列表
  ajaxDeerShopPp:'Common/ajaxDeerShopPp',         //品牌列表
  ajaxCompany:'common/ajaxCompany',               //获取公司列表
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
  //部门列表
  ajaxViewDept(params){
    return http.get(path.ajaxViewDept, params)
  },
  //平台列表
  ajaxPlat(params){
    return http.get(path.ajaxPlat, params)
  },
  //店铺列表
  ajaxViewStore(params){
    return http.get(path.ajaxViewStore, params)
  },
  //品牌列表
  ajaxDeerShopPp(params){
    return http.get(path.ajaxDeerShopPp, params)
  },
  //获取公司列表
  ajaxCompany(params){
    return http.get(path.ajaxCompany, params)
  },
  //业绩指标
  performanceReport(params){
    return http.get(path.performanceReport, params)
  },
};
