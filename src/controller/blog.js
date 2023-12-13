const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '标题A 的content',
            createTime: '134324132',
            author: '张三'
        },
        {
            id: 2,
            title: '标题B',
            content: '标题B 的content',
            createTime: '154456465',
            author: '李四'
        }
    ]
}

module.exports = {
    getList
}