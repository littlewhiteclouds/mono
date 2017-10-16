import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './action'
import * as types from './types'


Vue.use(Vuex)

const state ={
  nodeList:[],
  zaowucha: 0,
  initLoad: false,
}


export default new Vuex.Store({
  state ,
  getters,
  actions,
  mutations
})
