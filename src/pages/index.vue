<template>
	<div class="container">
		<div class="top_content relative width-100">
			<img class="absolute top-0 left-0 width-100 height-100" src="../static/index_back.png">
			<div class="absolute top-0 left-0 width-100 height-100 pl12 pr12">
				<div class="mt80 width-100 tc bold f32 white_color">店铺业绩</div>
				<div class="flex jsb flex-warp mt30">
					<div class="menu_item mb7 flex ac jc" @click="$router.push('/performance_analysis')">
						<div class="index_color f16 fw-500 mr36">业绩分析</div>
						<img class="yjfx_icon" src="../static/yjfx_icon.png">
					</div>
					<div class="menu_item mb7 flex ac jc" @click="toastFn">
						<div class="index_color f16 fw-500 mr36">
							<div>营销费用</div>
							<div>经营管控</div>
						</div>
						<img class="yjfx_icon" src="../static/yxfyjygk_icon.png">
					</div>
					<div class="menu_item mb7 flex ac jc" @click="toastFn">
						<div class="index_color f16 fw-500 mr36">
							<div>周经营</div>
							<div>简报</div>
						</div>
						<img class="yjfx_icon" src="../static/zjyjb_icon.png">
					</div>
					<div class="menu_item mb7 flex ac jc" @click="toastFn">
						<div class="index_color f16 fw-500 mr36">
							<div>每日业绩</div>
							<div>分析</div>
						</div>
						<img class="yjfx_icon" src="../static/mryjfx_icon.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			toastFn(){
				this.$toast('开发中,敬请期待~')
			}
		}
	}
</script>
<style lang="less" scoped>
.top_content{
	height: 330px;
	.menu_item{
		width: 49%;
		height: 84px;
		background: #FFFFFF;
		border-radius: 10px;
	}
	.yjfx_icon{
		width: 34px;
		height: 34px;
	}
}
</style>