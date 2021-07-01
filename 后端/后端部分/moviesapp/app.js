/*
 * @Author: chiLi
 * @Date: 2020-12-31 17:12:36
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */

// 引用模块
var express = require('express');
let query = require("./lcMysql")
var app = express();


// 跨域模块
let cors = require('cors');
const { send } = require('process');

// 引入copkie (状态模块)
let cookieParser = require('cookie-parser')


const bodyParser = require('body-parser');
//对body-parser进行配置
app.use( bodyParser.urlencoded({extended: true}) )
//设置完毕之后，会在req对象上面新增一个req.body的一个对象


// 解析 application/x-www-form-urlencoded 请求体
app.use(express.urlencoded({
  extended: true
}));

// 解析 application/json 请求体
app.use(express.json());

// 解决跨域 中间件
app.use(cors());

// cookie 中间件
app.use(cookieParser())

app.use(require('./util/tonkenMiddleware'))

// ————————————————————————————————————————————————————————————————————————————————
// 教师端登录接口
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let sqlStr = "SELECT * FROM teacher WHERE username = ? AND password = ?"
      query(sqlStr,[username,password],(err,results)=>{
          console.log(results)
            if(results.length !== 0){
               res.json(results)
            }else{
              res.send("错误")
            }
        })
  })

  // 教师端注册接口
app.post('/zhuche',(req,res)=>{
    let username = req.body.username
    let password = req.body.password;
    let arr = [username,password]

    let sqlStr = "INSERT INTO teacher (username,password) VALUES (?,?)"
    let myStr = "SELECT * from teacher where username = ?"

    query(myStr,username,(err,results)=>{
      // 数据库查询当前名字是否存在,如果存在就不允许注册,如果不存在就注册成功
        if(results.length == 0){
          query(sqlStr,arr,(err,ress)=>{
            console.log("添加成功")
            res.json(ress)
          })
        }else{
            //返回存在的数据 
            res.json(results)
        }
    })
  })

  // 教师端获取学生登录信息统计数量接口
app.post('/tongji',(req,res)=>{
    let sqlStr = "SELECT * FROM student "
    query(sqlStr,(err,results)=>{
       res.json(results)
      //  console.log(req.cookies)
    })
})

  // 教师端学生评测人数端口
app.post('/pcs',(rea,res)=>{
  let sqlStr = "SELECT * FROM  techengji"
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

  // 教师端添加试题端口
app.post('/add',(req,res)=>{
  let title = req.body.title
  let yes = req.body.yes
  let tes = req.body.tes
  let no = req.body.no
  let arr = [title,yes,tes,no]
  let sum = [];
  let sqlStr = "INSERT INTO shiti (title,yes,tes,no) VALUES (?,?,?,?)"
  let sqlStrs = 'SELECT * from shiti where title = ?'
  query(sqlStrs,title,(err,results)=>{
    if(results.length == 0 ){
      query(sqlStr,arr,(err,resultss)=>{
        console.log("添加成功")
        res.json(resultss)
      })
    }else{
      console.log("已存在")
      res.json(sum)
    }
  })
})

  // 教师端查看成绩端口
app.get('/chengji',(req,res)=>{
  let sqlStrs = 'SELECT * from techengji'
  query(sqlStrs,(err,results)=>{
    res.json(results)
  })
})

  // 教师端成绩搜索查询接口
app.post('/sousuo',(req,res)=>{
  let sao = req.body.sao
  let sqlStr = 'SELECT * from techengji where name = ?'
  query(sqlStr,sao,(err,results)=>{
    res.json(results)
  })
})

// 教师端管理试题接口
// 渲染
app.post('/xiugai',(req,res)=>{
  let sqlStr = 'SELECT * from shiti '
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})


// 删除
app.post('/shanchu',(req,res)=>{
  let delect = req.body.delect
  let sqlStr = ' DELETE FROM shiti WHERE id=?'
  query(sqlStr,delect,(err,results)=>{
     res.json([{
       sum:'删除成功'
     }])
  })
})

// 编辑
app.post('/bianji',(req,res)=>{
  // 题目
  let title = req.body.title;
  // 分值
  let yes = req.body.yes;
  let tes = req.body.tes;
  let no = req.body.no;
  let id = req.body.id;
  let arr = [title,yes,tes,no,id]
  let strSQL = 'UPDATE shiti SET title = ? , yes = ?,tes = ?, no = ?  WHERE id = ?'
  query(strSQL,arr,(err,results)=>{
    res.json([{
      sum:"修改成功"
    }])
  })
})


// 学生信息渲染
app.post('/stuxu',(req,res)=>{
  let strSQL = 'SELECT * from student'
  query(strSQL,(err,restults)=>{
    res.json(restults)
  })
})

// 学生信息搜索查询接口
app.post('/stus',(req,res)=>{
  let sao = req.body.sao
  let sqlStr = 'SELECT * from  student  where name = ? '
  query(sqlStr,sao,(err,results)=>{
    res.json(results)
  })
})

// 教师端题库数量统计接口
app.post('/shitis',(req,res)=>{
  let sqlStr = 'SELECT * from  shiti'
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})




// -------------------------------------------------------------------------------------

// 管理员端学生信息渲染
app.post('/bostu',(req,res)=>{
  let sqlStr = 'SELECT * from  student'
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

// 管理员端学生信息搜索查询接口
app.post('/bostuso',(req,res)=>{
  let stu = req.body.stu
  let sqlStr = 'SELECT * from  student  where name = ? '
  query(sqlStr,stu,(err,results)=>{
    res.json(results)
  })
})

// 管理员端学生信息删除接口
app.post('/bostubsa',(req,res)=>{
  let bosdelect = req.body.bosdelect
  let sqlStr = ' DELETE FROM student WHERE id=?'
  query(sqlStr,bosdelect,(err,results)=>{
     res.json([{
       sum:'删除成功'
     }])
  })
})

// 管理员端学生信息编辑接口
app.post('/bostub',(req,res)=>{
    let name = req.body.name
    let sex = req.body.sex
    let password = req.body.password
    let id = req.body.id;
    let arr = [name,sex,password,id,]
    let strSQL = 'UPDATE student SET name = ?,sex = ?, password= ? WHERE id = ? '
    query(strSQL,arr,(err,results)=>{
      res.json([{
        sum:"修改成功"
      }])
    })
})

// 管理员端学生添加接口
app.post('/bostuadd',(req,res)=>{
  let id = req.body.id
  let name= req.body.name
  let sex = req.body.sex
  let password= req.body.password
  let arr = [id,name,sex,password]
  let sum = [{
    ok:"存在"
  }]
  let sqlStr = "INSERT INTO student (id,name,sex,password) VALUES (?,?,?,?)"

  let sqlStrs = 'SELECT * from student where id = ?'
  query(sqlStrs,id,(err,results)=>{
    if(results.length == 0 ){
      query(sqlStr,arr,(err,resultss)=>{
        console.log("添加成功")
        res.json(resultss)
      })
    }else{
      console.log("已存在")
      res.json(sum)
    }
  })
})

//-------------------------------------------------------------------------------------


// 管理员端教师信息渲染
app.post('/bote',(req,res)=>{
  let sqlStr = 'SELECT * from  teacher'
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

// 管理员端教师信息搜索查询接口
app.post('/botes',(req,res)=>{
  let stu = req.body.stu
  let sqlStr = 'SELECT * from  teacher where username = ? '
  query(sqlStr,stu,(err,results)=>{
    res.json(results)
  })
})

// 管理员端教师信息删除查询接口
app.post('/bostesc',(req,res)=>{
  let bosdelect = req.body.bosdelect
  let sqlStr = ' DELETE FROM teacher WHERE id=?'
  query(sqlStr,bosdelect,(err,results)=>{
     res.json([{
       sum:'删除成功'
     }])
  })
})

// 管理员端教师信息编辑接口
app.post('/bostebj',(req,res)=>{
  let username = req.body.username
  let password = req.body.password
  let id = req.body.id;
  let arr = [username,password,id,]
  let strSQL = 'UPDATE teacher SET username = ?,password = ? WHERE id = ? '
  query(strSQL,arr,(err,results)=>{
    res.json([{
      sum:"修改成功"
    }])
  })
})

// 管理员端教师信息添加接口
app.post('/boteadd',(req,res)=>{
  let id = req.body.id
  let username= req.body.username
  let password= req.body.password
  let arr = [id,username,password]
  let sum = [{
    ok:"存在"
  }]
  let sqlStr = "INSERT INTO teacher (id,username,password) VALUES (?,?,?)"

  let sqlStrs = 'SELECT * from teacher where id = ?'
  query(sqlStrs,id,(err,results)=>{
    if(results.length == 0 ){
      query(sqlStr,arr,(err,resultss)=>{
        console.log("添加成功")
        res.json(resultss)
      })
    }else{
      console.log("已存在")
      res.json(sum)
    }
  })
})









// ----------------------------------------------------

// 管理员端评测信息管理
app.post('/bopc',(req,res)=>{
  let sqlStr = 'SELECT * from  pinces'
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

// 管理员端评测信息搜索查询接口
app.post('/bopcs',(req,res)=>{
  let stu = req.body.stu
  let sqlStr = 'SELECT * from  pinces where name = ? '
  query(sqlStr,stu,(err,results)=>{
    res.json(results)
  })
})

// 管理员端评测信息删除查询接口
app.post('/bopcsc',(req,res)=>{
  let bosdelect = req.body.bosdelect
  let sqlStr = ' DELETE FROM pinces WHERE id=?'
  query(sqlStr,bosdelect,(err,results)=>{
     res.json([{
       sum:'删除成功'
     }])
  })
})

// 管理员端评测信息编辑接口
app.post('/bopcbj',(req,res)=>{
  let name = req.body.name
  let sex = req.body.sex
  let id = req.body.id
  let arr = [name,sex,id,]
  let strSQL = 'UPDATE pinces SET name = ?,sex = ? WHERE id = ? '
  query(strSQL,arr,(err,results)=>{
    res.json([{
      sum:"修改成功"
    }])
  })
})

// 管理员端评测信息添加接口
app.post('/bopctjs',(req,res)=>{
  let id = req.body.id
  let name= req.body.name
  let sex= req.body.sex
  let arr = [id,name,sex]
  let sum = [{
    ok:"存在"
  }]
  let sqlStr = "INSERT INTO pinces (id,name,sex) VALUES (?,?,?)"

  let sqlStrs = 'SELECT * from pinces where id = ?'
  query(sqlStrs,id,(err,results)=>{
    if(results.length == 0 ){
      query(sqlStr,arr,(err,resultss)=>{
        console.log("添加成功")
        res.json(resultss)
      })
    }else{
      console.log("已存在")
      res.json(sum)
    }
  })
})








// -----------------------------------------------------------------------

// 管理员端学生成绩信息管理
app.post('/bocj',(req,res)=>{
  let sqlStr = 'SELECT * from  techengji'
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

// 管理员端学生成绩信息删除接口
app.post('/bocjsc',(req,res)=>{
  let bosdelect = req.body.bosdelect
  let sqlStr = ' DELETE FROM techengji WHERE id=?'
  query(sqlStr,bosdelect,(err,results)=>{
     res.json([{
       sum:'删除成功'
     }])
  })
})


// 管理员端学生成绩信息搜索接口
app.post('/bocjss',(req,res)=>{
  let stu = req.body.stu
  let sqlStr = 'SELECT * from  techengji  where name = ? '
  query(sqlStr,stu,(err,results)=>{
    res.json(results)
  })
})


// 管理员端学生成绩信息编辑接口
app.post('/bocjbj',(req,res)=>{
  let name = req.body.name
  let gender = req.body.gender
  let fuder = req.body.fuder
  let id = req.body.id;
  let arr = [name,gender,fuder,id]
  let strSQL = 'UPDATE techengji  SET name = ?,gender = ?,fuder = ? WHERE id = ? '
  query(strSQL,arr,(err,results)=>{
      res.json([{
      sum:"修改成功"
    }])
  })
})


// 管理员端学生成绩信息添加接口
app.post('/bopctj',(req,res)=>{
  let id = req.body.id
  let name= req.body.name
  let gender = req.body.gender
  let fuder = req.body.fuder
  let arr = [id,name,gender,fuder]
  let sum = [{
    ok:"存在"
  }]
  let sqlStr = "INSERT INTO techengji (id,name,gender,fuder) VALUES (?,?,?,?)"

  let sqlStrs = 'SELECT * from techengji where id = ?'
  query(sqlStrs,id,(err,results)=>{
    if(results.length == 0 ){
      query(sqlStr,arr,(err,resultss)=>{
        console.log("添加成功")
        res.json(resultss)
      })
    }else{
      console.log("已存在")
      res.json(sum)
    }
  })
})

// -----------------------------------------------------------------



// 管理员端试题信息管理
app.post('/bost',(req,res)=>{
  let sqlStr = 'SELECT * from shiti '
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

// 管理员端添加试题端口
  app.post('/bostadd',(req,res)=>{
    let title = req.body.title
    let yes = req.body.yes
    let tes = req.body.tes
    let no = req.body.no
    let arr = [title,yes,tes,no]
    let sum = [{
      ok:"已存在"
    }];
    let sqlStr = "INSERT INTO shiti (title,yes,tes,no) VALUES (?,?,?,?)"
    let sqlStrs = 'SELECT * from shiti where title = ?'
    query(sqlStrs,title,(err,results)=>{
      if(results.length == 0 ){
        query(sqlStr,arr,(err,resultss)=>{
          console.log("添加成功")
          res.json(resultss)
        })
      }else{
        console.log("已存在")
        res.json(sum)
      }
    })
  })

 // 管理员端试题删除端口
app.post('/bostsc',(req,res)=>{
  let delect = req.body.delect
  let sqlStr = ' DELETE FROM shiti WHERE id=?'
  query(sqlStr,delect,(err,results)=>{
     res.json([{
       sum:'删除成功'
     }])
  })
})
  
//  管理员端试题编辑端口
app.post('/bosstbj',(req,res)=>{
  // 题目
  let title = req.body.title;
  // 分值
  let yes = req.body.yes;
  let tes = req.body.tes;
  let no = req.body.no;
  let id = req.body.id;
  let arr = [title,yes,tes,no,id]
  let strSQL = 'UPDATE shiti SET title = ? , yes = ?,tes = ?, no = ?  WHERE id = ?'
  query(strSQL,arr,(err,results)=>{
    res.json([{
      sum:"修改成功"
    }])
  })
})

// 管理员端学生成绩信息搜索接口
app.post('/bosstss',(req,res)=>{
  let stu = req.body.stu
  let sqlStr = 'SELECT * from  shiti where id = ? '
  query(sqlStr,stu,(err,results)=>{
    res.json(results)
  })
})


// 管理员端登录接口
app.post('/bossDen', (req, res) => {
  let name = req.body.name;
  let password = req.body.password;

  let sqlStr = "SELECT * FROM boss WHERE name = ? AND password = ?"
    query(sqlStr,[name,password],(err,results)=>{
        console.log(results)
          if(results.length !== 0){
            res.json(results)
          }else{
            res.send("错误")
          }
      })
})

// ------------------------------------------------------------------------


//  学生端试题渲染接口
app.post('/stust',(req,res)=>{
  let sqlStr = 'SELECT * from shiti '
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

// 学生端成绩提交接口
app.post('/stucjtj',(req,res)=>{
  let name = req.body.name
  let gender = req.body.gender
  let fuder = req.body.fuder
  let arr = [name,gender,fuder]
  let sqlStr = "INSERT INTO techengji (name,gender,fuder) VALUES (?,?,?)"
  query(sqlStr,arr,(err,results)=>{
      res.json(results)
  })
})



app.post('/whoami',(req,res)=>{
  if (req.token.UserInfo) {
    const info = req.token.UserInfo;
    console.log(info);
    res.json(info)
    res.send(info)
  } else {
    res.status(403).send(null);
      return;
  }
})



const jwt = require('./util/jwt');
// 学生端登录接口
app.post('/studenlu', (req, res) => {
  let name = req.body.name;
  let password = req.body.password;

  let sqlStr = "SELECT * FROM student WHERE name = ? AND password = ?"
    query(sqlStr,[name,password],(err,results)=>{
        console.log(results)
          if(results.length !== 0){
            jwt.publish(res,undefined,{
              name:results[0].name,
              password:results[0].sex,
              // sex:results[0].sex
            })
          
            res.json(results)
            res.send();
          }else{
            res.status(404)
            res.send("错误")
          }
      })

})



// 学生端注册接口
app.post("/stuzhuces",(req,res)=>{
  let name = req.body.name
  let sex = req.body.sex
  let password = req.body.password;
  let arr = [name,sex,password]

  let sqlStr = "INSERT INTO student (name,sex,password) VALUES (?,?,?)"
  let myStr = "SELECT * from  student  where name = ?"

  query(myStr,name,(err,results)=>{
    // 数据库查询当前名字是否存在,如果存在就不允许注册,如果不存在就注册成功
      if(results.length == 0){
        query(sqlStr,arr,(err,ress)=>{
          console.log("添加成功")
          res.json(ress)
        })
      }else{
          //返回存在的数据 
          res.json("已存在")
      }
  })
})

// 学生端修改个人资料端口
app.post('/stxg',(req,res)=>{
   let name = req.body.name
   let sex = req.body.sex
   let password = req.body.password
   let id = req.body.id

   let arr = [name,sex,password,id]

   let strSQL = 'UPDATE student SET name = ?,sex = ?,password = ?  WHERE id = ?'
   query(strSQL,arr,(err,results)=>{
    res.json([{
      sum:"修改成功"
    }])
  })

})

// 学生端查看心理成绩端口
app.post('/stuck',(req,res)=>{
  let name = req.body.name
  let sqlStr = 'SELECT * from  techengji  where name = ?'
  query(sqlStr,name,(err,results)=>{
    res.json(results)
  })
})

// 学生端评论渲染端口
app.post('/stupl',(req,res)=>{
  let sqlStr = 'SELECT * from  pl'
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})

// 学生评论添加端口
app.post('/stupladd',(req,res)=>{
   let name = req.body.name
   let sj = req.body.sj
   let title = req.body.title
   let arr = [name,sj,title]

   let sqlStr = "INSERT INTO pl (name,sj,title) VALUES (?,?,?)"
   query(sqlStr,arr,(err,ress)=>{
    
    res.json("评论成功")
  })


})



// 学生端回复渲染端口
app.post('/stuhf',(req,res)=>{
  let sqlStr = 'SELECT * from  hf'
  query(sqlStr,(err,results)=>{
    res.json(results)
  })
})



// 学生回复添加端口
app.post('/stuhfadd',(req,res)=>{
  let name = req.body.name
  let sj = req.body.sj
  let title = req.body.title
  let arr = [name,sj,title]

  let sqlStr = "INSERT INTO hf (name,sj,title) VALUES (?,?,?)"
  query(sqlStr,arr,(err,ress)=>{
   
   res.json("回复成功")
 })


})
module.exports = app;


