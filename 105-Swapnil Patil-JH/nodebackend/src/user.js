const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "db1",
};

async function checkconnection() {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  console.log("connection done");
  await Connection.endAsync();
}

let adduser = async(user) => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  let sql = `insert into stock (message) values(?)`;
  Connection.queryAsync(sql, [user.message]);
  console.log("data added");
  await Connection.endAsync();
};

let selectuser = async() => {
  const Connection = mysql.createConnection(dbinfo);
  await Connection.connectAsync();
  let sql = `select * from stock`;
  let list = await Connection.queryAsync(sql, []);
  console.log("databse showed");
  await Connection.endAsync();
  return list;
};

checkconnection();
module.exports={adduser,selectuser};
