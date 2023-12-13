const http = require('http')
const serverHandle = require('../app.js')
const PORT = 8000

const server = http.createServer(serverHandle)


server.listen(PORT, () => {
    console.log('服务器启动啦')
})
