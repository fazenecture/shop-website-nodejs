// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = () => {
  MongoClient.connect(
    "mongodb+srv://new-user-01:Jaimatadi@cluster0.3optd.mongodb.net/Shop?retryWrites=true&w=majority"
  )
    .then(client => {
      console.log('Connected');
      _db = client.db();
    })
    .catch((err) => {console.log(err)});
  
};

const getDb = () =>{
  if (_db) {
    return _db;
  }
  throw 'No Database Found';
}



exports.mongoConnect = mongoConnect;
exports.db = getDb;


