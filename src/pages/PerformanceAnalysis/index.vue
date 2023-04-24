<template>
	<div class="container flex fc">
		<!-- 顶部筛选 -->
		<div class="top_form width-100 pl20 pr20 pt12 pb10 mb10">
			<div class="flex ac jsb">
				<div class="flex-1 flex ac mr10">
					<div class="f14 text_color">店铺：</div>
					<el-select class="flex-1" ref="storeSelect" v-model="store_ids" size="mini" multiple filterable collapse-tags placeholder="全部" @change="performanceReport">
						<div>
							<el-option v-for="item in store_list" :key="item.dept_id" :label="item.shop_name" :value="item.dept_id">
						</el-option>
						</div>
						
						<div>asdad</div>
					</el-select>
				</div>
				<div class="flex ac" @click="screen_overlay = true">
					<div class="f14 text_color mr4">高级筛选</div>
					<img class="screen_icon" src="../../static/screen_icon.png">
				</div>
			</div>
			<div class="top_line mt9 mb7"></div>
			<div class="f14 text_color">发货日期：{{start_time}}～{{end_time}}</div>
		</div>
		<!-- 下面内容 -->
		<div ref="scroll_box" class="flex-1 scroll-y hide_scrollbar pl12 pr12">
			<div class="flex jsb mb10">
				<div class="view_item flex-1 pl6 pr8 pt12 pb12 mr10">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">销售收入预估</div>
						<img class="comment_icon" src="../../static/comment_icon.png" @click="setDialog('xssryg')">
					</div>
					<div class="item_value f28 bold">{{xssryg.xssryg}}万</div>
					<div class="small_value flex jsb small_text">
						<div>销售收入月目标：</div>
						<div>{{xssryg.xssrymb}}万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>月度完成率：</div>
						<div>{{xssryg.ydwcl}}%</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计-销售收入：</div>
						<div>{{xssryg.rlj_xssr}}万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>周期内完成率：</div>
						<div>{{xssryg.zqnwcl}}%</div>
					</div>
				</div>
				<div class="view_item flex-1 pl6 pr8 pt12 pb12">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">营销费用预估</div>
						<img class="comment_icon" src="../../static/comment_icon.png" @click="setDialog('yxfyyg')">
					</div>
					<div class="item_value f28 bold">{{yxfyyg.yxfyyg}}万</div>
					<div class="small_value flex jsb small_text">
						<div>营销费用月目标：</div>
						<div>{{yxfyyg.yxfyymb}}万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>月度使用率：</div>
						<div>{{yxfyyg.ydsyl}}%</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计-营销费用：</div>
						<div>{{yxfyyg.rlj_yxfy}}万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>周期内完成率：</div>
						<div>{{yxfyyg.zqnsyl}}%</div>
					</div>
				</div>
			</div>
			<div class="flex jsb mb10">
				<div class="view_item flex-1 pl6 pr8 pt12 pb12 mr10">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">预估值-贡献毛益</div>
						<img class="comment_icon" src="../../static/comment_icon.png" @click="setDialog('ygzgxmy')">
					</div>
					<div class="item_value f28 bold">{{ygz_gxmy.ygz_gxmy}}万</div>
					<div class="small_value flex jsb small_text">
						<div>贡献毛益月目标：</div>
						<div>{{ygz_gxmy.gxmyymb}}万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>月度完成率：</div>
						<div>{{ygz_gxmy.ydwcl}}%</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计-贡献毛益：</div>
						<div>{{ygz_gxmy.rlj_gxmy}}万</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>周期内完成率：</div>
						<div>{{ygz_gxmy.zqnwcl}}%</div>
					</div>
				</div>
				<div class="view_item  flex-1 pl6 pr8 pt12 pb12">
					<div class="flex ac jsb">
						<div class="f16 text_color fw-500">预估值-贡献毛益率</div>
						<img class="comment_icon" src="../../static/comment_icon.png" @click="setDialog('ygzgxmyl')">
					</div>
					<div class="item_value f28 bold">{{ygz_gxmyl.gxmylyg}}%</div>
					<div class="small_value flex jsb small_text">
						<div>贡献毛益率月目标：</div>
						<div>{{ygz_gxmyl.ymb_gxmyl}}%</div>
					</div>
					<div class="small_value flex jsb small_text">
						<div>日累计-贡献毛益率：</div>
						<div>{{ygz_gxmyl.rlj_gxmyl}}%</div>
					</div>
				</div>
			</div>
			<div class="jlryg width-100 pl6 pr8 pt12 pb12 mb10" v-if="jlryg">
				<div class="flex ac jsb">
					<div class="f16 text_color fw-500">净利润预估</div>
					<img class="comment_icon" src="../../static/comment_icon.png"  @click="setDialog('jlryg')">
				</div>
				<div class="item_value f28 bold">{{jlryg.jlryg}}万</div>
				<div class="small_value flex small_text">
					<div>净利润率：</div>
					<div>{{jlryg.jlrl}}%</div>
				</div>
			</div>
			<!-- 业绩分析 -->
			<div class="table_box mb10">
				<div class="table_box_header flex ac jsb pl10 pr10">
					<div class="f16 fw-500 text_color">指标解释</div>
					<div class="flex ac">
						<img class="setting_icon ml14" src="../../static/setting_icon.png" @click="perCustomColumn('2',true)">
					</div>
				</div>
				<div class="list_box" :class="{'put_height':per_arrow_status == 0}">
					<div class="row flex jsb f14 pl12 pr6" v-for="item in per_title_list" @click="getDetail(item.row_name,item.row_field_name,item.unit,per_total_data[item.row_field_name],'per')">
						<div class="flex ac">
							<div>{{item.row_name}}：</div>
							<img class="comment_icon" src="../../static/comment_icon.png" v-if="item.remark != ''" @click.stop="showDialog(item.remark)"/>
						</div>
						<div>{{per_total_data[item.row_field_name]?per_total_data[item.row_field_name]+item.unit:'--'}}</div>
					</div>
				</div>
				<div class="bottom_setting flex jc ac" @click="per_arrow_status = !per_arrow_status">
					<div class="setting_color f12 mr4">{{per_arrow_status == 0?'展开':'收起'}}</div>
					<img class="arrow_icon" src="../../static/down_icon.png" v-if="per_arrow_status == 0">
					<img class="arrow_icon" src="../../static/arrow_up.png" v-else>
				</div>
			</div>
			<!-- 营销周报 -->
			<div class="table_box mb10">
				<div class="table_box_header flex ac jsb pl10 pr10">
					<div class="f16 fw-500 text_color">营销周报</div>
					<div class="flex ac">
						<img class="setting_icon ml14" src="../../static/setting_icon.png" @click="perCustomColumn('1',true)">
					</div>
				</div>
				<div class="list_box" :class="{'put_height':yxzb_arrow_status == 0}">
					<div class="row flex jsb f14 pl12 pr6" v-for="item in yxzb_title_list" @click="getDetail(item.row_name,item.row_field_name,item.unit,per_total_data[item.row_field_name],'yxzb')">
						<div class="flex ac">
							<div>{{item.row_name}}：</div>
							<img class="comment_icon" src="../../static/comment_icon.png" v-if="item.remark != ''" @click.stop="showDialog(item.remark)"/>
						</div>
						<div>{{yxzb_total_data[item.row_field_name]?yxzb_total_data[item.row_field_name]+item.unit:'--'}}</div>
					</div>
				</div>
				<div class="bottom_setting flex jc ac" @click="yxzb_arrow_status = !yxzb_arrow_status">
					<div class="setting_color f12 mr4">{{yxzb_arrow_status == 0?'展开':'收起'}}</div>
					<img class="arrow_icon" src="../../static/down_icon.png" v-if="yxzb_arrow_status == 0">
					<img class="arrow_icon" src="../../static/arrow_up.png" v-else>
				</div>
			</div>
		</div>
		<!-- 高级筛选 -->
		<van-overlay :show="screen_overlay" @click="screen_overlay = false">
			<div class="wrapper" @click.stop>
				<div class="overlay_title flex ac jse pl20 pr20 relative border_bottom">
					<div class="title text_color f15 fw-500">选择筛选条件</div>
					<img class="close_icon" src="../../static/close_icon.png" @click="screen_overlay = false">
				</div>
				<div class="screen_row flex ac border_bottom pl10 pr10">
					<div class="screen_label f14 text_color">项目部：</div>
					<el-cascader
					class="flex-1"
					size="mini"
					ref="cascader"
					:options="dept_list"
					:props="props"
					@change="getIds"
					filterable
					collapse-tags
					></el-cascader>
				</div>
				<div class="screen_row flex ac border_bottom pl10 pr10">
					<div class="screen_label f14 text_color">平台：</div>
					<el-select class="flex-1" v-model="plat_ids" size="small" @change="getStoreList" multiple filterable collapse-tags placeholder="全部">
						<el-option v-for="item in plat_list" :key="item" :label="item" :value="item">
						</el-option>
					</el-select>
				</div>
				<div class="screen_row flex ac border_bottom pl10 pr10">
					<div class="screen_label f14 text_color">店铺：</div>
					<el-select class="flex-1" v-model="store_ids" size="small" multiple filterable collapse-tags :popper-append-to-body="false" placeholder="全部">
						<el-option v-for="item in store_list" :key="item.dept_id" :label="item.shop_name" :value="item.dept_id">
						</el-option>
					</el-select>
				</div>
				<div class="screen_row flex ac border_bottom pl10 pr10">
					<div class="screen_label f14 text_color">品牌：</div>
					<el-select class="flex-1" size="small" v-model="pp_ids" multiple filterable collapse-tags placeholder="全部">
						<el-option v-for="item in pp_list" :key="item" :label="item" :value="item">
						</el-option>
					</el-select>
				</div>
				<div class="screen_row flex ac border_bottom pl10 pr10">
					<div class="screen_label f14 text_color">公司：</div>
					<el-select class="flex-1" size="small" v-model="company" multiple filterable collapse-tags placeholder="全部">
						<el-option v-for="item in company_list" :key="item" :label="item" :value="item">
						</el-option>
					</el-select>
				</div>
				<div class="screen_row flex ac border_bottom pl10 pr10">
					<div class="screen_label f14 text_color">开始日期：</div>
					<el-date-picker
					class="flex-1"
					size="small"
					v-model="start_time"
					value-format="yyyy-MM-dd"
					type="date"
					:picker-options="startDateOptions"
					placeholder="开始日期">
				</el-date-picker>
			</div>
			<div class="screen_row flex ac border_bottom pl10 pr10">
				<div class="screen_label f14 text_color">结束日期：</div>
				<el-date-picker
				class="flex-1"
				size="small"
				v-model="end_time"
				value-format="yyyy-MM-dd"
				type="date"
				:picker-options="endDateOptions"
				placeholder="结束日期">
			</el-date-picker>
		</div>
		<div class="screen_row flex ac border_bottom pl10 pr10">
			<div class="screen_label f14 text_color">考核店铺：</div>
			<el-select class="flex-1" size="small" v-model="audit_flag" placeholder="请选择">
				<el-option label="否" value="0"></el-option>
				<el-option label="是" value="1"></el-option>
			</el-select>
		</div>
		<div class="flex">
			<div class="button flex-1 fw-600 f14 text_color" @click="resetScreen">重置</div>
			<div class="line"></div>
			<div class="button flex-1 fw-600 f14 text_color" @click="performanceReport">确定</div>
		</div>
	</div>
</van-overlay>
<!-- 加载中 -->
<van-overlay :show="loading" class="flex ac jc">
	<van-loading size="24px" vertical color="#0094ff">加载中...</van-loading>
</van-overlay>
<!-- 自定义列表 -->
<van-overlay :show="custom_overlay" @click="custom_overlay = false">
	<div class="wrapper" @click.stop>
		<div class="overlay_title flex ac jse pl20 pr20 relative border_bottom">
			<div class="title text_color f15 fw-500">自定义列表字段</div>
			<img class="close_icon" src="../../static/close_icon.png" @click="custom_overlay = false">
		</div>
		<div class="custom_list flex flex-warp jsb border_bottom">
			<div class="custom_item text_color f12 mb10 flex ac jc" :class="{'active_custom':item.is_selected}" v-for="(item,index) in current_view_row" @click="checkSelected(index)">{{item.row_name}}</div>
			<div style="width: 106px" v-if="current_view_row.length%3 == 2"></div>
		</div>
		<div class="flex">
			<div class="button flex-1 fw-600 f14 text_color" @click="setDefault">恢复默认</div>
			<div class="line"></div>
			<div class="button flex-1 fw-600 f14 text_color" @click="saveCustom">保存</div>
		</div>
	</div>
</van-overlay>
<!-- 整个模块的提示 -->
<van-dialog v-model:show="show_toast" confirmButtonText="我知道了">
	<div class="pt10 pr10 pb10 pl10">
		<div class="flex f12" style="line-height: 22px" v-for="item in toast_list">
			<div class="space_nowrap bold">{{item.label}}</div>
			<div>{{item.value}}</div>
		</div>
	</div>
</van-dialog>
</div>
</template>
<script>
	import resource from '../../api/resource.js'
	import {getMonthStartDate,getCurrentDate} from '../../utils/index.js'
	export default{
		data(){
			return{
				screen_overlay:false,		//筛选器弹窗
				dept_list: [],				//部门列表	
				dept_ids:[],				//选中的部门id列表
				plat_list:[],				//平台列表
				plat_ids:[],				//选中的平台列表
				store_list: [],				//店铺列表	
				store_ids:[],				//选中的店铺id列表
				props:{
					multiple:true,
					value:'dept_id',
					label:'dept_name',
					children:'list',
				},
				pp_list:[],					//品牌列表
				pp_ids:[],					//选中的品牌
				company_list:[],			//公司列表
				company:[],					//选中的公司
				startDateOptions: {
					disabledDate:(time) =>{
						if(this.end_time){
							return time.getTime() > new Date(this.end_time).getTime();
						}else{
							return false;
						};
					}
				},
				endDateOptions: {
					disabledDate:(time) =>{
						if(this.start_time){
							return time.getTime() < new Date(this.start_time).getTime();
						}else{
							return false;
						};
					}
				},
				start_time:getMonthStartDate(),			//发货时间
				end_time:getCurrentDate(),				//发货时间
				audit_flag:'0',							//是否考核店铺
				xssryg:{},							//销售收入预估
				yxfyyg:{},							//营销费用预估
				ygz_gxmy:{},						//预估值-贡献毛益
				ygz_gxmyl:{},						//预估值-贡献毛益率
				jlryg:null,							//净利润预估
				per_title_list:[],			//业绩分析表头
				per_table_list:[],			//业绩分析列表数据
				per_total_data:{},			//业绩分析总计数据
				per_view_row:[],			//业绩分析原始
				per_selected_ids:[],		//业绩分析选中id列表
				per_arrow_status:0,			//业绩分析表格收起状态（0:收起；1：展开）
				yxzb_title_list:[],			//营销周报表头
				yxzb_table_list:[],			//营销周报列表数据
				yxzb_total_data:{},			//营销周报总计数据
				yxzb_view_row:[],			//营销周报原始
				yxzb_selected_ids:[],		//营销周报选中id列表
				yxzb_arrow_status:0,		//营销周报表格收起状态（0:收起；1：展开）
				custom_overlay:false,		//自定义列表弹窗
				current_view_row:[],		//当前展示的自定义列表
				loading:false,
				show_toast:false,
				toast_list:[],
				xssryg_toast:[
				'销售收入预估：销售发货金额-售后退款金额-线下退款金额预估+冲减收入',
				'销售收入月目标：销售收入月目标',
				'月度完成率：销售收入预估/销售收入月目标',
				'日累计-销售收入：销售收入日目标累计',
				'周期内完成率：销售收入预估/销售收入日目标累计'
				],
				//营销费用预估
				yxfyyg_toast:[
				'营销费用预估：财务用友系统计算的营销费用',
				'营销费用月目标：营销费用月目标',
				'月度使用率：营销费用预估/营销费用月目标',
				'日累计-营销费用：营销费用日目标累计',
				'周期内使用率：营销费用预估/营销费用日目标累计'
				],
				//预估值-贡献毛益
				ygzgxmy_toast:[
				'预估值-贡献毛益：毛利额-营销费用-买一送一费用-店铺团队费用-项目部分摊费用-事业部分摊费用',
				'贡献毛益月目标：贡献毛益月目标',
				'月度完成率：贡献毛益预估/贡献毛益月目标',
				'日累计-贡献毛益：贡献毛益日目标累计',
				'周期内完成率：贡献毛益预估/贡献毛益日目标累计'
				],
				//预估值-贡献毛益率
				ygzgxmyl_toast:[
				'预估值-贡献毛益率：贡献毛益预估/销售收入预估',
				'贡献毛益率月目标：贡献毛益月目标/销售收入月目标',
				'日累计-贡献毛益率：贡献毛益日目标/销售收入日目标'
				],
				//净利润预估
				jlryg_toast:[
				'净利润预估：毛利额-营销费用-买一送一费用-店铺团队费用-项目部分摊费用-事业部分摊费用-公摊费用预估-客服费用预估-物流类费用预估'
				],
			}
		},
		created(){
			//部门列表
			this.AjaxViewDept();
			//平台列表
			this.ajaxPlat();
			// 获取所有店铺
			this.getStoreList()
			//品牌列表
			this.ajaxDeerShopPp();
			//公司列表
			this.ajaxCompany();
			//获取数据
			this.performanceReport();
			//设置开始和结束时间
			let time_data = {
				start_time:this.start_time,
				end_time:this.end_time
			}
			this.$store.commit('setTime',time_data);
		},
		mounted(){
			// 获取节点
			this.tableDistance = this.$refs.scroll_box;
    		// 写入监听事件
    		this.tableDistance.addEventListener('scroll', (res) => {
    			this.scrollTop = this.tableDistance.scrollTop
    		})
    	},
    	activated() {
    		this.$nextTick(() => {
    			setTimeout(() => {
    				var bodyWrapper = this.$refs.scroll_box;
    				bodyWrapper.scrollTop = this.scrollTop
    			}, 13)
    		})
    	},
    	beforeDestroy() {
    		this.$refs.table.bodyWrapper.removeEventListener('scroll', (res) => {
    			this.scrollTop = this.tableDistance.scrollTop
    		}, false)
    	},
    	methods:{
			//品牌列表
			ajaxDeerShopPp(){
				resource.ajaxDeerShopPp().then(res => {
					if(res.data.code == 1){
						this.pp_list = res.data.data;
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			//公司列表
			ajaxCompany(){
				resource.ajaxCompany().then(res => {
					if(res.data.code == 1){
						this.company_list = res.data.data;
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			getIds(){
				this.$nextTick(()=>{
					var arr = [];
					let select_department = this.$refs.cascader.getCheckedNodes({leafOnly:true});
					select_department.map(s => {
					if(s.parent){	//最后一层有父级
						var m = s.parent;
						if(m.checked){ //倒数第二层被全选了
							if(m.parent){ //倒数第二层有父级
								var d = m.parent;
								if(d.checked){ //倒数第三层被全选了
									if(arr.indexOf(d.value) == -1){
										arr.push(d.value);
									}
								}else{
									if(arr.indexOf(m.value) == -1){
										arr.push(m.value);
									}
								}
							}else{
								if(arr.indexOf(m.value) == -1){
									arr.push(m.value);
								}
							}
						}else{
							arr.push(s.value);
						}
					}else{	//只有一层
						arr.push(s.value);
					}
				})
					this.dept_ids = arr;
					//店铺列表
					this.getStoreList();
				});
			},
			//部门列表
			AjaxViewDept(){
				resource.ajaxViewDept({from:this.from}).then(res => {
					if(res.data.code == 1){
						this.dept_list = res.data.data;
					}else{
						this.$toast(res.data.msg);
					}
				})
			},	
			//平台列表
			ajaxPlat(){
				resource.ajaxPlat().then(res => {
					if(res.data.code == 1){
						this.plat_list = res.data.data;
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			// 获取所有店铺
			getStoreList(){
				this.store_ids = [];
				let dept_id = this.dept_ids.join(',');
				resource.ajaxViewStore({dept_id:dept_id,platform:this.plat_ids.join(',')}).then(res => {
					if(res.data.code == 1){
						this.store_list = res.data.data;
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			//点击重置筛选项
			resetScreen(){
				this.dept_ids = [];
				this.$refs.cascader.$refs.panel.clearCheckedNodes();
				this.$refs.cascader.$refs.panel.activePath = [];
				this.plat_ids = [];
				this.store_ids = [];
				this.pp_ids = [];
				this.company = [];
				this.start_time = getMonthStartDate();			//发货时间
				this.end_time = getCurrentDate();				//发货时间
				this.audit_flag = '0';
			},
			//获取数据
			performanceReport(){
				let arg = {
					equipment:'mobile',
					platform:this.plat_ids.join(','),
					dept_id:this.dept_ids.join(','),
					shop_id:this.store_ids.join(','),
					start_time:this.start_time,
					end_time:this.end_time,
					audit_flag:this.audit_flag,
					company:this.company.join(','),
					pp:this.pp_ids.join(',')
				}
				this.screen_overlay = false;
				this.$nextTick(()=>{
					this.$refs.storeSelect.blur();
				})
				this.loading = true;
				resource.performanceReport(arg).then(res => {
					if(res.data.code == 1){
						this.loading = false;
						let data = res.data.data;
						// 顶部几块
						this.xssryg = data.top.xssryg;
						this.yxfyyg = data.top.yxfyyg;
						this.ygz_gxmy = data.top.ygz_gxmy;
						this.ygz_gxmyl = data.top.ygz_gxmyl;
						this.jlryg = data.top.jlryg;		
						//业绩分析表头
						let per_title_list = data.table_list.title_list;
						let per_dpid_index = per_title_list.findIndex(item => item.row_field_name == "dpid");
						if(per_dpid_index > -1){
							per_title_list.splice(per_dpid_index, 1);
						}
						let per_dpmc_index = per_title_list.findIndex(item => item.row_field_name == "dpmc");
						if(per_dpmc_index > -1){
							per_title_list.splice(per_dpmc_index, 1);
						}
						this.per_title_list = per_title_list;
						this.per_table_list = data.table_list.list;
						//业绩分析数据
						if(this.per_table_list.length == 0){
							this.per_total_data = {};
						}else if(this.per_table_list.length == 1){
							this.per_total_data = this.per_table_list[0];
						}else{
							this.per_total_data = data.table_list.total_list;
						}
						//业绩分析自定义列表
						this.per_view_row = data.table_list.view_row;
						this.per_selected_ids = data.table_list.selected_ids;

						//营销周报表头
						let yxzb_title_list = data.week_table_list.title_list;
						let yxzb_dpid_index = yxzb_title_list.findIndex(item => item.row_field_name == "dpid");
						if(yxzb_dpid_index > -1){
							yxzb_title_list.splice(yxzb_dpid_index, 1);
						}
						let yxzb_dpmc_index = yxzb_title_list.findIndex(item => item.row_field_name == "dpmc");
						if(yxzb_dpmc_index > -1){
							yxzb_title_list.splice(yxzb_dpmc_index, 1);
						}
						this.yxzb_title_list = yxzb_title_list;
						this.yxzb_table_list = data.week_table_list.list;
						//营销周报数据
						if(this.yxzb_table_list.length == 0){
							this.yxzb_total_data = {};
						}else if(this.yxzb_table_list.length == 1){
							this.yxzb_total_data = this.yxzb_table_list[0];
						}else{
							this.yxzb_total_data = data.week_table_list.total_list;
						}
						//营销周报自定义列表
						this.yxzb_view_row = data.week_table_list.view_row;
						this.yxzb_selected_ids = data.week_table_list.selected_ids;
						//设置store
						let store_data = {
							per_table_list:this.per_table_list,
							yxzb_table_list:this.yxzb_table_list
						}
						this.$store.commit('setTableData',store_data);
					}else{
						this.$toast(res.data.msg);
					}
				})
			},
			//点击业绩分析自定义列
			perCustomColumn(menu_id,bool){
				this.menu_id = menu_id;
				if(this.menu_id == '2'){	//业绩分析
					this.current_view_row = this.per_view_row;
					this.current_view_row.splice(this.current_view_row.findIndex(item => item.row_field_name == "dpmc"), 1);
					this.current_view_row.map(item => {
						item['is_selected'] = false;
						this.per_selected_ids.map(i => {
							if(item.row_id == i){
								item['is_selected'] = true;
							}
						})
					})
				}else{						//营销周报
					this.current_view_row = this.yxzb_view_row;
					this.current_view_row.splice(this.current_view_row.findIndex(item => item.row_field_name == "dpmc"), 1);
					this.current_view_row.map(item => {
						item['is_selected'] = false;
						this.yxzb_selected_ids.map(i => {
							if(item.row_id == i){
								item['is_selected'] = true;
							}
						})
					})
				}
				this.custom_overlay = bool;
			},
			//自定义恢复默认
			setDefault(){
				let current_view_arr = this.current_view_row;
				this.current_view_row = [];
				current_view_arr.map(item => {
					item['is_selected'] = true;
				})
				this.current_view_row = current_view_arr;
			},
			//切换自定义选中状态
			checkSelected(index){
				let current_view_item = this.current_view_row[index];
				current_view_item.is_selected = !current_view_item.is_selected;
				this.$set(this.current_view_row,index,current_view_item);
			},
			//保存自定义列表
			saveCustom(){
				let arr = [];
				this.current_view_row.map(item => {
					if(item.is_selected){
						arr.push(item.row_id)
					}
				})
				resource.setColumns({menu_id:this.menu_id,row_ids:arr.join(',')}).then(res => {
					if(res.data.code == 1){
						this.$toast(res.data.msg);
						this.custom_overlay = false;
						//获取列表
						this.performanceReport();
						this.per_arrow_status = 0;
						this.yxzb_arrow_status = 0;
					}else{
						this.$toast(res.data.msg);
					}
				});
			},
			//查看顶部几个大模块的备注
			setDialog(type){
				this.toast_list = [];
				this[`${type}_toast`].map(item => {
					let o = {
						label:item.split('：')[0] + '：',
						value:item.split('：')[1]
					}
					this.toast_list.push(o)
				})
				this.show_toast = true;
			},
			//展示指标解释
			showDialog(message){
				this.$dialog.alert({
					message: message,
					messageAlign:'left',
					confirmButtonText:'我知道了'
				});
			},
			// 点击跳转详情
			getDetail(row_name,row_field_name,unit,total,type){
				let dw = unit == '%'?'bfh':unit;
				this.$router.push(`/performance_detail?title=${row_name}&key=${row_field_name}&unit=${dw}&total=${total}&type=${type}`);
			}
		}
	}

</script>
<style type="text/css">
.el-select .el-tag{
	max-width: 62%!important;
}
.el-cascader-menu{
	min-width: 120px!important;
}
.el-cascader__tags .el-tag{
	max-width: 45%!important;
}
</style>
<style lang="less" scoped>
.wrapper{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	width: 354px;
	background: #FFFFFF;
	border-radius: 8px;
	.overlay_title{
		height: 56px;
		.title{
			position:absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
		.close_icon{
			width: 12px;
			height: 12px;
		}
	}
	.custom_list{
		padding: 10px;
		.custom_item{
			width: 106px;
			text-align: center;
			min-height: 38px;
			background: #FFFFFF;
			border-radius: 2px;
			border: 1px solid #EBEBEB;
		}
		.active_custom{
			background: #E8F0FF;
			border: 1px solid #528BFA;
		}
	}
	.screen_row{
		padding-top:10px;
		padding-bottom:10px;
		.screen_label{
			width: 70px;
		}
	}
	.border_bottom{
		border-bottom:1px solid #F8F8F8;
	}
	.line{
		background:#F4F4F4;
		width: 1px;
		height: 42px;
	}
	.button{
		height: 42px;
		text-align: center;
		line-height: 42px;
	}
}
.top_form{
	background: linear-gradient(180deg, #E5EAFF 0%, #EAF0FF 32%, #FAFBFD 100%) #FFFFFF;
	box-shadow: 0px 2px 4px 0px rgba(230,230,230,0.5);
	border-radius: 0px 0px 30px 30px;
	.screen_icon{
		width: 17px;
		height: 17px;
	}
	.top_line{
		background:#EDEDED;
		height: 1px;
	}
}
.view_item{
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
	.list_box{
		overflow-y: hidden;
	}
	.put_height{
		max-height: 218px;
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