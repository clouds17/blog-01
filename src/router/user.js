const { login } = require('../controller/user.js')
const { successModel, errorModel } = require('../model/resModel.js')
const handleUserRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    if (method === 'POST' && path === '/api/user/login') {
        const result = login(req.body.username, req.body.password)
        if (result) {
            return new successModel('登录成功')
        } else {
            return new errorModel('登录失败')
        }
    }
}

module.exports = handleUserRouter