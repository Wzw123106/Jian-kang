/*
 * @Author: chiLi
 * @Date: 2021-02-05 14:14:14
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */

const jwt = require('./jwt');

module.exports = (req, res, next) => {

    if(req.originalUrl === '/whoami'){
        const result = jwt.verify(req);
        if (result) {
            req.token = {}
            req.token.UserInfo = {
                name: result.name,
                password: result.password
            };
            next();
        } else {
            res.status(403).send("请登录后访问！");
            return;
        }
    }else{
        next();
    }

    
}