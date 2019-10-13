let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'f6shm2865y8etcbc',
    password: 'zaew4qyy5ivp563v',
    database: 'jcod0su6rh3unvza'
});

connection.connect();

module.exports = connection;