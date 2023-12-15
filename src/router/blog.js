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
        const data = getList(author, keyword)
        return new successModel(data, '成功')
        
    }
    // 获取博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const result = getDetail(id)
        return new successModel(result, '成功')
    }
    
    // 新建一篇博客
    if (method === 'POST' && path === '/api/blog/new') {
        const result = newBlog(req.body)
        return new successModel(result, '创建新博客成功')
    }
    // 更新一篇博客
    if (method === 'POST' && path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        console.log(id, req.body)
        return new successModel(result, '更新成功')
    }
    // 删除一篇博客
    if (method === 'POST' && path === '/api/blog/del') {
        const result = delBlog(id)
        if (result) {
            return new successModel('删除成功')
        } else {
            return new errorModel('删除失败')
        }
    }
}

module.exports = handleBlogRouter