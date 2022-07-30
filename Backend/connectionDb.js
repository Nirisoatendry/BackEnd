const mysql = require ('mysql2');

const connexion = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'Nirisoa@123',
    database : 'UserAdmin',
    waitForConnections: true,
});

module.exports = {connexion};
