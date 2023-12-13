const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')
const queryString = require('querystring')

const serverHandle = (req, res) => {
    // 返回JSON格式
    res.setHeader('Content-Type', 'application/json')

    req.query = queryString.parse(req.url.split('?')[1])

    // 处理 blog 路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    // 处理 user 路由
    const userData = handleUserRouter(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }

    // 未找到路由,返回404
    res.writeHead(404, { "Content-Type": "text/plain" })
    res.write("404 Not Found\n")
    res.end()
}

module.exports = serverHandle