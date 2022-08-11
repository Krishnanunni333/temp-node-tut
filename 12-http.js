const http = require('http')


const server = http.createServer((req, res) =>{
    if(req.url === '/'){
    res.end('Welcome to our home psge')
}
})


server.listen(5000)