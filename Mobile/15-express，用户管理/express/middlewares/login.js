function  login(req, res, next){
    if(req.query.admin == 1){
        next();
    }else{
        res.status(403);
        res.send('no access ');
    }
}

module.exports = login;