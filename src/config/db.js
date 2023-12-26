const env = process.env.NODE_ENV

let MYSQL_CONFIG = null

if (env === 'development') {
    MYSQL_CONFIG = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '18450130331.Hx',
        database: 'myblog'
    }
}

if (env === 'production') {
    MYSQL_CONFIG = {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '18450130331.Hx',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONFIG
}