const mysql = require('mysql')
const { MYSQL_CONFIG } = require('../config/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONFIG)

// 开始连接
con.connect()

// 统一执行 sql 函数
function exec(sql) {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
}

module.exports = {
    exec
}