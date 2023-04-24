import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    start_time:'',          //发货时间
    end_time:'',            //发货时间
    per_table_list:[],      //业绩分析列表
    yxzb_table_list:[],     //营销费用列表
  },
  mutations: {
    //设置开始时间和结束时间
    setTime(state, data){
      state.start_time = data.start_time;
      state.end_time = data.end_time;
    },
    //设置默认列表
    setTableData(state, data){
      state.per_table_list = data.per_table_list;
      state.yxzb_table_list = data.yxzb_table_list;
    }
  },
  actions: {
    
  }
});
export default store;
