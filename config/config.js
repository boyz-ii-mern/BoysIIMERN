var mysql = require("mysql");

var config;

require("dotenv").config();


if (process.env.JAWSDB_URL) {
  config = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  config = mysql.createConnection({
    host: "bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "i291ka2f45eh4bh6",
    password: process.env.DB_PASSWORD,
    database: "h86epq3r5hnnp8m7"
  });
}



config.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + config.threadId);
  });

module.exports = config;
