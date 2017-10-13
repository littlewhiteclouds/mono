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
