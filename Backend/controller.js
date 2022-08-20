const {donnees} = require('./data');
const {headers} = require ('./config');
const {connexion} = require ('./connectionDb');
const expire = 20;

const Userlogin = (req,res) => {
    let Tabchunck = [];
    req.on('data',(chunck)=> {
        Tabchunck.push(chunck);
    });
    req.on('end',()=>{
        let bufferConcat =Buffer.concat(Tabchunck);//manambatra anle buffer
        let lisible = bufferConcat.toString('utf-8');//mamadika anreo buffer ho string
        let dataJson = JSON.parse(lisible);//mamadika string ho JSON 
        // let test = donnees.some((element,index,array)=>{
        //     return dataJson.username == element.username && dataJson.password == element.password;
        // })
        console.log(dataJson);
      let sql= 'SELECT * FROM Users WHERE email = ? AND password = ?';

      connexion.query(
        sql,[dataJson.email,dataJson.password],
        function (err,results){
            // console.log(results.length);
            if(results.length>0){
                res.writeHead(200,{...headers});
                res.write (JSON.stringify({
                            success : true,
                            data :{...results[0]}
                        }))
                sql = 'insert into session (createAt,expireAt,etat,userId) values (current_Timestamp(),date_add(current_Timestamp(),interval ? second),true,?)';
                connexion.query(sql,
                    [expire,results[0].idUsers],(err) =>{
                        if(err) throw err;
                    }
                    )
                 res.end();
            }
            else{
                res.writeHead(200,{...headers});
                res.write(JSON.stringify({
                    success : false,
                    data  : { }
                }))
                res.end()
            }
        }
      )
    
        // if(test){
        //     res.writeHead(200,{...headers});
        //     res.write (JSON.stringify({
        //         success : true,
        //         data :{...dataJson}
        //     }))
        //     //mamadika anle dataJson ho Json
        //     res.end();
        // }else{
        //     res.writeHead(200,{...headers});
        //     res.write(JSON.stringify({
        //         success : false,
        //         data : {}
        //     }))
        //     res.end();
        // }
    })
    
}

const UserRegister = (req,res) => {
    let Tab = [];
    req.on('data', (chunck)=>{
        Tab.push(chunck);
    })
    req.on('end', ()=>{
        let bufferConcat = Buffer.concat(Tab);//manambatra anle buffer
        let vakable = bufferConcat.toString('utf-8');//mamadika anle buffer ho string
        let dataJson = JSON.parse(vakable); //maamdika anle string ho objet
        let sql = 'INSERT INTO Users (lastname,firstname,email,groupe,password,repassword) VALUES (?,?,?,?,?,?)';
        let values = [dataJson.lastname,dataJson.firstname,dataJson.email,dataJson.group,dataJson.password,dataJson.Password] ;
        connexion.query(sql,values,function(err,result){
            if(err) throw err;
            console.log(result);
            res.writeHead(201,{...headers});
            res.write(JSON.stringify({success:true}));
            res.end();
        })

        
        console.log(dataJson);
    })
}
module.exports = {Userlogin,UserRegister};