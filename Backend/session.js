const jwt = require ('jsonwebtoken');
//sign : crypte le payload
let jeton = jwt.sign({nom:'tendry'},'azertyuioplkj',{algorithm:'HS256',expiresIn:'15'});
//!sign = verify : 
const decode = jwt.verify(jeton,'azertyuioplkj');
console.log(decode);
