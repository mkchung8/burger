const mysql = require("mysql"); 

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "mkchung8",
  database: "burgers_db"
}); 

connection.connect(function(err){
    if (err) {
        console.log(`Error Connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as ID: ${connection.threadId}`);
});

module.exports = connection; 
