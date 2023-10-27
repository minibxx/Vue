import { createStore } from 'vuex'

export default createStore({
  state: {
    mode: 'list',
    newsData : [
      {id:1, name:'민유빈', contents: '뉴스 1', subject: '제목입니다'}
    ]
  },
  getters: {
  },
  mutations: {
    insertNews(state,newValue){
      state.newsData.push(newValue);
    },
    modeEdit(state,str){
      state.mode = str;
    }
  },
  actions: {
  },
  modules: {
  }
})
