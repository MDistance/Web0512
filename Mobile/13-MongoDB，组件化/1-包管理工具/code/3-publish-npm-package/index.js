/**
 * 生成随机数的功能
 */
function rand(m,n){
    return Math.floor(Math.random()*(n-m+1))+m;
}

//对外暴露
module.exports = rand;