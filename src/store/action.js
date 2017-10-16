import * as types from "./types.js"
import Vue from 'vue';
import VueResource from 'vue-resource';
import axios from 'axios'



Vue.use(VueResource);
export const hideTitle1 = ({
  commit
}) => {
  //异步的函数
  commit(types.HIDE_TITLE);
  console.log("in hideTitle1()");

}

//初始化首页的数据
export const initHomeData = ({
  state,
  commit
}) => {
  Vue.http.get('https://www.easy-mock.com/mock/59e086b7ca26b643bbed0140/mono/zaowucha').then(res => {
    let body = res.data;
    if (body.reason === "成功的返回") {
      state.initLoad = true;
      let newList = body.result.data.map( item => {
        return {
          authorName: item.authorName,
          articleType: item.articleType,
          articlePicture: item.articlePicture,
          articleTitle: item.articleTitle,
          articleContent: item.articleContent,
          articleUrl: item.url
        };
      });
      console.log(newList);
      commit('SET_NODELIST', {
        list: newList
      });
    }
  });
}
export const refreshHomeData = ({
  state,
  commit
}) => {
  console.log("refreshHomeData" + state.initLoad);
  Vue.http.jsonp( `http://3g.163.com/touch/jsonp/sy/recommend/0-9.html`, {
    params: {
      miss: 0,
      refresh: type
    }
  } ).then( res => {
    let body = res.body;
    if ( body.code === 200 ) {
      data = body.list.filter( item => ( item.addata === null && item.picInfo.length > 0 ) ).map( item => {
        return {
          authorName: item.authorName,
          articleType: item.articleType,
          articlePicture: item.articlePicture,
          articleTitle: item.articleTitle,
          articleContent: item.articleContent
        };
      });
    }
  });
}
