import * as types from './types'

export const setTitle = (state, playload) => {
  //只能同步的函数
  state.title = playload.title;
  console.log("mm:" + state.title)
}
export const SET_NODELIST = (state, playload) => {
  state.nodeList = playload.list
}
export const SET_INITLOAD = (state, playload) => {
  state.initLoad = playload.finish;
}
