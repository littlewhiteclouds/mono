<template>
<div id="zaoWuCha">
	<div class="node"
	  v-for="(nodelist, index) in nodesList"
	  :key="nodelist.name">

		<p>{{ nodelist.authorName }} {{ nodelist.articleType }}</p>

		<div class="content">

			<a :href="nodelist.url">
        <img :src="nodelist.articlePicture"
			  width="100%"
			  height="100px"
			  class="lazy lazy-fadein" />
      </a>

		</div>

		<h3>{{ nodelist.articleTitle }}</h3>
		<p> {{ nodelist.articleContent }}</p>
	</div>
</div>
</template>

<script>
import Axios from 'axios'

export default {
	name: 'myFeeds',
	data() {
		return {
			msg: '',
			nodesList: []
		}
	},
	created: function () {
		var _this = this
		Axios.get( 'https://www.easy-mock.com/mock/59e086b7ca26b643bbed0140/mono/zaowucha' )
			.then( function ( rsp ) {
				console.log( '获取到的数据' + rsp.data.result.data )
				_this.msg = ''
				_this.nodesList = rsp.data.result.data
			} )
	}
};
</script>

<style lang="less">
.node {
    margin-bottom: 5px;
}
</style>
