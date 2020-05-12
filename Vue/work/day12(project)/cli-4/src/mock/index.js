import {seller,goods,ratings} from "./data";
import Mock from "mockjs";

Mock.mock("/api/seller",{code:200, data:seller})
Mock.mock("/api/goods",{code:200, data:goods})
Mock.mock("/api/ratings",{code:200, data:ratings})