const mysql = require('mysql');
const { getDbConfig, setHealth } = require('../../Config/config');

/* istanbul ignore next */
const dbConfig = getDbConfig();
const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) {
    console.log(err);
    setHealth(err, 500);
  }
});

module.exports = connection;
