const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog.js')
const { successModel, errorModel } = require('../model/resModel.js')

const handleBlogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    const id = req.query.id

    // 获取博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const result = getList(author, keyword)
        return result.then(listData => {
            return new successModel(listData, '成功')
        })
    }
    // 获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const result = getDetail(id)
        return result.then(data => {
            return new successModel(data, '成功')
        })
    }
    
    // 新建一篇博客
    if (method === 'POST' && path === '/api/blog/new') {
        // 假数据
        req.body.author = 'xiaohuang'
        const result = newBlog(req.body)
        return result.then(data => {
            return new successModel(data, '创建新博客成功')
        })
    }
    // 更新一篇博客
    if (method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        return result.then(val => {
            if (val) {
                return new successModel('更新博客成功')
            } else {
                return new successModel('更新博客失败')
            }
        })
    }
    // 删除一篇博客
    if (method === 'POST' && path === '/api/blog/del') {
        // 假数据
        const author = 'xiaohuang'
        const result = delBlog(id)
        return result.then(val => {
            if (val) {
                return new successModel('删除成功')
            } else {
                return new errorModel('删除失败')
            }
        })
        
    }
}

module.exports = handleBlogRouter