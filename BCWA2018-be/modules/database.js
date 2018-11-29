'use strict';
const mysql = require('mysql2');
const fs = require('fs');

const connect = () => {
  // create the connection to database
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
  });
  return connection;
};

const select = (connection, callback, res) => {
  // simple query
  connection.query(
      'SELECT * FROM images',
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};

const selectCategory = (connection, find, res) => {
  // simple query
  connection.query(
      'SELECT * FROM images WHERE category = ?;', [find.cat],
      (err,result)=>{
        if(err) console.log(err);
        else {
          console.log("result: "+ JSON.stringify(result)+".........stop");
        }
      },
  );
};

const insert = (data, connection, callback) => {
  // simple query
  connection.execute(
      'INSERT INTO images (category, title, details, thumbnail, image, original, coordinates) VALUES (?, ?, ?, ?, ?, ?, ?);',
      data,
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback();
      },
  );
};
const deleteLast = (connection,data) => {
  console.log(data.id);
  connection.execute(
      'DELETE FROM images WHERE id = ?;',[data.id],
    (err, result) => {
        if(err) console.log("Error: " +err);
        else console.log(result);
      }
  );
};
const change = (data, connection) => {
  // simple query
  connection.execute(
    'UPDATE images SET category = ?, title = ?, details = ? Where id = ?;',[data.cat, data.title, data.details, data.id],
    //'UPDATE images SET category = \''+data.cat+'\',title = \''+data.title+'\', details = \''+data.details+'\' WHERE id = \''+data.id +'\';',
      (err, results, fields) => {
        // console.log(results); // results contains rows returned by server
        // console.log(fields); // fields contains extra meta data about results, if available
        if(err) console.log(err);
      },
  );
};

module.exports = {
  connect: connect,
  select: select,
  insert: insert,
  deleteLast: deleteLast,
  change: change,
  selectCategory: selectCategory
};