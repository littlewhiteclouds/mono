<template>
<div id="app">
	<ViewBox>
		<div class="content">
			<router-view></router-view>
		</div>

		<!-- 底部按钮 -->
		<Tabbar slot="bottom">
			<TabbarItem selected
			  link="/home">
				<span slot="icon">
            <img src="./assets/recommend.jpg"></img>
          </span>
				<span slot="label">推荐</span>
			</TabbarItem>
			<TabbarItem link="/discovery">
				<span slot="icon">
            <img src="./assets/discovery.jpg"></img>
          </span>
				<span slot="label">发现</span>
			</TabbarItem>
			<TabbarItem link="/community">
				<span slot="icon">
            <img src="./assets/community.jpg"></img>
          </span>
				<span slot="label">社区</span>
			</TabbarItem>
			<TabbarItem link="/mine"
			  show-dot>
				<span slot="icon">
            <img src="./assets/people.jpg"></img>
          </span>
				<span slot="label">我的</span>
			</TabbarItem>
		</Tabbar>
	</ViewBox>
</div>
</template>

<script>
import {
	Tabbar,
	TabbarItem,
	ViewBox
} from 'vux';
import router from './router';
import {
	mapState,
	mapGetters,
	mapActions,
	mapMutations
} from 'vuex';

export default {
	data() {
		return {

		};
	},
	computed: {

	},
	methods: {

	},
	router,
	created() {

	},
	components: {
		Tabbar,
		TabbarItem,
		ViewBox
	}
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body,
html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
#app {
    height: 100%;
    .content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
    }

}
</style>
