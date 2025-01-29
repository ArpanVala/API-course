const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/' && req.method === 'GET'){
        res.statusCode = 200;
        console.log(res.statusCode)
        res.end('<H1>Welcome to our home page</h1>')
    
    }
})
server.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})