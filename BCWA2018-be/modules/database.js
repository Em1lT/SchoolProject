'use strict';
const mysql = require('mysql2');

const connect = () => {
    // create the connection to database
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS
    });
    return connection;
};

const selectTitle = (connection,callback, res) => {
    // simple query
    connection.query(
        'SELECT image FROM images',
        (err, results, fields) => {
            if(err) console.log(err);
        },
    );
  };

const insert = (data, connection, callback) => {
    // simple query
    connection.execute(
        'INSERT INTO images (category, title, details,thumbnail, image, original) VALUES (?, ?, ?, ?, ?, ?);', data,
        (err, results, fields) => {
            //   console.log(results); // results contains rows returned by server
            //   // console.log(fields); // fields contains extra meta data about results, if available
            //   console.log(err);
            callback(results);
        },
    );
};
const deleteLast = (data, connection) => {
    connection.execute(
        'DELETE FROM images WHERE MAX(id);'
    );
   
};

module.exports = {
    connect: connect,
    selectTitle: selectTitle,
    insert: insert
}