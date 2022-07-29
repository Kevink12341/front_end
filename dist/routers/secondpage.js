import express from "express";
import mysql from "mysql";
const router2 = express.Router();
const dbinfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'cbsdata',
};
const connection = mysql.createConnection(dbinfo);
connection.connect(function (err) {
    if (err)
        console.error(err);
    console.log("Connected to DB");
});
let sqlStr = `SELECT tableName FROM cbs_tables`;
connection.query(sqlStr, function (err, res, fields) {
    if (err)
        console.error(err);
    let resultArr = [];
    for (let i = 0; i < res.length; i++) {
        resultArr.push(res[i].tableName);
    }
    console.log(resultArr);
});
let testvar = " abcd";
router2.get('/', (req, res) => {
    console.log("ok for now");
    let list_options = " abcd";
    res.render('../views/dropdown.ejs', { list_options: testvar });
});
export { router2 };
//# sourceMappingURL=secondpage.js.map