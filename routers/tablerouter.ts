import express  from "express";
import mysql from "mysql";

const tablerouter = express.Router()

let mysqlCredentials = {
    host: "localhost",
    user: "root",
    password: "",
    database: "cbsdata",
    port: 3306,
}

let Connection = mysql.createConnection(mysqlCredentials)

Connection.query("", (req,res)=>{

})

let tablename = 'O83878NED';
let limit_sql = 50
let sqlstr = `Select * from ${tablename} limit ${limit_sql}`

let Data = new Promise((resolve, reject)  => {
    Connection.query(sqlstr, (err,res)=> {
        if (err) console.error(err)
        resolve(res)
    })
})

tablerouter.get('/:tablename', async (req,res) => {
    let tableData = await Data
    let mySQLTableName = tablename

    res.render('../views/Tables/table.ejs' , {tablename: mySQLTableName, tabledata: tableData})

})
export {tablerouter}