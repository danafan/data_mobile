<template>
	<div class="container flex fc">
		<!-- 顶部筛选 -->
		<div class="top_form width-100 pl20 pr20 flex ac jsb mb10">
			<div>店铺</div>
			<div class="flex ac">
				<div class="f14 text_color mr4">高级筛选</div>
				<img class="screen_icon" src="../../static/screen_icon.png">
			</div>
		</div>
		<!-- 下面内容 -->
		<div class="flex-1 scroll-y hide_scrollbar pl12 pr12">
			<div class="flex jsb mb10">
				<div class="view_item pl6 pr8 pt12 pb12">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">销售收入预估</div>
						<img class="comment_icon" src="../../static/comment_icon.png">
					</div>
					<div class="item_value f28 bold">900.00万</div>
					<div class="small_value flex jsb small_text">
						<div>销售收入月目标：</div>
						<div>27384.23万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>月度完成率：</div>
						<div>34.83%</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计-销售收入：</div>
						<div>27384.23万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>周期内完成率：</div>
						<div>27.38%</div>
					</div>
				</div>
				<div class="view_item pl6 pr8 pt12 pb12">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">营销费用预估</div>
						<img class="comment_icon" src="../../static/comment_icon.png">
					</div>
					<div class="item_value f28 bold">900.00万</div>
					<div class="small_value flex jsb small_text">
						<div>营销费用月目标：</div>
						<div>27384.23万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>月度使用率：</div>
						<div>34.83%</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计-营销费用：</div>
						<div>27384.23万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>周期内完成率：</div>
						<div>27.38%</div>
					</div>
				</div>
			</div>
			<div class="flex jsb mb10">
				<div class="view_item pl6 pr8 pt12 pb12">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">预估值-贡献毛益</div>
						<img class="comment_icon" src="../../static/comment_icon.png">
					</div>
					<div class="item_value f28 bold">900.00万</div>
					<div class="small_value flex jsb small_text">
						<div>贡献毛益月目标：</div>
						<div>27384.23万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>月度完成率：</div>
						<div>34.83%</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计-贡献毛益：</div>
						<div>27384.23万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>周期内完成率：</div>
						<div>27.38%</div>
					</div>
				</div>
				<div class="view_item pl6 pr8 pt12 pb12">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">预估值-贡献毛益率</div>
						<img class="comment_icon" src="../../static/comment_icon.png">
					</div>
					<div class="item_value f28 bold">900.00万</div>
					<div class="small_value flex jsb small_text">
						<div>贡献毛益率月目标：</div>
						<div>27384.23万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计算-贡献毛益率：</div>
						<div>27384.23万</div>
					</div>
				</div>
			</div>
			<div class="jlryg width-100 pl6 pr8 pt12 pb12 mb10">
				<div class="flex ac jsb">
					<div class="f16 text_color fw-500">净利润预估</div>
					<img class="comment_icon" src="../../static/comment_icon.png">
				</div>
				<div class="item_value f28 bold">900.00万</div>
				<div class="small_value flex small_text">
					<div>净利润率：</div>
					<div>27384.23万</div>
				</div>
			</div>
			<div class="table_box">
				<div class="table_box_header flex ac jsb pl10 pr10">
					<div class="f16 fw-500 text_color">指标解释</div>
					<div class="flex ac">
						<img class="comment_icon" src="../../static/comment_icon.png">
						<img class="setting_icon ml14" src="../../static/setting_icon.png">
					</div>
				</div>
				<div class="row flex jsb f14 pl12 pr6" v-for="item in per_title_list">
					<div>{{item.row_name}}</div>
					<div>{{item.row_field_name}}</div>
				</div>
				<div class="bottom_setting flex jc ac">
					<div class="setting_color f12 mr4">展开</div>
					<img class="arrow_icon" src="../../static/down_icon.png">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import resource from '../../api/resource.js'
	export default{
		data(){
			return{
				per_title_list:[],			//业绩分析表头
			}
		},
		created(){
			//获取数据
			this.performanceReport();
		},
		methods:{
			//获取数据
			performanceReport(){
				let arg = {
					platform:'',
					dept_id:'',
					shop_id:'',
					start_time:'2023-04-01',
					end_time:'2023-04-20',
					audit_flag:'',
					company:'',
					pp:''
				}
				resource.performanceReport(arg).then(res => {
					if(res.data.code == 1){
						let data = res.data.data;
						// 顶部几块
						// this.xssryg = data.top.xssryg;
						// this.yxfyyg = data.top.yxfyyg;
						// this.ygz_gxmy = data.top.ygz_gxmy;
						// this.ygz_gxmyl = data.top.ygz_gxmyl;
						// this.jlryg = data.top.jlryg;		
						//业绩分析表头
						this.per_title_list = data.table_list.title_list;
						//表格数据
						// this.shop_table_list_data = data.table_list.list;	//原始
						// this.clTableData(this.shop_table_list_data);
						// this.default_data_list = this.data_list;
						// this.total_shop_data = data.table_list.total;
						// this.total_list[0] = data.table_list.total_list;
						// this.view_row = data.table_list.view_row;
						// this.selected_ids = data.table_list.selected_ids;
						
						// 营销周报部分
						// 左侧表头
						// data.week_table_list.title_list.map(item => {
						// 	item.show_sort = false;		//是否显示排序标签
						// 	item.sort = 0;				//默认排序
						// })
						// this.week_label_list = data.week_table_list.title_list;
						// //表格数据
						// this.week_table_list_data = data.week_table_list.list;	//原始
						// this.clTableWeekData(this.week_table_list_data);
						// this.default_week_data_list = this.week_data_list;
						// this.total_week_data = data.week_table_list.total;
						// this.week_total_list[0] = data.week_table_list.total_list;
						// this.view_week_row = data.week_table_list.view_row;
						// this.selected_week_ids = data.week_table_list.selected_ids;
					}else{
						this.$toast(res.data.msg);
					}
				})
			}
		}
	}
</script>
<style lang="less" scoped>
.top_form{
	height: 48px;
	background: linear-gradient(180deg, #E5EAFF 0%, #EAF0FF 32%, #FAFBFD 100%) #FFFFFF;
	box-shadow: 0px 2px 4px 0px rgba(230,230,230,0.5);
	border-radius: 0px 0px 30px 30px;
	.screen_icon{
		width: 17px;
		height: 17px;
	}
}
.view_item{
	width: 172px;
	height: 176px;
	background: #F9FBFF;
	border-radius: 12px;
	border: 1px solid #EDEDED;
}
.comment_icon{
	width: 14px;
	height: 14px;
}
.setting_icon{
	width: 15px;
	height: 14px;
}
.item_value{
	color: #0C1B69;
}
.small_value{
	line-height: 45px;
	font-size: 20px;
	color: #5C5F71;
}
.small_text{
	zoom:0.5;
}
.jlryg{
	height: 110px;
	background: #FFFFFF;
	border-radius: 12px;
	border: 1px solid #EDEDED;
}
.table_box{
	background: #FFFFFF;
	border-radius: 12px;
	border: 1px solid #EDEDED;
	.table_box_header{
		height: 38px;
		background: #F3F7FF;
	}
	.bottom_setting{
		border-top:1px dashed #EDEDED;
		height: 35px;
	}
	.setting_color{
		color: #A4A6AF;
	}
	.arrow_icon{
		width: 9px;
		height: 6px;
	}
	.row{
		color: #5C5F71;
		line-height: 30px;
	}
}
</style>