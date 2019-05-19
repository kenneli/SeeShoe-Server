const mysql = require('mysql');
const dbConnect = mysql.createPool({
    host: 'remotemysql.com',
    user: 'TO0RvLZSLO',
    password: 'JOLwYAILWY',
    database: 'TO0RvLZSLO'
});

module.exports = dbConnect;
