const http = require('http');
const {route} = require ('./route')
const server = http.createServer((req,res)=>{
    const {url,method} = req;
    route(url,method,req,res);
});
server.listen(8081, ()=>{
    console.log('Okey');
})
