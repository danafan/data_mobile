<template>
	<div class="container">
		<div class="top_content relative width-100">
			<img class="absolute top-0 left-0 width-100 height-100" src="../static/index_back.png">
			<div class="absolute top-0 left-0 width-100 height-100 pl12 pr12">
				<div class="mt90 width-100 tc bold f32 white_color">店铺业绩</div>
				<div class="flex flex-warp mt30">
					<div class="menu_item flex ac jc">
						<div class="index_color f16 fw-500 mr36">业绩分析</div>
						<img class="yjfx_icon" src="../static/yjfx_icon.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="less" scoped>
.top_content{
	height: 330px;
	.menu_item{
		width: 172px;
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