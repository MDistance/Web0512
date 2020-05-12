//由search组件上的一个input触发的
//在input中实时输入数据的时候 同步仓库中的serachName
export const ChaneSerachName = "chaneSerachName";
//由search组件上的一个button触发的
//在点击button后 我们会在同名的action中发出ajax请求 拿到数据后 同步仓库中的list
export const ChangeList = "changeList";
export const Reqing = "reqing";
export const ReqSuccessHasData = "reqSuccessHasData";
export const ReqSuccessHasNoData = "reqSuccessHasNoData";

