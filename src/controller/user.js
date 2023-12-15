const login = (username, password) => {
    // 先使用假数据
    if (username === 'xiaohuang' && password === '123456') {
        return true
    }
    return false
}

module.exports = {
    login
}