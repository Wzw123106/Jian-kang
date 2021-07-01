/*
 * @Author: chiLi
 * @Date: 2020-12-15 13:42:29
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
let mysql = require("mysql")

// 设置数据库的配置
let options = {
    host:'localhost',
    // 可选默认 3306
    // port:"3000",
    user:"root",
    password:"123456",
    database:"psychology",
    // 一般情况下固定连某个数据库
}

// 创建与数据库的连接对象
let con = mysql.createConnection(options)

// 建立连接
con.connect((err)=>{
    // 如果建立连接失败
    if(err){
        console.log(err)
    }else{
        console.log("数据库连接成功")
    }
})



function sqlQuery(strSql,arr){
    return new Promise(function(resolve,reject){
        con.query(strSql,arr,(err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
                console.log(results)
            }
        })
    })
}

// 设置成为一个函数导出
function query(sql, param,callFunction) {
      con.query(sql, param, callFunction);    
}


module.exports = query;