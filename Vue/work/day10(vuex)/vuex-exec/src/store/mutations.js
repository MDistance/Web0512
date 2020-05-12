import {ChaneSerachName,ChangeList,Reqing,
  ReqSuccessHasData,ReqSuccessHasNoData} from "@/store/mutations_types.js";
export default {
  [ChaneSerachName](state,serachName){
    state.serachName = serachName;
  },
  [ChangeList](state,list){
    state.list = list;
  },
  [Reqing](state){
    state.showMsg = false;
    state.showLoading = true;
    state.showNoBody = false;
  },
  [ReqSuccessHasData](state){
    state.showMsg = false;
    state.showLoading = false;
    state.showNoBody = false;
  },
  [ReqSuccessHasNoData](state){
    state.showMsg = false;
    state.showLoading = false;
    state.showNoBody = true;
  }
}
