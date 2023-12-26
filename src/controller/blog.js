const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    const sql = `select * from blogs where 1=1`
    if (author) {
        sql += `and author='${author}'`
    }
    if (keyword) {
        sql += `and title link %${keyword}%`
    }
    sql += 'order by createTime desc;'

    return exec(sql)
}

const getDetail = (id) => {
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象,包含 title content author 属性
    const { title, content, author } = blogData
    const createTime = Date.now()
    const sql = `insert into blogs (title, content, author, createTmie) values ('${title}', '${content}', '${author}', '${createTime}')`

    return exec(sql).then(insertData => {
        console.log('insertData is', insertData)
        return {
            id: insertData.insertId
        }
    })

}

const updateBlog = (id, blogData = {}) => {
    // id 就是需要更新的博客 id
    // blogData 是一个博客对象,包含 title content 属性

    const { title, content } = blogData
    const updateTime = Date.now()
    const sql = `update blogs set title='${title}', content='${content}' where id='${id}'`
    return exec(sql).then(updateData => {
        console.log('updateData is', updateData)
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
    return true
}

const delBlog = (id, author) => {
    // id就是要删除的博客id
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(deleteDate => {
        console.log('deleteData is', deleteDate)
        if (deleteDate.affectedRows > 0) {
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}