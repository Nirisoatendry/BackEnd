const {Userlogin,UserRegister} = require('./controller');
const route = (url,method,req,res) => {
    if(url =="/login" && method=="POST"){
        Userlogin(req,res);
    }
    else if (url =="/register" && method=="POST"){
        UserRegister(req,res);
    }
    else{
        res.writeHead(404);
        res.write("Not found");
        res.end();
    }
}
module.exports = {route};