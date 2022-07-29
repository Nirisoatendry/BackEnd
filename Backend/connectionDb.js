const mysql = require ('mysql2');

const connexion = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'Users'
});

module.exports = {connexion};
