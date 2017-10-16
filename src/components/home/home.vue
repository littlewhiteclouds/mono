<template>
<div class="home">
	<div class="tab">
		<!-- tab栏 -->
		<Scroller :lock-y="true">
			<tab :line-width="1"
			  :animate="false"
			  :active-color="'#35495e'"
			  :index="1">
				<tab-item @on-item-click="go(item)"
				  :selected="i===0"
				  class="vux-tab-item"
				  v-for="(item,i) in tabList"
				  :key="i">{{item.title}}</tab-item>
			</tab>
		</Scroller>
	</div>
	<router-view></router-view>
</div>
</template>

<script>
import {
	Tab,
	TabItem,
	Scroller
} from 'vux';

export default {
	data() {
		return {
			tabList: [ {
					title: '早午茶',
					path: 'brunch'
				},
				{
					title: '我的订阅',
					path: 'myFeeds'
				},
				{
					title: '猜你喜欢',
					path: 'recommend'
				},
				{
					title: '画册',
					path: 'photo'
				},
				{
					title: '音乐',
					path: 'music'
				}
			]
		};
	},
	methods: {
		go( item ) {
			this.$router.push( `/home/${item.path}` );
		}
	},
	computed: {
		tabWidth() {
			return this.tabList.length * 100 + 'px';
		}
	},
	components: {
		Tab,
		TabItem,
		Scroller
	}
};
</script>

<style lang="less">
.home {
    height: 100%;
    position: relative;
}

.vux-tab-item {
    background: #5cb85c!important;
    color: #fff!important;
}
tab {
    width: 100%;
}
</style>
