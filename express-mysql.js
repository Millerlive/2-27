// npm i express mysql
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

// 创建MySql连接
const connection = mysql.createConnection({
  host: "bqsxjf2zgwcvnap1tuut-mysql.services.clever-cloud.com",
  user: "ujqvtqll8lirmdgr",
  password: "SP8d7lExEEq75G48gzik",
  database: "bqsxjf2zgwcvnap1tuut",
});

connection.connect((err) => {
  if (err) {
    console.log("Error", err.stack);
  } else {
    console.log("连接成功");
  }
});

const app = express();
app.use(cors())
app.get("/", (req, res) => {
  connection.query("SELECT * FROM emp", (err, result) => {
    if (err) {
      console.log("Error", err.stack);
      return;
    }

    // res.send('mysql-express')
    res.send(result);
  });
});
app.get("/api", (req, res) => {
  // ? 为占位符
  // 查找id = 3 name = Amy
  connection.query(
    "SELECT * FROM emp where id = ? && name = ?",
    [3, "Amy"],
    (err, result) => {
      // connection.query('SELECT * FROM emp where id = ?',2,(err,result)=>{
      if (err) {
        console.log("Error", err.stack);
        return;
      }

      // res.send('mysql-express')
      res.send(result);
    }
  );
});
app.listen(9000, () => {
  console.log("listening on 9000");
});
