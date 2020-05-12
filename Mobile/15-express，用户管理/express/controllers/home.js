/**
 * 前台功能
 */
function home(req, res){
    res.send('网站首页');
}

function activity(req, res){
    res.send('活动页面');
}

module.exports.home = home;
module.exports.activity = activity;
