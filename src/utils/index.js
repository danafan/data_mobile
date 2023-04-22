var now = new Date(); 				//当前日期  
var nowDay = now.getDate(); 		//当前日 
var nowMonth = now.getMonth(); 		//当前月 
var nowYear = now.getYear(); 		//当前年 
const nowTime = now.getTime()
nowYear += (nowYear < 2000) ? 1900 : 0; 

//获得本月的开始日期 
export function getMonthStartDate(){
	var monthStartDate; 
	if(nowDay == 1){
		monthStartDate = new Date(nowYear, nowMonth - 1, 1);
	}else{
		monthStartDate = new Date(nowYear, nowMonth, 1);
	}
	return formatDate(monthStartDate); 
}
//获得昨日日期（包括上月末日期）
export function getCurrentDate(num){
	var day1 = new Date();
	if(num){
		day1.setTime(day1.getTime()-num*24*60*60*1000);
	}else{
		day1.setTime(day1.getTime()-24*60*60*1000);
	}
	var currentDate = new Date(day1);
	return formatDate(currentDate); 
}
//获得前某月的开始日期 
export function getLastMonthStartDate(month_num){ 
	var lastMonthStartDate = new Date(nowYear, nowMonth - month_num, 1); 
	return formatDate(lastMonthStartDate); 
}
//获得前某月的结束日期 
export function getLastMonthEndDate(month_num){ 
	var lastMonthEndDate = new Date(nowYear, nowMonth - month_num, 0); 
	return formatDate(lastMonthEndDate); 
}

//格式化日期
function formatDate(date,t) { 
	var myyear = date.getFullYear(); 
	var mymonth = date.getMonth()+1; 
	var myweekday = date.getDate(); 
	var hour = date.getHours(); // 时
  	var minutes = date.getMinutes(); // 分
  	var seconds = date.getSeconds() //秒
  	if(mymonth < 10){ 
  		mymonth = "0" + mymonth; 
  	} 
  	if(myweekday < 10){ 
  		myweekday = "0" + myweekday; 
  	}
  	if(hour < 10){ 
  		hour = "0" + hour; 
  	}
  	if(minutes < 10){ 
  		minutes = "0" + minutes; 
  	}
  	if(seconds < 10){ 
  		seconds = "0" + seconds; 
  	}
  	if(t){
  		return (myyear + "-" + mymonth + "-" + myweekday + ' ' + hour + ":" + minutes + ":" + seconds);
  	}else{
  		return (myyear + "-" + mymonth + "-" + myweekday);
  	}	
  }