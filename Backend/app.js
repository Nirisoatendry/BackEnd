const http = require('http');
const {route} = require ('./route')
const server = http.createServer((req,res)=>{
    const {url,method} = req;
    route(url,method,req,res);
});
server.listen(8080, ()=>{
    console.log('Okey');
})
