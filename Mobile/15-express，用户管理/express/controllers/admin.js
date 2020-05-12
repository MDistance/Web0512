function admin(req, res){
    res.send('后台首页');
}

function setting(req, res){
    res.send('后台设置页面');
}

module.exports.admin = admin;
module.exports.setting = setting;