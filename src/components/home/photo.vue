<template>
<div id="photo">
	<Scroller :scrollbarY="true"
	  :lockX="true">
		<div style="position:relative;">
			<img src="../../assets/shuimo.jpg"
			  width="100%" />
			<div style="position:absolute; z-index:2; left:100px; top:5px">
				山水之间！
			</div>
		</div>
		<div style="position: relative;  height: 89px;">
			<img src="../../assets/taohua.jpg"
			  alt=""
			  align="center"
			  width="100%">
			<span style="position: absolute; top: 130px; left: 60px;">
      桃之夭妖，灼灼其华！
       </span>
		</div>
		<div style="position: relative;  height: 89px;">
			<img src="../../assets/taohua.jpg"
			  alt=""
			  align="center"
			  width="100%">
			<span style="position: absolute; top: 130px; left: 60px;">
      桃之夭妖，灼灼其华！
       </span>
		</div>
	</Scroller>
</div>
</template>

<script>
import {
	Scroller
} from 'vux';
export default {
	components: {
		Scroller
	}
};
</script>

<style lang="less">
#cart {}
</style>
