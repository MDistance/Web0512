import Mock from "mockjs";
import data from "./data.json"
Mock.mock("/api/seller",{code:0,data:data.seller});
Mock.mock("/api/goods",{code:0,data:data.goods});
Mock.mock("/api/ratings",{code:0,data:data.ratings});