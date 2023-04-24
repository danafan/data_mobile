<template>
	<div class="container flex fc ac">
		<div class="detail_top_box relative width-100 mb10">
			<img class="detail_back absolute left-0 right-0 width-100 height-100" src="../../static/detail_back.png">
			<div class="absolute left-0 right-0 width-100 height-100 flex fc ac jc">
				<div class="f14 white_color mb6">发货日期：{{start_time}}～{{end_time}}</div>
				<div class="white_color bold flex">
					<div class="f28 mr2">{{total}}</div>
					<div class="f22 relative" style="bottom:-1px;">{{unit}}</div>
				</div>
			</div>
		</div>
		<div class="bottom_content flex-1 flex fc mb10">
			<div class="list_title flex ac jsb pl10 pr10">
				<div class="text_color f16 fw-500">店铺名称</div>
				<div class="flex ac">
					<div class="text_color f12 mr3" @click="checkSort">高低</div>
					<div class="flex ac">
						<img class="sort_icon" src="../../static/sort_default.png" v-if="sort_type == 0">
						<img class="sort_icon" src="../../static/sort_asc.png" v-if="sort_type == 1">
						<img class="sort_icon" src="../../static/sort_desc.png" v-if="sort_type == -1">
					</div>
				</div>
			</div>
			<div class="pl10 pr10 flex-1 scroll-y hide_scrollbar">
				<div class="row_item flex ac jsb f14" v-for="item in list_data">
					<div>{{item.dpmc}}：</div>
					<div>{{item[key]}}{{unit}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import * as dd from 'dingtalk-jsapi';
	export default{
		data(){
			return{
				sort_type:0,		//排序（0:乱序；1:升序；2:降序）
				title:"",	//页面标题
				key:"",		//要取的字段
				unit:"",	//单位
				total:"",	//总数
				type:"",	//列表来源
				list_data:[],		//列表数据
			}
		},
		computed:{
			//开始时间
			start_time(){
				return this.$store.state.start_time;
			},
			//结束时间
			end_time(){
				return this.$store.state.end_time;
			},
			//业绩分析表格数据
			per_table_list(){
				return this.$store.state.per_table_list;
			},
			//营销费用表格数据
			yxzb_table_list(){
				return this.$store.state.yxzb_table_list;
			},
		},
		created(){
			let query = this.$route.query;
			this.title = query.title;	//页面标题
			this.key = query.key;		//要取的字段
			this.unit = query.unit == 'bfh'?'%':query.unit;	//单位
			this.total = query.total;	//总数
			this.type = query.type;	//列表来源
			if(this.type == 'per'){		//业绩分析
				this.list_data = this.per_table_list;
			}else{						//营销周报
				this.list_data = this.yxzb_table_list;
			}
			//设置标题栏文字
			this.setTabBarTitle()
		},
		methods:{
			//设置标题栏文字
			setTabBarTitle(){
				dd.biz.navigation.setTitle({
		          title : this.title,//控制标题文本，空字符串表示显示默认文本
		          onSuccess : function(result) {
		          },
		          onFail : function(err) {}
		      });
			},
		    //切换排序
		    checkSort(){
		    	if(this.sort_type == 0){
		    		this.sort_type = 1;
		    	}else if(this.sort_type == 1){
		    		this.sort_type = -1;
		    	}else{
		    		this.sort_type = 0;
		    	}

		    	let new_arr = JSON.parse(JSON.stringify(this.list_data));
		    	this.list_data = this.objectSort(new_arr,this.key,this.sort_type);
		    },
		    objectSort (arr = [], prop, order) {
		    	if (arr.length < 2) return arr
		    		let temp = [...arr]
		    	for (let i = 0; i < temp.length - 1; i++) {
		    		let [v, pos] = [temp[i][prop], i]
		    		for (let j = i + 1; j < temp.length; j++) {
		    			if (Number(v) > Number(temp[j][prop])) {
		    				v = temp[j][prop]
		    				pos = j
		    			}
		    		}
		    		[temp[i], temp[pos]] = [temp[pos], temp[i]]
		    	}
		    	if(order == 1){
		    		return temp;
		    	}else if(order == -1){
		    		return temp.reverse();
		    	}else{
		    		if(this.type == 'per'){		//业绩分析
		    			return this.per_table_list;
					}else{						//营销周报
						return this.yxzb_table_list;
					}
				}
			}


		}
	}
</script>
<style lang="less" scoped>
.detail_top_box{
	height: 120px;
}
.bottom_content{
	width: 350px;
	border-radius: 12px;
	border: 1px solid #EDEDED;
	.list_title{
		height: 38px;
		background: #F3F7FF;
		border-radius: 12px;
		.sort_icon{
			width: 10px;
			height: 12px;
		}
	}
	.row_item{
		height: 40px;
		border-bottom:1px solid #EDEDED;
		color: #5C5F71;
	}
}
</style>