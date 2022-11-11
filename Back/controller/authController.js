const data = require('../Database/db');
const login = (req,res) => {
    const {email,password} = req.body;
   const user =  data.find((element)=> {
        return email==element.email && password==element.password;
    })
    if(user){
        res.send({
            success: true,
            data : user,
        })
    }
    else{
        res.send({
            success : false,
            message : "Utilisateur introuvable",
        })
    }
    console.log(req.body);
    res.end();
}
const register = (req,res) => {
    res.send('Coucouuuuu MIckael');
    res.end();
}
module.exports= {login,register}