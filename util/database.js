const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-complete', 'root', 'Vivek@2002', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;



// connecting sql database
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Vivek@2002'
// });

// module.exports = pool.promise();
