import { createStore } from 'vuex'

export default createStore({
  state: { //데이터값 정의(변수 만드는 곳)
    count: 10
  },
  getters: { //정의된 데이터 값을 가공 (읽기 전용)
    limit(state){
      return state.count === 20 //limit 수치 정해주기~
    }
  },
  mutations: { //정의된 데이터 값을 수정
    changeCount(state, num){
      state.count = num;
    }
  },
  actions: { //mutations에 n번을 수정하라고 요청, 굳이 안쓰긴 함 = reducer
    requestCount({commit}, action){
      let num = 0;
      if(action.type == '+'){
        num = action.num + 1;
      }else{
        num = action.num - 1;
      }
      commit ('changeCount', num)
    } //값을 여기로 보내서 증가인지 감소인지 보고 처리하라고 한거래요
  },
  modules: { //데이터 유형이 한 개 이상일때
  }
})
