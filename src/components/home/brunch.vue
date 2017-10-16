<template>
<div id="zaoWuCha">
	<Scroller :scrollbarY="true"
	  :lockX="true">
		<router-view></router-view>
		<router-link :to="{name:'brunchDetail'}">
			<</router-link>
				<div class="node"
				  v-for="(nodeItem, index) in nodeList"
				  :key="nodeList.name">
					<span class="floatLeft">{{ nodeItem.authorName }}</span>
					<span class="floatRight">{{ nodeItem.articleType }}</span>
					<div class="content">
						<a :href="nodeItem.articleUrl">
        <img :src="nodeItem.articlePicture"
				  width="100%" />
          </a>
						<span class="wordInImg">
                {{ nodeItem.articleTitle }}
              </span>
					</div>
					<h1>{{ nodeItem.articleTitle }}</h1>
					<p class="shotDesc"> 摘要：{{ nodeItem.articleContent }}</p>
				</div>
	</Scroller>
</div>
</template>

<script>
import {
	mapState,
	mapGetters,
	mapActions,
	mapMutations,
} from 'vuex';
import {
	Scroller
} from 'vux';

export default {
	name: 'zaowucha',
	name: 'myFeeds',
	data() {
		return {
			zaowucha: 0
		}
	},
	computed: {
		...mapState( [ 'nodeList' ], [ 'initLoad' ] ),
		...mapGetters( [ 'getNodelist' ] ),
		...mapMutations( [ 'SET_NODELIST' ] ),
		...mapActions( [ 'initHomeData', 'refreshHomeData' ] )
	},

	methods: {
		refresh() {
			getType();
			this.zaowucha = 0;
			this.$store.dispatch( 'refreshHomeData' );
			this.$refs.scroller.finishPullToRefresh();
			this.$vux.toast.text( `成功刷新${this.nodelList.length}条数据` );
		}
	},
	components: {
		Scroller
	},
	created() {
		this.$store.dispatch( 'initHomeData' );
	}
};
</script>

<style lang="less">
.node {
    display: block;
    overflow: hidden;
    padding: 14px 4% 11px;
    position: relative;
    color: #333;
}
.floatLeft {
    float: left;
}
.floatRight {
    float: right;
}
.shotDesc {
    color: #333;
    font-size: 19px;
}
.content {
    position: relative;

}
.wordInImg {
    position: absolute;
    bottom: 10px;
}
</style>
