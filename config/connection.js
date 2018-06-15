// Set up MySQL connection.
var mysql = require("mysql");
var connection;
// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });


if ('mysql://qh7256ttz3n0o3on:ww7uzdsauqt6k72m@g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s3xxp8v6jcmv6x5h') {
  connection = mysql.createConnection('mysql://qh7256ttz3n0o3on:ww7uzdsauqt6k72m@g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s3xxp8v6jcmv6x5h');
  console.log(JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "",
      database: "burgers_db"
  });
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//console.log(connection);
// Export connection for our ORM to use.
module.exports = connection;
