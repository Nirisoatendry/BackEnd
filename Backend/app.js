const http = require('http');
const {route} = require ('./route');
//creation d'un serveur
const server = http.createServer((req,res)=>{
    const {url,method} = req;
    route(url,method,req,res);
});

//On ecoute le port du serveur 
server.listen(8081, ()=>{
    console.log('Okey');
})

