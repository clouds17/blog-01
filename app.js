const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')
const queryString = require('querystring')

// 用于处理 post data
const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    })
}


const serverHandle = (req, res) => {
    // 返回JSON格式
    res.setHeader('Content-Type', 'application/json')
    // 解析 query
    req.query = queryString.parse(req.url.split('?')[1])

    // 解析 post data
    getPostData(req).then(postData => {
        req.body = postData

         // 处理 blog 路由
        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(blogData => {
                res.end(
                    JSON.stringify(blogData)
                )
            })
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

    })
   
}

module.exports = serverHandle