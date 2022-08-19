import express  from "express";
import mysql from "mysql";
import ejs, { promiseImpl } from "ejs";

type response = Array<tablenameObj>

interface tablenameObj  {
    tableName : string
}


const router2 = express.Router()
const tablerouter2 = express.Router()

const dbinfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'cbsdata',
}
const connection = mysql.createConnection(dbinfo)

connection.connect(function(err){
    if (err) console.error(err);
    console.log("Connected to DB")
})

let sqlStr = `SELECT tableName FROM cbs_tables`
let cbs_tables_promise = new Promise((resolve,reject)=> {
    connection.query(sqlStr, function(err,res:response, fields){
        if (err) console.error(err);
        let resultArr = []
        for (let i=0;i<res.length;i++){
            resultArr.push(res[i].tableName)
        }
        resolve(resultArr)
})
})


type datatypes = Array<within_data>
interface within_data {
    Id: number,
    [x:string]: number | string | undefined,
}

let mysqlCredentials = {
    host: "localhost",
    user: "root",
    password: "",
    database: "cbsdata",
    port: 3306,
}

let myconnection = mysql.createConnection(mysqlCredentials)


let tablename = 'O83878NED';
let limit_sql = 50
let sqlstr = `Select * from ${tablename} limit ${limit_sql}`

let data = new Promise((resolve, reject)  => {
    myconnection.query(sqlstr, (err,res)=> {
        if (err) console.error(err)
        resolve(res as datatypes)
    })
})

function fetchData (query: string) : Promise<datatypes> {
    return new Promise((resolve, reject)  => {
        myconnection.query(sqlstr, (err,res)=> {
            if (err) console.error(err)
            resolve(res)
        })
    })
}



router2.get('/', async (req,res)=>{


let all_data: datatypes = await fetchData(sqlstr)
let tableData = await fetchData(sqlstr)

    let mySQLTableName = 'O83878NED'
    let provide_values = await cbs_tables_promise

    console.log("ok for now")
    res.render('../views/dropdown.ejs', { existing_tables: provide_values, getID: all_data, tablename: mySQLTableName, tabledata: tableData})
})

router2.get('/:headername', async(req,res)=>{
    let tableData = await fetchData(sqlstr)
    let all_data: datatypes = await fetchData(sqlstr)
    let mySQLTableName = 'O83878NED'
    let provide_values = await cbs_tables_promise
    res.render('../views/dropdown.ejs', {headername: mySQLTableName, getID: all_data, existing_tables: provide_values, tabledata: tableData, tablename: mySQLTableName})
})

export {router2}