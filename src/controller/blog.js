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

const getDetail = (id) => {
    return {
        id: 2,
        title: '标题B',
        content: '标题B 的content',
        createTime: '154456465',
        author: '李四'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象,包含 title content 属性
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    // id 就是需要更新的博客 id
    // blogData 是一个博客对象,包含 title content 属性

    return true
}

const delBlog = (id) => {
    // id就是要删除的博客id
    return false
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}